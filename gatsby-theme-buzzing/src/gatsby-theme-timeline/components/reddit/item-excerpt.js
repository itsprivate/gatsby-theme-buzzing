/** @jsx jsx */
import { Styled, jsx } from "theme-ui"
import { t } from "../../../util"

export default function ({ item, pageContext: { locale } }) {
  const { parent } = item
  if (!parent || !parent.the_new_excerpt) {
    return null
  }

  let localize = []
  if (item.parent && item.parent.localize) {
    localize = item.parent.localize
  }
  const finalExcerpt = t(
    "the_new_excerpt",
    localize,
    parent.the_new_excerpt,
    locale
  )
  return (
    <Styled.p sx={{ mt: 0, whiteSpace: `pre-line` }}>{finalExcerpt}</Styled.p>
  )
}
