const withDefaults = require(`gatsby-theme-timeline/utils/default-options`)
module.exports = themeOptions => {
  const baseOptions = withDefaults(themeOptions)
  const issueTypeName = themeOptions.issueTypeName || [`IssuesJson`]
  return {
    ...baseOptions,
    issueTypeName,
  }
}
