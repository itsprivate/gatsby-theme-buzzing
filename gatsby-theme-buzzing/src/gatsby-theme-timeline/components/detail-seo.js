import React from "react"
import SEO from "gatsby-theme-timeline/src/components/seo"
import { t } from "../../util"
import {
  TWEET_TYPE_NAME,
  REDDIT_TYPE_NAME,
  PH_TYPE_NAME,
} from "gatsby-theme-timeline/src/constans"
export default ({ item, location, pageContext: { locale } }) => {
  const provider = item.provider
  let description = item.excerpt
  let title = item.title

  let localize = []
  if (item.parent && item.parent.localize) {
    localize = item.parent.localize
  }
  if (provider === PH_TYPE_NAME) {
    const titleArr = title.split(" - ")
    const pureTitle = titleArr[0]
    title = `${pureTitle} - ${t("tagline", localize, item.tagline, locale)}`
  } else if (provider === TWEET_TYPE_NAME) {
    title = t("full_text", localize, title, locale)
  } else {
    title = t("title", localize, title, locale)
  }

  if (provider === REDDIT_TYPE_NAME) {
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
