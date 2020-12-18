/** @jsx jsx */
import { LocalizedLink as Link } from "gatsby-theme-i18n"
import { Flex, jsx, Link as LinkUI } from "theme-ui"
import { kebabToSnakeCase } from "../../util"

const DetailFooterNav = ({ previous, next, item, pageContext: { locale } }) => {
  let finalLocale = kebabToSnakeCase(locale)
  const { title } = item
  if (!(previous || next)) {
    return null
  }
  let finalPreviousTitle = ""
  if (previous) {
    finalPreviousTitle = previous.title

    if (
      previous.__typename === "RedditPost" &&
      previous.parent &&
      previous.parent.i18nResource &&
      previous.parent.i18nResource[finalLocale] &&
      previous.parent.i18nResource[finalLocale].title
    ) {
      finalPreviousTitle = previous.parent.i18nResource[finalLocale].title
    }
    if (
      previous.__typename === "HnPost" &&
      previous.parent &&
      previous.parent.i18nResource &&
      previous.parent.i18nResource[finalLocale] &&
      previous.parent.i18nResource[finalLocale].title
    ) {
      finalPreviousTitle = previous.parent.i18nResource[finalLocale].title
    }
    if (
      previous.__typename === "PhPost" &&
      previous.parent &&
      previous.parent.i18nResource &&
      previous.parent.i18nResource[finalLocale] &&
      previous.parent.i18nResource[finalLocale].tagline
    ) {
      finalPreviousTitle = `${title} - ${previous.parent.i18nResource[finalLocale].tagline}`
    }
    if (
      previous.__typename === "TweetPost" &&
      previous.parent &&
      previous.parent.i18nResource &&
      previous.parent.i18nResource[finalLocale] &&
      previous.parent.i18nResource[finalLocale].full_text
    ) {
      finalPreviousTitle = previous.parent.i18nResource[finalLocale].full_text
    }
  }
  let finalNextTitle = ""
  if (next) {
    finalNextTitle = next.title
    if (
      next.__typename === "RedditPost" &&
      next.parent &&
      next.parent.i18nResource &&
      next.parent.i18nResource[finalLocale] &&
      next.parent.i18nResource[finalLocale].title
    ) {
      finalNextTitle = next.parent.i18nResource[finalLocale].title
    }
    if (
      next.__typename === "HnPost" &&
      next.parent &&
      next.parent.i18nResource &&
      next.parent.i18nResource[finalLocale] &&
      next.parent.i18nResource[finalLocale].title
    ) {
      finalNextTitle = next.parent.i18nResource[finalLocale].title
    }
    if (
      next.__typename === "PhPost" &&
      next.parent &&
      next.parent.i18nResource &&
      next.parent.i18nResource[finalLocale] &&
      next.parent.i18nResource[finalLocale].tagline
    ) {
      finalNextTitle = `${title} - ${next.parent.i18nResource[finalLocale].tagline}`
    }
    if (
      next.__typename === "TweetPost" &&
      next.parent &&
      next.parent.i18nResource &&
      next.parent.i18nResource[finalLocale] &&
      next.parent.i18nResource[finalLocale].full_text
    ) {
      finalNextTitle = next.parent.i18nResource[finalLocale].full_text
    }
  }

  return (
    <Flex
      as="ul"
      sx={{
        flexWrap: `wrap`,
        justifyContent: `space-between`,
        listStyle: `none`,
        padding: 0,
        pt: 3,
        pb: 3,
        fontSize: 2,
      }}
    >
      <li>
        {previous && (
          <LinkUI as={Link} to={previous.slug} rel="prev">
            ← {finalPreviousTitle}
          </LinkUI>
        )}
      </li>
      <li>
        {next && (
          <LinkUI as={Link} to={next.slug} rel="next">
            {finalNextTitle} →
          </LinkUI>
        )}
      </li>
    </Flex>
  )
}

export default DetailFooterNav
