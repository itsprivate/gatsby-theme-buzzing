require("dotenv").config()
const _ = require("lodash")
const { onPreInit: init } = require("./util")
const withDefaults = require(`./utils/default-options`)
const fs = require("fs").promises

module.exports = themeOptions => {
  const options = withDefaults(themeOptions)

  init(options)

  let plugins = []

  plugins = plugins.concat([
    {
      resolve: `gatsby-transformer-json`,
      options: {
        typeName: ({ node }) => {
          const rootDirectoryName = node.relativeDirectory.split(`/`)[1]
          const rootArr = rootDirectoryName.split("-")
          const rootPrefix = rootArr[0]
          let isOtherType = false
          if (rootArr.length > 1) {
            isOtherType = rootArr[rootArr.length - 1] === "issues"
          }
          return _.upperFirst(
            _.camelCase(`${isOtherType ? rootDirectoryName : rootPrefix} Json`)
          )
        },
      },
    },
    {
      resolve: `gatsby-theme-timeline`,
      options: options,
    },
    {
      resolve: `gatsby-theme-i18n-react-i18next`,
      options: {
        locales: options.localesPath,
        i18nextOptions: {
          debug: process.env.NODE_ENV === "development" ? true : false,
          ns: ["translation", "translation-tag"],
          fallbackLng: {
            "zh-Hant": ["zh", "en"],
            default: ["en"],
          },
          keySeparator: "__::__",
          nsSeparator: "__::::__",
        },
      },
    },

    {
      resolve: `gatsby-plugin-feed`,
      options: {
        feeds: ["en", "zh", "zh-Hant"].map(locale => {
          const kebabLocale = kebabToSnakeCase(locale)
          return {
            serialize: async ({ query: { site, allBlogPost } }) => {
              let items = []
              for (let i = 0; i < allBlogPost.nodes.length; i++) {
                const node = allBlogPost.nodes[i]

                let title = node.title
                let excerpt = node.excerpt
                if (node.__typename === "RedditPost") {
                  if (node.parent && node.parent.the_new_excerpt) {
                    excerpt = node.parent.the_new_excerpt
                  }
                }
                if (
                  node.parent &&
                  node.parent.i18nResource &&
                  node.parent.i18nResource[kebabLocale]
                ) {
                  if (node.parent.i18nResource[kebabLocale].title) {
                    title = node.parent.i18nResource[kebabLocale].title
                  }
                  if (node.parent.i18nResource[kebabLocale].excerpt) {
                    excerpt = node.parent.i18nResource[kebabLocale].excerpt
                  }
                  if (node.__typename === "RedditPost") {
                    if (node.parent.i18nResource[kebabLocale].the_new_excerpt) {
                      excerpt =
                        node.parent.i18nResource[kebabLocale].the_new_excerpt
                    }
                  }
                }

                items.push({
                  title,
                  description: excerpt,
                  date: node.dateISO,
                  url: node.permalink
                    ? `https://www.reddit.com${node.permalink}`
                    : site.siteMetadata.siteUrl + node.slug,
                  guid: site.siteMetadata.siteUrl + node.slug,
                  custom_elements: [
                    { "content:encoded": node.body || excerpt },
                    {
                      category: {
                        _attr: {
                          term: node.subreddit,
                          label: `/r/${node.subreddit}`,
                        },
                      },
                    },
                  ],
                })
              }
              return items
            },
            query: `
             {
                allBlogPost(
                  limit: 50
                  sort: { fields: [date, slug], order: DESC }
                ) {
                  nodes {
                    id
                    __typename
                    excerpt
                    slug
                    title
                    body
                    dateISO: date
                    ... on RedditPost {
                      permalink
                      subreddit
                      redditId
                      parent {
                        ... on RedditJson {
                          the_new_excerpt
                          i18nResource {
                            zh {
                              title
                              the_new_excerpt
                            }
                            zh_Hant {
                              title
                              the_new_excerpt
                            }
                          }
                        }
                      }
                    }
                    ... on MdxBlogPost {
                      id
                      parent {
                        ... on Mdx {
                          html
                        }
                      }
                    }
                  }
                }
              }
            `,
            output: locale === "zh" ? "/rss.xml" : `/${locale}/rss.xml`,
            language: locale,
          }
        }),
      },
    },
    {
      resolve: `gatsby-plugin-sitemap`,
    },
  ])
  return {
    plugins,
    // Customize your site metadata:
    siteMetadata: {
      title: `Buzzing on Reddit`,
      author: `Reddit`,
      description: `See what's buzzing on Reddit in your native language`,
      siteUrl: "https://reddit.buzzing.cc",
      menuLinks: [],
      social: [],
    },
  }
}
const kebabToSnakeCase = str => {
  return str.replace(/-/g, "_")
}
