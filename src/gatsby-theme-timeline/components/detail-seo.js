import React from "react"
import SEO from "gatsby-theme-timeline/src/components/seo"
import i18next from "i18next"

export default ({ item, location }) => {
  const { dateISO } = item
  const year = new Date(dateISO).getUTCFullYear()
  return (
    <div>
      <SEO
        title={i18next.t(`reddit-title-${year}__::::__${item.title}`)}
        description={item.excerpt}
        imageSource={item.imageRemote ? item.imageRemote : ""}
        imageAlt={item.imageAlt}
        pageType="detail"
        item={item}
        location={location}
      />
    </div>
  )
}
