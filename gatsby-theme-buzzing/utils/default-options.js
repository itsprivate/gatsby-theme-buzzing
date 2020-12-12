const withDefaults = require(`gatsby-theme-timeline/utils/default-options`)
const {
  localesPath: defautlLocalesPath,
  localeNamespacePrefixes: defaultLocaleNamespacePrefixes,
  fromYear: defaultFromYear,
} = require("./constans")
const { getLocaleNamespaces } = require("../util")

const defaultNamespace = `translation`
const fallbackLng = `en`
module.exports = themeOptions => {
  const baseOptions = withDefaults(themeOptions)
  const issueTypeName = themeOptions.issueTypeName || [`IssuesJson`]
  const localesPath = themeOptions.localesPath || defautlLocalesPath
  const fromYear = themeOptions.fromYear || defaultFromYear
  const localeNamespacePrefixes =
    themeOptions.localeNamespacePrefixes || defaultLocaleNamespacePrefixes
  const interpolation =
    (themeOptions.i18nextOptions &&
      themeOptions.i18nextOptions.interpolation) ||
    {}
  return {
    ...baseOptions,
    shouldTransformJson: false,
    shouldTransformImage: false,
    issueTypeName,
    localesPath,
    fromYear,
    localeNamespacePrefixes,
    ...themeOptions,
    i18nConfig: {
      defaultLang: `zh`,
      configPath: require.resolve(`../i18n/config.json`),
      ...themeOptions.i18nConfig,
    },
    i18nextOptions: {
      defaultNS: defaultNamespace,
      ns: getLocaleNamespaces({
        fromYear: fromYear,
        localeNamespacePrefixes: localeNamespacePrefixes,
      }),
      fallbackLng,
      keySeparator: "__::__",
      nsSeparator: "__::::__",
      interpolation: {
        escapeValue: false,
        ...interpolation,
      },
      initImmediate: false,
      ...themeOptions.i18nextOptions,
    },
  }
}
