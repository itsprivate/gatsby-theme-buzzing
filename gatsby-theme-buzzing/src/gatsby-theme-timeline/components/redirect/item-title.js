/** @jsx jsx */
import { Link as LinkUI, jsx, Styled } from "theme-ui"
import { getTitle } from "../../../util"

export default function ({ item, pageContext: { locale } }) {
  const { url } = item
  let finalUrl = url
  return (
    <LinkUI
      target="_blank"
      rel="noopener noreferrer"
      sx={{ color: `text` }}
      href={finalUrl}
    >
      <Styled.h3 sx={{ fontWeight: `normal`, fontSize: `1.15rem` }}>
        {getTitle(item, locale)}
      </Styled.h3>
    </LinkUI>
  )
}
