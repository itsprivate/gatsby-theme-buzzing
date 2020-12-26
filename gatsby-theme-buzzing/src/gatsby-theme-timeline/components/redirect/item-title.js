/** @jsx jsx */
import { Link as LinkUI, jsx, Styled } from "theme-ui"
import { t } from "../../../util"

export default function ({ item, pageContext: { locale } }) {
  const { title, url } = item
  let localize = []
  if (item.parent && item.parent.localize) {
    localize = item.parent.localize
  }
  let finalTitle = t("title", localize, title, locale)

  let finalUrl = url

  return (
    <LinkUI
      target="_blank"
      rel="noopener noreferrer"
      sx={{ color: `text` }}
      href={finalUrl}
    >
      <Styled.h3 sx={{ fontWeight: `normal`, fontSize: `1.15rem` }}>
        {finalTitle}
      </Styled.h3>
    </LinkUI>
  )
}
