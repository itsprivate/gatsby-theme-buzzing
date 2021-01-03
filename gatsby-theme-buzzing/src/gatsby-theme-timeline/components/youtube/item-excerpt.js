/** @jsx jsx */
import { Styled, jsx } from "theme-ui"
import { getExcerpt } from "../../../util"
import processReactString from "gatsby-theme-timeline/src/components/youtube/process-string"
export default function ({ item, pageContext: { locale } }) {
  const { excerpt } = item
  if (!excerpt) {
    return null
  }

  let finalExcerpt = excerpt
  finalExcerpt = processReactString(getExcerpt(item, locale))
  return (
    <Styled.p sx={{ whiteSpace: `pre-line`, color: `textMuted` }}>
      {finalExcerpt}
    </Styled.p>
  )
}
