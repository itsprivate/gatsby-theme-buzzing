const fs = require("fs-extra")
const getAllYears = ({ fromYear }) => {
  const currentYears = new Date().getUTCFullYear()
  const allYears = []
  for (let i = fromYear; i <= currentYears + 1; i++) {
    allYears.push(i)
  }
  return allYears
}
exports.getAllYears = getAllYears
const getLocaleNamespaces = ({ fromYear, localeNamespacePrefixes }) => {
  const namespaces = ["translation", "translation-tag"]
  const allYears = getAllYears({ fromYear })
  localeNamespacePrefixes.forEach(prefix => {
    allYears.forEach(year => {
      namespaces.push(prefix + year)
    })
  })
  return namespaces
}
const getLocalesFilePaths = ({
  i18nConfig,
  localeNamespacePrefixes,
  fromYear,
  localesPath,
}) => {
  const files = []
  const localeNamespaces = getLocaleNamespaces({
    fromYear,
    localeNamespacePrefixes,
  })
  const i18nConfigPath = i18nConfig.configPath
  const i18nList = require(i18nConfigPath)
  i18nList.forEach(locale => {
    localeNamespaces.forEach(namespace => {
      files.push(`${localesPath}/${locale.code}/${namespace}.json`)
    })
  })
  return files
}
const onPreInit = ({
  localeNamespacePrefixes,
  fromYear,
  localesPath,
  i18nConfig,
}) => {
  // create i18n files if not exists
  const localeFiles = getLocalesFilePaths({
    i18nConfig,
    localeNamespacePrefixes,
    fromYear,
    localesPath,
  })
  for (let i = 0; i < localeFiles.length; i++) {
    const file = localeFiles[i]
    const isExist = fs.pathExistsSync(file)
    if (!isExist) {
      // create parent folder
      fs.outputJsonSync(file, {})
    }
  }
}
exports.getLocaleNamespaces = getLocaleNamespaces
exports.getLocalesFilePaths = getLocalesFilePaths
exports.onPreInit = onPreInit
