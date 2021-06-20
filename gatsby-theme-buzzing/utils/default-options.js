const withDefaults = require(`gatsby-theme-timeline/utils/default-options`)
const { localesPath: defautlLocalesPath } = require("./constans")

module.exports = themeOptions => {
  const baseOptions = withDefaults(themeOptions)
  const issueTypeName = themeOptions.issueTypeName || [`IssuesJson`]
  const localesPath = themeOptions.localesPath || defautlLocalesPath
  return {
    ...baseOptions,
    shouldTransformJson: false,
    shouldTransformImage: false,
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
