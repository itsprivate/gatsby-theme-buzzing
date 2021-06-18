/** @jsx jsx */
import { Themed, jsx } from "theme-ui"
import { t } from "../../../util"

export default function ({ item, pageContext: { locale } }) {
  const { excerpt } = item
  if (!excerpt) {
    return null
  }
  let localize = []
  if (item.parent && item.parent.localize) {
    localize = item.parent.localize
  }

  const finalExcerpt = t("description", localize, excerpt, locale)

  return (
    <Themed.p
      data-test="item-excerpt"
      sx={{ whiteSpace: `pre-line`, color: `textMuted` }}
    >
      {finalExcerpt}
    </Themed.p>
  )
}
