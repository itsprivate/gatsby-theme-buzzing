/** @jsx jsx */
import { LocalizedLink as Link } from "gatsby-theme-i18n"
import { Flex, jsx, Link as LinkUI } from "theme-ui"
import { kebabToSnakeCase } from "../../util"

const DetailFooterNav = ({ previous, next, item, pageContext: { locale } }) => {
  let finalLocale = kebabToSnakeCase(locale)

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
