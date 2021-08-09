/** @jsx jsx */
import { LocalizedLink as Link } from "gatsby-theme-i18n"
import {
  TWEET_TYPE_NAME,
  PH_TYPE_NAME,
  SOCIAL_MEDIA_TYPE_NAME,
} from "gatsby-theme-timeline/src/constans"
import { Flex, jsx, Link as LinkUI } from "theme-ui"
import { t } from "../../util"

const DetailFooterNav = ({ previous, next, item, pageContext: { locale } }) => {
  const { title } = item
  if (!(previous || next)) {
    return null
  }
  let finalPreviousTitle = ""
  if (previous) {
    finalPreviousTitle = previous.title
    let localize = []
    if (previous.parent && previous.parent.localize) {
      localize = previous.parent.localize
    }

    if (
      previous.__typename === SOCIAL_MEDIA_TYPE_NAME &&
      previous.provider === PH_TYPE_NAME
    ) {
      finalPreviousTitle = `${title} - ${t(
        "tagline",
        localize,
        previous.tagline,
        locale
      )}`
    } else if (
      previous.__typename === SOCIAL_MEDIA_TYPE_NAME &&
      previous.provider === TWEET_TYPE_NAME
    ) {
      finalPreviousTitle = t("full_text", localize, finalPreviousTitle, locale)
    } else {
      finalPreviousTitle = t("title", localize, finalPreviousTitle, locale)
    }
  }
  let finalNextTitle = ""
  if (next) {
    finalNextTitle = next.title
    let localize = []
    if (next.parent && next.parent.localize) {
      localize = next.parent.localize
    }
    if (
      next.__typename === SOCIAL_MEDIA_TYPE_NAME &&
      next.provider === PH_TYPE_NAME
    ) {
      finalNextTitle = `${title} - ${t(
        "tagline",
        localize,
        next.tagline,
        locale
      )}`
    } else if (
      next.__typename === SOCIAL_MEDIA_TYPE_NAME &&
      next.provider === TWEET_TYPE_NAME
    ) {
      finalNextTitle = t("full_text", localize, finalNextTitle, locale)
    } else {
      finalNextTitle = t("title", localize, finalNextTitle, locale)
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
