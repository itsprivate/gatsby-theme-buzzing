import React from "react"
import SEO from "gatsby-theme-timeline/src/components/seo"

export default ({ item, location, pageContext: { locale } }) => {
  let description = item.excerpt
  let title = item.title

  if (item.__typename === "RedditPost") {
    if (
      item.parent &&
      item.parent.i18nResource &&
      item.parent.i18nResource[locale] &&
      item.parent.i18nResource[locale].title
    ) {
      title = item.parent.i18nResource[locale].title
    }
    if (item.parent && item.parent.the_new_excerpt) {
      description = item.parent.the_new_excerpt
      if (
        item.parent.i18nResource &&
        item.parent.i18nResource[locale] &&
        item.parent.i18nResource[locale].the_new_excerpt
      ) {
        description = item.parent.i18nResource[locale].the_new_excerpt
      }
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
