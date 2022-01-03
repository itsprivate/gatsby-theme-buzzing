require("dotenv").config()
const _ = require("lodash")
const { onPreInit: init, t } = require("./util")
const withDefaults = require(`./utils/default-options`)
const { getTitle, getExcerpt } = require("./utils")
module.exports = themeOptions => {
  const options = withDefaults(themeOptions)
  // seems not need do this
  // init(options)

  let plugins = []

  plugins = plugins.concat([
    {
      resolve: `@theowenyoung/gatsby-transformer-json`,
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
        }
      }
    },
    {
      resolve: `gatsby-theme-timeline`,
      options: options
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
            default: ["en"]
          },
          keySeparator: "__::__",
          nsSeparator: "__::::__",
          returnEmptyString: false,
          returnNull: false
        }
      }
    },

    {
      resolve: `gatsby-plugin-feed`,
      options: {
        feeds: ["en", "zh", "zh-Hant"].map(locale => {
          const themeSiteMetadata = options.siteMetadata
          const siteTitle = t(
            "title",
            themeSiteMetadata.localize,
            themeSiteMetadata.title,
            locale
          )
          return {
            serialize: async ({ query: { site, allBlogPost } }) => {
              let items = []
              for (let i = 0; i < allBlogPost.nodes.length; i++) {
                const node = allBlogPost.nodes[i]

                let title = getTitle(node, locale)
                let description = getExcerpt(node, locale)
                let provider = node.provider
                let slimUrl = locale === "zh" ? (site.siteMetadata.siteUrl + node.slug) : `${site.siteMetadata.siteUrl}/${locale}${node.slug}`
                let url = slimUrl

                if (
                  provider === "Hacker News" ||
                  provider === "Reddit" ||
                  provider === "Product Hunt"
                ) {
                  url = `${url}?score=${
                    node.score
                  }&original_url=${encodeURIComponent(
                    node.originalUrl || node.url
                  )}&discuss_url=${encodeURIComponent(node.url)}`
                }
                items.push({
                  title,
                  description,
                  date: node.dateISO,
                  url,
                  guid: slimUrl,
                  custom_elements: [
                    { "content:encoded": node.body || description }
                  ]
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
                    ... on SocialMediaPost {
                      provider
                      thirdPartyId
                      url
                      originalUrl
                      imageRemote
                      video {
                        url
                        embed
                        width
                        height
                      }
                      channel
                      channelUrl
                      author
                      authorUrl
                      authorSlug
                      score
                      views
                      sharedCount
                      likeCount
                      sharedContent {
                        excerpt
                        slug
                        title
                        date(formatString: "MMMM DD, YYYY")
                        dateISO: date
                        datetime: date(formatString: "YYYY-MM-DD HH:mm")
                        tags
                        imageRemote
                        imageAlt
                        video {
                          url
                          embed
                          width
                          height
                        }
                        channel
                        channelUrl
                        author
                        authorUrl
                        authorSlug
                        score
                        views
                        sharedCount
                        likeCount
                      }
                      parent {
                        ... on RedditJson {
                          localize {
                            title
                            the_new_excerpt
                            locale
                          }
                        }
                        ... on HnJson {
                          localize {
                            title
                            locale
                          }
                        }
                        ... on RedirectJson {
                          localize {
                            title
                            locale
                          }
                        }
                        ... on YoutubeJson {
                          localize {
                            title
                            description
                            locale
                          }
                        }
                        ... on PhJson {
                          localize {
                            description
                            tagline
                            locale
                          }
                        }
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
            title: siteTitle
          }
        })
      }
    },
    "gatsby-plugin-robots-txt",
    {
      resolve: `gatsby-plugin-sitemap`,
      options: {
        excludes: ["redirect"],
        filterPages: (page, excludedRoute) => {
          const pathArr = page.path.split("/")
          if (pathArr[1] === excludedRoute || pathArr[2] === excludedRoute) {
            return true
          } else {
            return false
          }
        }
      }
    },
    {
      resolve: `gatsby-plugin-google-adsense`,
      options: {
        publisherId: `ca-pub-5211209136530011`
      }
    }
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
      menuLinks: [],
      social: [],
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
              url: "/issues"
            }
          ],
          social: [
            {
              name: `Reddit`,
              url: `https://www.reddit.com/`,
              external: true
            }
          ]
        }
      ]
    }
  }
}
const kebabToSnakeCase = str => {
  return str.replace(/-/g, "_")
}
