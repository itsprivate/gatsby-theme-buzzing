/** @jsx jsx */
import { Link as LinkUI, jsx, Styled } from "theme-ui"
import { t } from "../../../util"

export default function ({ item, pageContext: { locale } }) {
  const { title, url, tagline } = item

  let localize = []
  if (item.parent && item.parent.localize) {
    localize = item.parent.localize
  }
  let finalTagline = t("tagline", localize, tagline, locale)
  let finalTitle = `${title} - ${finalTagline}`
  return (
    <LinkUI
      sx={{ color: `text` }}
      href={url}
      target="_blank"
      rel="noopener noreferrer"
    >
      <Styled.h3 sx={{ fontWeight: `normal` }}>{finalTitle}</Styled.h3>
    </LinkUI>
  )
}
