/** @jsx jsx */
import { Styled, jsx } from "theme-ui"
import { getExcerpt } from "../../../util"

export default function ({ item, pageContext: { locale } }) {
  return (
    <Styled.p sx={{ mt: 0, whiteSpace: `pre-line` }}>
      {getExcerpt(item, locale)}
    </Styled.p>
  )
}
