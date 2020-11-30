const { urlResolve, createContentDigest } = require(`gatsby-core-utils`)
const { ISSUE_TYPE_NAME } = require("./utils/constans")
const withDefaults = require("./utils/default-options")
exports.createSchemaCustomization = ({ actions }) => {
  const { createTypes } = actions
  createTypes(`
    type Fields {
      basePath: String
    }
    type IssueItem {
      type: String!
      slug: String!
      createdAT: Date! @dateformat
    }
    type ${ISSUE_TYPE_NAME} implements Node @dontInfer {
      id: ID!
      slug: String!
      date: Date! @dateformat
      issueNumber: Int!
      draft: Boolean!
      items: [IssueItem!]
    }
  `)
}
exports.createResolvers = ({ createResolvers }) => {
  const resolvers = {
    [ISSUE_TYPE_NAME]: {
      fields: {
        type: `Fields`,
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
  const { issueTypeName, basePath } = withDefaults({
    issueTypeName: ["RedditTopIssuesJson"],
  })

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
      items: node.items.map(item => {
        const itemCreatedAt = new Date(item.createdAt).toISOString()
        return {
          slug: item.slug,
          type: item.type,
          createdAt: itemCreatedAt,
        }
      }),
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
  const IssuesTemplate = require.resolve(`./src/templates/issues-query`)
  const issuesResult = await graphql(
    `
      {
        allIssue(filter: { draft: { eq: false } }) {
          nodes {
            id
            issueNumber
            items {
              slug
              type
            }
          }
        }
      }
    `,
    {
      filter: {},
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
        pageType: `issues`,
        tagsFilter: {},
        filter: postsFilter,
        limit: 1000,
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
  const issuePageInfo = {
    path: urlResolve(basePath, `issues`),
    component: IssuesTemplate,
    context: {
      basePath,
      pageType: "issues",
    },
  }
  createPage(issuePageInfo)
}
