import React from "react"
import SEO from "gatsby-theme-timeline/src/components/seo"
import { t } from "../../util"

export default ({ item, location, pageContext: { locale } }) => {
  let description = item.excerpt
  let title = item.title

  let localize = []
  if (item.parent && item.parent.localize) {
    localize = item.parent.localize
  }

  if (item.__typename === "PhPost") {
    title = `${title} - ${t("tagline", localize, item.tagline, locale)}`
  } else if (item.__typename === "TweetPost") {
    title = t("full_text", localize, title, locale)
  } else {
    title = t("title", localize, title, locale)
  }

  if (item.__typename === "RedditPost") {
    description = t(
      "the_new_excerpt",
      localize,
      item.parent.the_new_excerpt,
      locale
    )
  } else {
    description = t("description", localize, description, locale)
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
