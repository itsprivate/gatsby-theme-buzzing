require("dotenv").config()
const _ = require("lodash")
const { getLocaleNamespaces, getAllYears } = require("./util")
const withDefaults = require(`./utils/default-options`)
const fs = require("fs").promises

module.exports = themeOptions => {
  const options = withDefaults(themeOptions)

  // init(options)

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
    // {
    //   resolve: `gatsby-theme-i18n-react-i18next`,
    //   options: {
    //     locales: options.localesPath,
    //     i18nextOptions: {
    //       // debug: process.env.NODE_ENV === "development" ? true : false,
    //       ns: getLocaleNamespaces({
    //         fromYear: options.fromYear,
    //         localeNamespacePrefixes: options.localeNamespacePrefixes,
    //       }),
    // fallbackLng: false,
    // load: "currentOnly",
    // fallbackLng: {
    //   "zh-Hant": ["zh", "en"],
    //   default: ["en"],
    // },
    // keySeparator: "__::__",
    // nsSeparator: "__::::__",
    //     },
    //   },
    // },

    {
      resolve: `gatsby-plugin-feed`,
      options: {
        feeds: ["en", "zh", "zh-Hant"].map(locale => {
          return {
            serialize: async ({ query: { site, allBlogPost } }) => {
              // read all translations
              const redditTitles = {}
              const redditExcerpt = {}
              const allYears = getAllYears({ fromYear: options.fromYear })
              for (let i = 0; i < allYears.length; i++) {
                const year = allYears[i]
                const redditTitleFilePath = `${options.localesPath}/${locale}/reddit-title-${year}.json`
                const json = await fs.readFile(redditTitleFilePath, "utf8")
                const translation = JSON.parse(json)
                redditTitles[year] = translation
                const redditExcerptFilePath = `${options.localesPath}/${locale}/reddit-excerpt-${year}.json`
                const excerptJson = await fs.readFile(
                  redditExcerptFilePath,
                  "utf8"
                )
                const excerptTranslation = JSON.parse(excerptJson)
                redditExcerpt[year] = excerptTranslation
              }
              let items = []
              for (let i = 0; i < allBlogPost.nodes.length; i++) {
                const node = allBlogPost.nodes[i]
                const year = new Date(node.dateISO).getUTCFullYear()

                let title = node.title
                let excerpt = node.excerpt

                if (node.__typename === "RedditPost") {
                  title = redditTitles[year][node.title] || node.title
                  excerpt =
                    redditExcerpt[year][node.redditId] ||
                    (node.parent && node.parent.the_new_excerpt) ||
                    node.excerpt
                }
                items.push({
                  title,
                  description: excerpt,
                  date: node.dateISO,
                  url: node.permalink
                    ? `https://www.reddit.com${node.permalink}`
                    : site.siteMetadata.siteUrl + node.slug,
                  guid: site.siteMetadata.siteUrl + node.slug,
                  language: locale,
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
      siteUrl: "https://reddit.owenyoung.com",
      menuLinks: [
        {
          name: "Weekly Selection",
          url: "/issues",
        },
        {
          name: "RSS",
          url: "/rss.xml",
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
  }
}
