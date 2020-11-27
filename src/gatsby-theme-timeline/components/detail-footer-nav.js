/** @jsx jsx */
import { LocalizedLink as Link } from "gatsby-theme-i18n"
import { Flex, jsx, Link as LinkUI } from "theme-ui"
import { Trans } from "react-i18next"

const DetailFooterNav = ({ previous, next, item }) => {
  const { dateISO } = item
  const year = new Date(dateISO).getUTCFullYear()
  if (!(previous || next)) {
    return null
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
            ← <Trans ns={`reddit-title-${year}`}>{previous.title}</Trans>
          </LinkUI>
        )}
      </li>
      <li>
        {next && (
          <LinkUI as={Link} to={next.slug} rel="next">
            <Trans ns={`reddit-title-${year}`}>{next.title}</Trans> →
          </LinkUI>
        )}
      </li>
    </Flex>
  )
}

export default DetailFooterNav
