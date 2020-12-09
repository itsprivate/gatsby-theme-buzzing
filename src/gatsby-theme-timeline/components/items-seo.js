import React from "react"
import SEO from "gatsby-theme-timeline/src/components/seo"
import i18next from "i18next"

export default ({ pageContext }) => {
  const { pageType, tag } = pageContext
  let title = i18next.t(`See what's buzzing on Reddit in your native language`)
  if (pageType === `tag`) {
    title = i18next.t(`translation-tag__::::__${tag}`)
  } else if (pageType === `issues`) {
    title = i18next.t(`Weekly Selection`)
  }
  return <SEO title={title} />
}
