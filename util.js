let {
  localeNamespacePrefixes,
  fromYear,
  localesPath,
} = require("./config.json")
const isDev =
  process.env.NODE_ENV === "development" || process.env.LOCAL === "true"

if (isDev) {
  const config = require("./config-dev.json")
  localesPath = config.localesPath
}
const fs = require("fs-extra")
const i18nConfig = require("./i18n/config.json")
const getAllYears = () => {
  const currentYears = new Date().getUTCFullYear()
  const allYears = []
  for (let i = fromYear; i <= currentYears + 1; i++) {
    allYears.push(i)
  }
  return allYears
}
exports.getAllYears = getAllYears
const getLocaleNamespaces = () => {
  const namespaces = ["translation", "translation-tag"]
  const allYears = getAllYears()
  localeNamespacePrefixes.forEach(prefix => {
    allYears.forEach(year => {
      namespaces.push(prefix + year)
    })
  })
  return namespaces
}
const getLocalesFilePaths = () => {
  const files = []
  const localeNamespaces = getLocaleNamespaces()
  i18nConfig.forEach(locale => {
    localeNamespaces.forEach(namespace => {
      files.push(`${localesPath}/${locale.code}/${namespace}.json`)
    })
  })
  return files
}
const onPreInit = () => {
  // create i18n files if not exists
  const localeFiles = getLocalesFilePaths()
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
