const { urlResolve } = require(`gatsby-core-utils`)
exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions
  const basePath = "/"
  const imageMaxWidth = 1024
  const imageMaxHeight = 512
  const postsPerPage = 1
  // get posts
  const ItemsTemplate = require.resolve(
    `gatsby-theme-timeline/src/templates/posts-query`
  )

  const issuesResult = await graphql(
    `
      {
        allRedditTopWeeklyJson {
          nodes {
            id
            items {
              slug
              type
            }
          }
        }
      }
    `
  )

  if (issuesResult.errors) {
    reporter.panic(issuesResult.errors)
  }
  const { allRedditTopWeeklyJson } = issuesResult.data
  const issues = allRedditTopWeeklyJson.nodes
  for (let i = 0; i < issues.length; i++) {
    const issue = issues[i]
    const issueNumber = issue.id
    const postsFilter = {
      slug: {
        in: issue.items.map(item => {
          return `/reddit${item.slug}`
        }),
      },
    }
    const result = await graphql(
      `
        query ItemsCreatePageQuery($filter: BlogPostFilterInput) {
          allBlogPost(
            sort: { fields: [date, slug], order: DESC }
            filter: $filter
          ) {
            nodes {
              id
              slug
            }
          }
        }
      `,
      {
        filter: postsFilter,
      }
    )

    if (result.errors) {
      reporter.panic(result.errors)
    }

    // Create Posts and Post pages.
    const totalPages = Math.ceil(issues.length / postsPerPage)
    const total = issues.length
    // create posts pages
    const pageInfo = {
      path: urlResolve(basePath, `issues/${issueNumber}`),
      component: ItemsTemplate,
      context: {
        basePath,
        pageType: `issue`,
        tagsFilter: postsFilter,
        filter: postsFilter,
        limit: postsPerPage,
        skip: 0,
        totalPages,
        total: total,
        currentPage: i + 1,
        maxWidth: imageMaxWidth,
        maxHeight: imageMaxHeight,
      },
    }
    createPage(pageInfo)
  }
}
