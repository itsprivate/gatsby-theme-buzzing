import React from "react"
import SEO from "gatsby-theme-timeline/src/components/seo"
import i18next from "i18next"

export default ({ pageContext }) => {
  const { pageType, tag } = pageContext
  let title = i18next.t(`See the hottest posts on Reddit`)
  if (pageType === `tag`) {
    title = i18next.t(`translation-tag__::::__${tag}`)
  }
  return <SEO title={title} />
}
