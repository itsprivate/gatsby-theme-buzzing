import React from "react"
import SEO from "gatsby-theme-timeline/src/components/seo"
import i18next from "i18next"
import { t } from "../../util"
export default ({ pageContext, siteMetadata, image }) => {
  const { pageType, tag: pageTag, currentPage, date } = pageContext
  const page = currentPage
  const issueNumber = page
  const description = t(
    "description",
    siteMetadata.localize,
    siteMetadata.description,
    pageContext.locale
  )
  let title = description
  let seoDescription = ""
  let siteTitle = t(
    "title",
    siteMetadata.localize,
    siteMetadata.title,
    pageContext.locale
  )
  if (pageType === `tag`) {
    const tag = i18next.t(`translation-tag__::::__${pageTag}`)
    title = tag
    seoDescription = i18next.t(`See all posts about {{tag}} at {{siteTitle}}`, {
      tag,
      siteTitle,
    })
  } else if (pageType === `issues`) {
    title = i18next.t(`Weekly Selection`)
    seoDescription = i18next.t(
      `{{siteTitle}} selects the most popular content for you each week`,
      {
        siteTitle,
      }
    )
  } else if (pageType === `issue`) {
    const dateTitle = ` · ${date}`
    title =
      i18next.t(`Weekly Selection`) +
      "-" +
      i18next.t("Issue {{issueNumber}}", `Issue ${issueNumber}`, {
        issueNumber,
      }) +
      dateTitle +
      ` - ${siteTitle}`
    seoDescription = i18next.t(
      `Click to view Issue {{issueNumber}} of {{siteTitle}}`,
      {
        siteTitle,
        issueNumber,
      }
    )
  }

  return (
    <SEO
      title={title}
      description={seoDescription}
      imageSource={pageType === `home` ? null : image}
      siteMetadata={siteMetadata}
    />
  )
}
