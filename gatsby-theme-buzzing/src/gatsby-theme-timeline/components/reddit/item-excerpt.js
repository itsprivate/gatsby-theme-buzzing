/** @jsx jsx */
import { Themed, jsx } from "theme-ui"
import { getExcerpt } from "../../../util"

export default function ({ item, pageContext: { locale } }) {
  return (
    <Themed.p sx={{ mt: 0, whiteSpace: `pre-line` }}>
      {getExcerpt(item, locale)}
    </Themed.p>
  )
}
