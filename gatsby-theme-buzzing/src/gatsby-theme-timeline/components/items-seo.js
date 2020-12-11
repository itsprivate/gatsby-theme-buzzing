import React from "react"
import SEO from "gatsby-theme-timeline/src/components/seo"
import i18next from "i18next"

export default ({ pageContext }) => {
  const { pageType, tag, currentPage, date } = pageContext
  const page = currentPage
  const issueNumber = page
  let title = i18next.t(`See what's buzzing on Reddit in your native language`)
  if (pageType === `tag`) {
    title = i18next.t(`translation-tag__::::__${tag}`)
  } else if (pageType === `issues`) {
    title = i18next.t(`Weekly Selection`)
  } else if (pageType === `issue`) {
    const dateTitle = ` · ${date}`
    title =
      i18next.t(`Weekly Selection`) +
      "-" +
      i18next.t("Issue {{issueNumber}}", `Issue ${issueNumber}`, {
        issueNumber,
      }) +
      dateTitle
  }
  return <SEO title={title} />
}
