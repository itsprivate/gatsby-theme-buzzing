import React from "react"
import SEO from "gatsby-theme-timeline/src/components/seo"
import i18next from "i18next"
import { useStaticQuery, graphql } from "gatsby"
import { t } from "../../util"
export default ({ pageContext }) => {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            localize {
              title
              description
            }
          }
        }
      }
    `
  )
  const { pageType, tag, currentPage, date } = pageContext
  const page = currentPage
  const issueNumber = page
  const description = t(
    "description",
    site.siteMetadata.localize,
    site.siteMetadata.description,
    pageContext.locale
  )
  let title = description
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
