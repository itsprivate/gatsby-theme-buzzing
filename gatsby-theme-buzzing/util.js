const fs = require("fs-extra")

const getLocaleNamespaces = () => {
  const namespaces = ["translation", "translation-tag"]
  return namespaces
}
const getLocalesFilePaths = ({ i18nConfig, localesPath }) => {
  const files = []
  const localeNamespaces = getLocaleNamespaces()
  const i18nConfigPath = i18nConfig.configPath
  const i18nList = require(i18nConfigPath)
  i18nList.forEach(locale => {
    localeNamespaces.forEach(namespace => {
      files.push(`${localesPath}/${locale.code}/${namespace}.json`)
    })
  })
  return files
}
const onPreInit = ({ localesPath, i18nConfig }) => {
  // create i18n files if not exists
  const localeFiles = getLocalesFilePaths({
    i18nConfig,
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
exports.t = (key, localize, defaultValue, locale = "zh") => {
  let value = defaultValue
  if (localize && Array.isArray(localize)) {
    for (let i = 0; i < localize.length; i++) {
      const localeItem = localize[i]
      const currentLocale = localeItem.locale
      if (locale === currentLocale) {
        if (localeItem[key]) {
          value = localeItem[key]
          return value
        }
      }
    }
  }
  return value
}
