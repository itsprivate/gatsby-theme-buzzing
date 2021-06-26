const { urlResolve, createContentDigest } = require(`gatsby-core-utils`)
const { ISSUE_TYPE_NAME, ARCHIVE_TYPE_NAME } = require("./utils/constans")
const withDefaults = require("./utils/default-options")
exports.createSchemaCustomization = ({ actions }) => {
  const { createTypes } = actions
  createTypes(`
    type IssueItem {
      type: String!
      slug: String!
    }
    type ${ISSUE_TYPE_NAME} implements Node @dontInfer {
      id: ID!
      slug: String!
      date: Date! @dateformat
      issueNumber: Int!
      draft: Boolean!
      items: [IssueItem!]
    }
    type SiteSiteMetadataLocalizeMenuLinks {
      name: String!
      url: String!
      external: Boolean
      prefetch: Boolean
    }
    type SiteSiteMetadataLocalizeSocial {
      name: String
      url: String
      external: Boolean
      prefetch: Boolean
    }
    type SiteSiteMetadataLocalize {
      author: String
      keywords: [String]
      social: SiteSiteMetadataLocalizeSocial
      menuLinks: [SiteSiteMetadataLocalizeMenuLinks]
    }
  `)
}
exports.createResolvers = ({ createResolvers }) => {
  const resolvers = {
    SocialMediaPost: {
      excerpt: {
        resolve: (source, _, context, __) => {
          if (source.provider === "Reddit") {
            const parentNode = context.nodeModel.getNodeById({
              id: source.parent,
            })
            return parentNode.the_new_excerpt || ""
          } else {
            return source.excerpt || ""
          }
        },
      },
    },
  }
  createResolvers(resolvers)
}
// Create fields for post slugs and source
// This will change with schema customization with work
exports.onCreateNode = async ({ node, actions, getNode }, themeOptions) => {
  const { createNode, createParentChildLink, createNodeField } = actions
  // todo
  const { issueTypeName, basePath } = withDefaults(themeOptions)

  let allIssueTypeName = []
  if (typeof issueTypeName === `string`) {
    allIssueTypeName.push(issueTypeName)
  } else if (Array.isArray(issueTypeName)) {
    allIssueTypeName = issueTypeName
  }

  if (allIssueTypeName.includes(node.internal.type)) {
    const date = new Date(node.updatedAt).toISOString()
    const fieldData = {
      slug: urlResolve(basePath, `issues/${node.issueNumber}`),
      date: date,
      issueNumber: node.issueNumber,
      draft: node.draft,
      items: node.items,
    }

    const nodeId = `${ISSUE_TYPE_NAME}-${node.id}`
    await createNode({
      ...fieldData,
      // Required fields.
      id: nodeId,
      parent: node.id,
      children: [],
      internal: {
        type: ISSUE_TYPE_NAME,
        contentDigest: createContentDigest(fieldData),
        content: JSON.stringify(fieldData),
        description: `${ISSUE_TYPE_NAME}`,
      },
    })
    createParentChildLink({ parent: node, child: getNode(nodeId) })
    // createNodeField
    createNodeField({
      node: getNode(nodeId),
      name: `basePath`,
      value: basePath,
    })
  }
}
exports.createPages = async ({ graphql, actions, reporter }, themeOptions) => {
  const { createPage } = actions
  const basePath = "/"
  const imageMaxWidth = 1024
  const imageMaxHeight = 512
  const postsPerPage = 1
  const { siteMetadata, shouldArchive, postsFilter, skipCreateIndexPages } =
    withDefaults(themeOptions)

  // get posts
  const ItemsTemplate = require.resolve(
    `gatsby-theme-timeline/src/templates/posts-query`
  )
  const IssuesTemplate = require.resolve(`./src/templates/issues-query`)
  const archivesTemplate = require.resolve(`./src/templates/archives-query`)

  const IssuePlainTemplate = require.resolve(
    `./src/templates/issue-plain-query`
  )
  if (!skipCreateIndexPages) {
    const issuesResult = await graphql(
      `
        query ItemsBuzzingQuery($filter: BlogPostFilterInput) {
          allIssue(
            filter: { draft: { eq: false } }
            sort: { fields: [date], order: DESC }
          ) {
            nodes {
              id
              issueNumber
              date(formatString: "YYYY-MM-DD")
              dateISO: date
              items {
                slug
              }
            }
          }
        }
      `,
      {
        filter: postsFilter,
      }
    )

    if (issuesResult.errors) {
      reporter.panic(issuesResult.errors)
    }
    const { allIssue } = issuesResult.data

    const issues = allIssue.nodes
    for (let i = 0; i < issues.length; i++) {
      const issue = issues[i]
      const issueNumber = issue.issueNumber
      const postsFilter = {
        slug: {
          in: issue.items.map(item => {
            return `${item.slug}`
          }),
        },
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
          date: issue.date,
          dateISO: issue.dateISO,
          tagsFilter: {},
          filter: postsFilter,
          limit: 1000,
          skip: 0,
          totalPages,
          total: total,
          currentPage: issueNumber,
          maxWidth: imageMaxWidth,
          maxHeight: imageMaxHeight,
          siteMetadata,
        },
      }
      createPage(pageInfo)
      const issuePlainPageInfo = {
        ...pageInfo,
        path: urlResolve(basePath, `/plain/issues/${issueNumber}`),
        component: IssuePlainTemplate,
      }
      createPage(issuePlainPageInfo)
    }
    const issuePageInfo = {
      path: urlResolve(basePath, `issues`),
      component: IssuesTemplate,
      context: {
        basePath,
        pageType: "issues",
        siteMetadata,
      },
    }
    createPage(issuePageInfo)
  }

  // create arechive page
  if (shouldArchive) {
    // create archive
    const archivesResult = await graphql(
      `
        query ArchiveItemsBuzzingQuery($filter: BlogPostFilterInput) {
          archiveGroup: allBlogPost(
            sort: { fields: [date, title], order: DESC }
            filter: $filter
          ) {
            nodes {
              date
              slug
            }
          }
        }
      `,
      {
        filter: postsFilter,
      }
    )

    if (archivesResult.errors) {
      reporter.panic(archivesResult.errors)
    }
    const { archiveGroup } = archivesResult.data
    const grouped = archiveGroup.nodes.reduce(
      (r, v, i, a, k = getDateInfo(v.date).yearMonth) => (
        (r[k] || (r[k] = [])).push(v), r
      ),
      {}
    )

    const groups = []
    const archiveItems = []
    let groupKeys = Object.keys(grouped)

    const sortGroupKeys = groupKeys.sort((a, b) => {
      const dateStr1 = `${a}-01`
      const dateStr2 = `${b}-01`
      return new Date(dateStr2) - new Date(dateStr1)
    })
    sortGroupKeys.forEach(key => {
      const groupItems = grouped[key]
      const timeArr = key.split("-")
      const year = timeArr[0]
      const month = timeArr[1]
      const date = new Date(Date.UTC(year, month))
      const postsFilter = {
        slug: {
          in: groupItems.map(item => {
            return `${item.slug}`
          }),
        },
      }
      // Create Posts and Post pages.
      const totalPages = 1
      const total = groupItems.length
      // create posts pages
      const pageInfo = {
        path: urlResolve(basePath, `archive/${year}/${month}`),
        component: ItemsTemplate,
        context: {
          basePath,
          pageType: `archive`,
          date: date,
          dateISO: date.toISOString(),
          tagsFilter: {},
          filter: postsFilter,
          limit: 1000,
          skip: 0,
          totalPages,
          total: total,
          currentPage: 1,
          maxWidth: imageMaxWidth,
          maxHeight: imageMaxHeight,
          siteMetadata,
          title: key,
        },
      }
      createPage(pageInfo)
      archiveItems.push({
        year: year,
        month: month,
      })
    })
    const archivePageInfo = {
      path: urlResolve(basePath, `archive`),
      component: archivesTemplate,
      context: {
        basePath,
        pageType: "archives",
        siteMetadata,
        items: archiveItems,
      },
    }
    createPage(archivePageInfo)
  }
}

function getDateInfo(date) {
  const dateObj = new Date(date)
  const year = dateObj.getUTCFullYear()
  const month = dateObj.getUTCMonth() + 1
  const yearMonth = `${year}-${month}`
  return {
    year,
    month,
    yearMonth,
  }
}
