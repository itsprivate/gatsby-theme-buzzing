import React from "react"
import SEO from "gatsby-theme-timeline/src/components/seo"
import { kebabToSnakeCase } from "../../util"

export default ({ item, location, pageContext: { locale } }) => {
  let description = item.excerpt
  let title = item.title
  let finalLocale = kebabToSnakeCase(locale)

  if (item.__typename === "RedditPost") {
    if (
      item.parent &&
      item.parent.i18nResource &&
      item.parent.i18nResource[finalLocale] &&
      item.parent.i18nResource[finalLocale].title
    ) {
      title = item.parent.i18nResource[finalLocale].title
    }
    if (item.parent && item.parent.the_new_excerpt) {
      description = item.parent.the_new_excerpt
      if (
        item.parent.i18nResource &&
        item.parent.i18nResource[finalLocale] &&
        item.parent.i18nResource[finalLocale].the_new_excerpt
      ) {
        description = item.parent.i18nResource[finalLocale].the_new_excerpt
      }
    }
  }
  if (item.__typename === "TweetPost") {
    if (
      item.parent &&
      item.parent.i18nResource &&
      item.parent.i18nResource[finalLocale] &&
      item.parent.i18nResource[finalLocale].full_text
    ) {
      title = item.parent.i18nResource[finalLocale].full_text
    }
  }
  if (!description) {
    description = title
  }
  return (
    <div>
      <SEO
        title={title}
        description={description}
        imageSource={item.imageRemote ? item.imageRemote : ""}
        imageAlt={item.imageAlt}
        pageType="detail"
        item={item}
        location={location}
      />
    </div>
  )
}
