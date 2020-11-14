require("dotenv").config()
const _ = require("lodash")
const { getLocaleNamespaces, onPreInit: init, getAllYears } = require("./util")
const { localesPath } = require("./config.json")
const fs = require("fs").promises
init()
module.exports = {
  plugins: [
    // {
    //   resolve: `gatsby-source-twitter`,
    //   options: {
    //     credentials: {
    //       consumer_key: process.env.TWITTER_CONSUMER_KEY,
    //       consumer_secret: process.env.TWITTER_CONSUMER_SECRET,
    //       access_token_key: process.env.TWITTER_ACCESS_TOKEN,
    //       access_token_secret: process.env.TWITTER_ACCESS_SECRET,
    //     },
    //     queries: {
    //       MyTweet: {
    //         endpoint: "statuses/user_timeline",
    //         params: {
    //           screen_name: "TheOwenYoung",
    //           include_rts: true,
    //           tweet_mode: "extended",
    //         },
    //       },
    //     },
    //   },
    // },
    {
      resolve: `@theowenyoung/gatsby-source-git`,
      options: {
        name: `RedditTop`,
        remote: `https://github.com/theowenyoung/topic-source.git`,
        branch: `main`,
        // Only import the docs folder from a codebase.
        patterns: ["data/reddit-top/**"],
      },
    },
    {
      resolve: `gatsby-transformer-json`,
      options: {
        typeName: ({ node }) => {
          const rootDirectoryName = node.relativeDirectory.split(`/`)[1]
          return _.upperFirst(_.camelCase(`${rootDirectoryName} Json`))
        },
      },
    },
    {
      resolve: `gatsby-theme-timeline`,
      options: {
        tweetTypeName: ["TweetsJson", "twitterStatusesUserTimelineMyTweet"],
        redditTypeName: ["RedditTopJson"],
        shouldTransformJson: false,
        i18nConfig: {
          defaultLang: `zh`,
          configPath: require.resolve(`./i18n/config.json`),
        },
      },
    },
    {
      resolve: `gatsby-theme-i18n-react-i18next`,
      options: {
        locales: localesPath,
        i18nextOptions: {
          debug: process.env.NODE_ENV === "development" ? true : false,
          ns: getLocaleNamespaces(),
          keySeparator: "__::__",
          nsSeparator: "__::::__",
        },
      },
    },
    {
      resolve: `gatsby-plugin-feed`,
      options: {
        feeds: ["en", "zh"].map(locale => {
          return {
            serialize: async ({ query: { site, allBlogPost } }) => {
              // read all translations
              const redditTitles = {}
              const allYears = getAllYears()
              for (let i = 0; i < allYears.length; i++) {
                const year = allYears[i]
                const redditTitleFilePath = `${localesPath}/zh/reddit-title-${year}.json`
                const json = await fs.readFile(redditTitleFilePath, "utf8")
                const translation = JSON.parse(json)
                redditTitles[year] = translation
              }
              let items = []
              for (let i = 0; i < allBlogPost.nodes.length; i++) {
                const node = allBlogPost.nodes[i]
                const year = new Date(node.dateISO).getUTCFullYear()

                const title =
                  locale === "zh"
                    ? redditTitles[year][node.title]
                      ? redditTitles[year][node.title]
                      : node.title
                    : node.title
                items.push(
                  Object.assign(
                    {},
                    {
                      title,
                      description: node.excerpt,
                      date: node.dateISO,
                      url: node.permalink
                        ? `https://www.reddit.com${node.permalink}`
                        : site.siteMetadata.siteUrl + node.slug,
                      guid: site.siteMetadata.siteUrl + node.slug,
                      language: locale,
                      custom_elements: [
                        { "content:encoded": node.body || node.excerpt },
                        {
                          category: {
                            _attr: {
                              term: node.subreddit,
                              label: `/r/${node.subreddit}`,
                            },
                          },
                        },
                      ],
                    }
                  )
                )
              }
              return items
            },
            query: `
               {
                  allBlogPost(
                    limit: 30
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
  ],
  // Customize your site metadata:
  siteMetadata: {
    title: `Reddit Top`,
    author: `Reddit`,
    description: `The most popular posts on Reddit`,
    siteUrl: "https://reddit-top.vercel.app",
    social: [
      {
        name: `Reddit`,
        url: `https://www.reddit.com/`,
      },
    ],
  },
}
