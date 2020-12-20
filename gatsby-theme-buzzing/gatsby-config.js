require("dotenv").config()
const _ = require("lodash")
const { onPreInit: init, t } = require("./util")
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
          return {
            serialize: async ({ query: { site, allBlogPost } }) => {
              let items = []
              for (let i = 0; i < allBlogPost.nodes.length; i++) {
                const node = allBlogPost.nodes[i]

                let title = node.title
                let description = node.excerpt
                let localize = []
                if (node.parent && node.parent.localize) {
                  localize = node.parent.localize
                }
                if (node.__typename === "PhPost") {
                  title = `${title} - ${t(
                    "tagline",
                    localize,
                    node.tagline,
                    locale
                  )}`
                } else if (node.__typename === "TweetPost") {
                  title = t("full_text", localize, title, locale)
                } else {
                  title = t("title", localize, title, locale)
                }

                if (node.__typename === "RedditPost") {
                  description = t(
                    "the_new_excerpt",
                    localize,
                    node.parent.the_new_excerpt,
                    locale
                  )
                } else {
                  description = t("description", localize, description, locale)
                }

                items.push({
                  title,
                  description: description,
                  date: node.dateISO,
                  url: node.permalink
                    ? `https://www.reddit.com${node.permalink}`
                    : site.siteMetadata.siteUrl + node.slug,
                  guid: site.siteMetadata.siteUrl + node.slug,
                  custom_elements: [
                    { "content:encoded": node.body || description },
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
                  sort: { fields: [date, title], order: DESC }
                ) {
                  nodes {
                    id
                    __typename
                    excerpt
                    slug
                    title
                    body
                    dateISO: date
                    ... on HnPost {
                      imageRemote
                      authorName
                      score
                      hnId
                      url
                      parent {
                        ... on HnJson {
                          localize {
                            title
                            locale
                          }
                        }
                      }
                    }
                    ... on RedditPost {
                      permalink
                      subreddit
                      redditId
                      parent {
                        ... on RedditJson {
                          the_new_excerpt
                          localize {
                            title
                            the_new_excerpt
                            locale
                          }
                        }
                      }
                    }
                    ... on PhPost {
                      imageRemote
                      authorName
                      authorUrl
                      phUrl
                      score
                      url
                      tagline
                      video
                      phId
                      parent {
                        ... on PhJson {
                          localize {
                              locale
                              description
                              tagline
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
                    ... on TweetPost {
                      idStr
                      retweeted
                      isQuoteStatus
                      imageRemote
                      quoteImageRemote
                      authorAvatarRemote
                      quoteAuthorAvatarRemote
                      quoteBody
                      quoteAuthorName
                      quoteAuthorScreenName
                      authorName
                      authorScreenName
                      parent {
                        ... on TweetJson {
                          localize {
                            locale
                            full_text
                            quoted_status_full_text
                            retweeted_status_full_text
                          }
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
      siteUrl: "https://reddit.buzzing.cc",
      author: `Reddit`,
      locale: "zh",
      title: "Reddit 热门",
      shortTitle: "Reddit热门",
      description: "用中文浏览Reddit热门内容",
      keywords: ["buzzing"],
      menuLinks: [
        {
          name: "每周精选",
          url: "/issues",
        },
      ],
      social: [
        {
          name: `Reddit`,
          url: `https://www.reddit.com/`,
          external: true,
        },
      ],
      localize: [
        {
          locale: "en",
          title: `Buzzing on Reddit`,
          shortTitle: "BuzzReddit",
          description: `See what's buzzing on Reddit in your native language`,
          keywords: ["buzzing"],
          menuLinks: [
            {
              name: "Weekly Selection",
              url: "/issues",
            },
          ],
          social: [
            {
              name: `Reddit`,
              url: `https://www.reddit.com/`,
              external: true,
            },
          ],
        },
      ],
    },
  }
}
const kebabToSnakeCase = str => {
  return str.replace(/-/g, "_")
}
