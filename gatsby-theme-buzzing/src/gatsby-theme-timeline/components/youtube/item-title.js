/** @jsx jsx */
import { Link as LinkUI, jsx, Styled } from "theme-ui"
import { getTitle } from "../../../util"

export default function ({ item, pageContext: { locale } }) {
  const { url } = item
  return (
    <LinkUI sx={{ color: `text` }} href={url}>
      <Styled.h3 sx={{ fontWeight: `normal`, fontSize: `1.15rem` }}>
        {getTitle(item, locale)}
      </Styled.h3>
    </LinkUI>
  )
}
