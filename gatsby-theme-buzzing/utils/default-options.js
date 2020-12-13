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
