const withDefaults = require(`gatsby-theme-timeline/utils/default-options`)
const { localesPath: defautlLocalesPath } = require("./constans")

module.exports = themeOptions => {
  const baseOptions = withDefaults(themeOptions)
  const issueTypeName = themeOptions.issueTypeName || [`IssuesJson`]
  const localesPath = themeOptions.localesPath || defautlLocalesPath
  const siteMetadata = themeOptions.siteMetadata
  if (siteMetadata) {
    siteMetadata.defaultSocialImageUrl =
      "https://images.unsplash.com/photo-1624129591276-5b11185e7b42?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2739&q=80"
  }
  return {
    ...baseOptions,
    shouldTransformJson: false,
    shouldTransformImage: false,
    postsPerPage: 100,
    tagPostsPerPage: 1000,
    postsFilter: {
      date: {
        gt: "2000-12-25T10:54:58.000Z",
      },
    },
    ...themeOptions,
    issueTypeName,
    localesPath,
    i18nConfig: {
      defaultLang: `zh`,
      configPath: require.resolve(`../i18n/config.json`),
      ...themeOptions.i18nConfig,
    },
  }
}
