/** @jsx jsx */
import { Styled, jsx } from "theme-ui"
import { Trans } from "react-i18next"

export default function ({ item }) {
  const { parent, dateISO, redditId } = item
  const year = new Date(dateISO).getUTCFullYear()
  if (!parent || !parent.the_new_excerpt) {
    return null
  }
  return (
    <Styled.p sx={{ whiteSpace: `pre-line` }}>
      <Trans
        ns={`reddit-excerpt-${year}`}
        i18nKey={redditId}
        defaults={parent.the_new_excerpt}
      ></Trans>
    </Styled.p>
  )
}
