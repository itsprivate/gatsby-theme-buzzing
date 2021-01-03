const kebabToSnakeCase = str => {
  return str.replace(/-/g, "_")
}
exports.kebabToSnakeCase = kebabToSnakeCase
const t = (key, localize, defaultValue, locale = "zh") => {
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
exports.t = t
const getTitle = (item, locale = "zh") => {
  let finalTitle = item.title
  let localize = []
  if (item.parent && item.parent.localize) {
    localize = item.parent.localize
  }
  const { provider } = item
  if (provider === "Product Hunt") {
    const titleArr = finalTitle.split(" - ")
    const pureTitle = titleArr[0]
    const pureTagline = titleArr[1]
    let finalTagline = t("tagline", localize, pureTagline, locale)
    finalTitle = `${pureTitle} - ${finalTagline}`
  } else if (provider === "Twitter") {
    const sharedContent = item.sharedContent
    const retweeted =
      sharedContent && sharedContent.title && finalTitle.startsWith(`RT @`)
    let field = "full_text"
    if (retweeted) {
      field = "retweeted_status_full_text"
      finalTitle = sharedContent.title
    }

    finalTitle = t(field, localize, finalTitle, locale)
  } else {
    finalTitle = t("title", localize, finalTitle, locale)
  }
  return finalTitle
}
exports.getTitle = getTitle
const getSharedTitle = (item, locale = "zh") => {
  const { sharedContent } = item

  if (!sharedContent || !sharedContent.title) {
    return null
  }
  let finalTitle = sharedContent.title
  let localize = []
  if (item.parent && item.parent.localize) {
    localize = item.parent.localize
  }
  finalTitle = t("quoted_status_full_text", localize, finalTitle, locale)
  return finalTitle
}
exports.getSharedTitle = getSharedTitle
const getExcerpt = (item, locale = "zh") => {
  let finalExcerpt = item.excerpt
  let localize = []
  if (item.parent && item.parent.localize) {
    localize = item.parent.localize
  }
  const { provider } = item
  if (provider === "Product Hunt" || provider === "Youtube") {
    finalExcerpt = t("description", localize, finalExcerpt, locale)
  } else if (provider === "Reddit") {
    finalExcerpt = t("the_new_excerpt", localize, finalExcerpt, locale)
  } else {
    finalExcerpt = t("excerpt", localize, finalExcerpt, locale)
  }
  return finalExcerpt
}
exports.getExcerpt = getExcerpt
