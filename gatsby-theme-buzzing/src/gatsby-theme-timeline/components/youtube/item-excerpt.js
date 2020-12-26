/** @jsx jsx */
import { Styled, jsx } from "theme-ui"
import { t } from "../../../util"
import processReactString from "gatsby-theme-timeline/src/components/youtube/process-string"
export default function ({ item, pageContext: { locale } }) {
  const { excerpt } = item
  if (!excerpt) {
    return null
  }
  let localize = []
  if (item.parent && item.parent.localize) {
    localize = item.parent.localize
  }
  let finalExcerpt = t("description", localize, excerpt, locale)

  finalExcerpt = processReactString(finalExcerpt)
  return (
    <Styled.p sx={{ whiteSpace: `pre-line`, color: `textMuted` }}>
      {finalExcerpt}
    </Styled.p>
  )
}
