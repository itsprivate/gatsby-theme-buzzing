require("dotenv").config()
const _ = require("lodash")
const { getLocaleNamespaces, onPreInit: init } = require("./util")
const { localesPath } = require("./config.json")
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
          debug: false,
          ns: getLocaleNamespaces(),
          keySeparator: "__::__",
          nsSeparator: "__::::__",
        },
      },
    },
  ],
  // Customize your site metadata:
  siteMetadata: {
    title: `My Blog Title`,
    author: `My Name`,
    description: `My site description...`,
    siteUrl: "http://localhost:8000",
    social: [
      {
        name: `twitter`,
        url: `https://twitter.com/gatsbyjs`,
      },
      {
        name: `github`,
        url: `https://github.com/gatsbyjs`,
      },
    ],
  },
}
