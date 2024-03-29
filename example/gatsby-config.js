const { siteMetadata } = require("./config")
const isDev =
  (process.env.NODE_ENV === "development" || process.env.LOCAL === "true") &&
  process.env.LOCAL !== "false"
let localesPath =
  ".cache/gatsby-source-git/itsprivate/ts-new/RedditTop/i18n/i18next"
if (isDev) {
  localesPath = "./i18n/i18next"
}
let plugins = []
if (isDev) {
  // development not include the whole data
  // plugins.push({
  //   resolve: `@theowenyoung/gatsby-source-git`,
  //   options: {
  //     name: `RedditTop`,
  //     remote: `https://github.com/itsprivate/ts-test.git`,
  //     branch: `main`,
  //     fetchOptions: ["--depth", "1"],
  //     // Only import the docs folder from a codebase.
  //     patterns: [
  //       "data/*-placeholder/1.json",
  //       "data/reddit-top/**",
  //       "data/hn-top/**",
  //       // "data/youtube-top/**",
  //       // "data/ph-top/**",
  //       // "data/reddit-stocks/**",
  //       // "data/tweet-stocks/**",
  //       // "data/reddit-books/**",
  //       // "data/redirect-newstop/**",
  //       // "data/redirect-devtop/**",
  //       // "data/reddit-crypto/**",
  //       // "data/tweet-crypto/**",
  //       // "data/stocks-issues/**",
  //       // "data/hn-top-issues/**",
  //     ],
  //   },
  // })
} else {
  plugins.push({
    resolve: `@theowenyoung/gatsby-source-git`,
    options: {
      name: `RedditTop`,
      remote: `https://github.com/itsprivate/ts-new.git`,
      branch: `main`,
      fetchOptions: ["--depth", "1"],
      // Only import the docs folder from a codebase.
      patterns: [
        "data/*-placeholder/1.json",
        "data/reddit-ask/**"
        // "data/hn-top/**",
        // "data/youtube-top/**",
        // "data/ph-top/**",
        // "data/reddit-stocks/**",
        // "data/reddit-books/**",
        // "data/redirect-newstop/**",
        // "data/tweet-stocks/**",
        // "data/reddit-changemyview/**",
        // "data/reddit-changemyview-issues/**",
        // "data/reddit-crypto/**",
        // "data/tweet-crypto/**",
        // "data/stocks-issues/**",
        // "data/hn-top-issues/**",
      ]
    }
  })
  // plugins.push({
  //   resolve: `@theowenyoung/gatsby-source-git`,
  //   options: {
  //     name: `RedditTop`,
  //     remote: `https://github.com/itsprivate/ts.git`,
  //     branch: `main`,
  //     fetchOptions: ["--depth", "1"],
  //     // Only import the docs folder from a codebase.
  //     patterns: [
  //       "data/*-placeholder/1.json",
  //       "data/hn-top/**",
  //       "data/hn-top-issues/**",
  //     ],
  //   },
  // })
}
plugins = plugins.concat([
  {
    resolve: `gatsby-theme-buzzing`,
    options: {
      siteMetadata: siteMetadata,
      tweetTypeName: ["TweetJson", "twitterStatusesUserTimelineMyTweet"],
      redditTypeName: ["RedditJson"],
      issueTypeName: ["HnTopIssuesJson"],
      localesPath: localesPath
    }
  },
  {
    resolve: `gatsby-plugin-manifest`,
    options: {
      name: siteMetadata.title,
      short_name: siteMetadata.shortTitle,
      start_url: `/`,
      lang: siteMetadata.locale,
      description: siteMetadata.description,
      background_color: `#f7f0eb`,
      theme_color: `#FF4500`,
      display: `standalone`,
      icon: `src/images/icon.png`,
      telegram: "buzzingcc",
      localize: siteMetadata.localize.map(item => {
        return {
          start_url: `/${item.locale}/`,
          lang: item.locale,
          name: item.title,
          short_name: item.shortTitle,
          description: item.description
        }
      })
    }
  },
  {
    resolve: `gatsby-plugin-google-gtag`,
    options: {
      // You can add multiple tracking ids and a pageview event will be fired for all of them.
      trackingIds: [
        "G-GQVR44BC8T" // Google Analytics / GA
      ]
    }
  }
])

module.exports = {
  flags: { QUERY_ON_DEMAND: true },
  plugins: plugins,
  siteMetadata: siteMetadata
}
