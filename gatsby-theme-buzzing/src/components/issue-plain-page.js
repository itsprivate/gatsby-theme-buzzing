/** @jsx jsx */
import ItemBox from "./issue-plain-item"
import { jsx, Styled, Link as LinkUI } from "theme-ui"
import { LocalizedLink as Link } from "gatsby-theme-i18n"
import i18next from "i18next"
import SEO from "gatsby-theme-timeline/src/components/seo"
import ItemsFooter from "gatsby-theme-timeline/src/components/items-footer"

const Items = ({ data, pageContext }) => {
  const { basePath, currentPage: issueNumber, date, dateISO } = pageContext
  const items = data.allBlogPost.nodes
  const {
    site: { siteMetadata },
  } = data
  const siteTitle = siteMetadata.title
  const pageTitle =
    siteMetadata.title +
    ": " +
    i18next.t(`Weekly Selection`) +
    "-" +
    i18next.t("Issue {{issueNumber}}", `Issue ${issueNumber}`, {
      issueNumber,
    })
  const seoTitle =
    i18next.t(`Weekly Selection`) +
    "-" +
    i18next.t("Issue {{issueNumber}}", `Issue ${issueNumber}`, {
      issueNumber,
    }) +
    ` - ${siteTitle}`
  const seoDescription = i18next.t(
    `Click to view Issue {{issueNumber}} of {{siteTitle}}`,
    {
      siteTitle,
      issueNumber,
    }
  )
  return (
    <div
      sx={{
        maxWidth: [`full`, `3xl`],
        mx: `auto`,
        px: [4, 4],
        pt: 4,
      }}
      itemScope
      itemType="https://schema.org/ItemList"
    >
      <SEO title={seoTitle} description={seoDescription} />
      <Styled.h1 sx={{ mb: 3, fontSize: 4 }} itemProp="name">
        {pageTitle}
      </Styled.h1>
      <address sx={{ pb: 4 }}>
        <LinkUI href={siteMetadata.siteUrl} rel="author">
          {siteMetadata.author}
        </LinkUI>
        <time
          sx={{
            color: "textMuted",
            "&:before": {
              content: "'\u2022'",
              padding: "0 7px",
            },
          }}
          dateTime={dateISO}
        >
          {date}
        </time>
      </address>
      <article>
        <ul sx={{ pl: 0, m: 0 }}>
          {items.map((item, index) => {
            return (
              <ItemBox
                key={`item-box-${index}`}
                index={index}
                basePath={basePath}
                item={item}
                pageContext={pageContext}
              ></ItemBox>
            )
          })}
        </ul>
      </article>
      <ItemsFooter pageContext={pageContext}></ItemsFooter>

      <footer
        sx={{
          mt: 4,
          pb: 3,
          textAlign: "center",
        }}
      >
        © {new Date().getFullYear()}
        <LinkUI
          sx={{ ml: 4, mr: 2 }}
          data-test="main-site-link"
          href="https://www.buzzing.cc"
        >
          Buzzing.cc
        </LinkUI>
        <LinkUI
          as={Link}
          data-test="all-issues"
          sx={{ mx: 2, color: "textMuted" }}
          to="/issues"
        >
          All Issues
        </LinkUI>
        <LinkUI
          sx={{ mx: 2, color: "textMuted" }}
          data-test="privacy-link"
          href="https://www.buzzing.cc/privacy"
        >
          Privacy
        </LinkUI>
        <LinkUI
          sx={{ mx: 2, color: "textMuted" }}
          data-test="terms-link"
          href="https://www.buzzing.cc/terms"
        >
          Terms of Service
        </LinkUI>
        {` `}
      </footer>
    </div>
  )
}
export default Items
