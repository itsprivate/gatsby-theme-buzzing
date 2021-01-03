/** @jsx jsx */
import { Link as LinkUI, jsx, Styled } from "theme-ui"
import { getTitle } from "../../../util"

export default function ({ item, pageContext: { locale } }) {
  const { url } = item
  return (
    <LinkUI
      sx={{ color: `text` }}
      href={url}
      target="_blank"
      rel="noopener noreferrer"
    >
      <Styled.h3 sx={{ fontWeight: `normal` }}>
        {getTitle(item, locale)}
      </Styled.h3>
    </LinkUI>
  )
}
