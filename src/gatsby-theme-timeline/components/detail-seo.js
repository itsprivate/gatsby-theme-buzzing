import React from "react"
import SEO from "gatsby-theme-timeline/src/components/seo"
import i18next from "i18next"

export default ({ item, location }) => {
  const { dateISO } = item
  const year = new Date(dateISO).getUTCFullYear()
  let description = item.excerpt
  if (item.__typename === "RedditPost") {
    if (item.parent && item.parent.the_new_excerpt) {
      description =
        i18next.t(`reddit-excerpt-${year}__::::__${item.redditId}`) ||
        item.parent.the_new_excerpt
    }
  }
  const title = i18next.t(`reddit-title-${year}__::::__${item.title}`)
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
