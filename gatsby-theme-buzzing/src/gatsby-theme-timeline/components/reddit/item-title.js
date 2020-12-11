/** @jsx jsx */
import { Link as LinkUI, jsx, Styled } from "theme-ui"
import { Trans } from "react-i18next"
export default function ({ item }) {
  const { title, isSelf, permalink, url, postHint, dateISO } = item
  const year = new Date(dateISO).getUTCFullYear()
  return (
    <LinkUI
      sx={{ color: `text` }}
      href={
        isSelf || postHint === `image` || postHint === `hosted:video`
          ? `https://www.reddit.com${permalink}`
          : url
      }
      target="_blank"
      rel="noopener noreferrer"
    >
      <Styled.h3 sx={{ fontSize: 2, fontWeight: `medium` }}>
        <Trans ns={`reddit-title-${year}`}>{title}</Trans>
      </Styled.h3>
    </LinkUI>
  )
}
