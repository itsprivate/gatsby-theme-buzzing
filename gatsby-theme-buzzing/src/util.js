export const kebabToSnakeCase = str => {
  return str.replace(/-/g, "_")
}

export const t = (key, localize, defaultValue, locale = "zh") => {
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
