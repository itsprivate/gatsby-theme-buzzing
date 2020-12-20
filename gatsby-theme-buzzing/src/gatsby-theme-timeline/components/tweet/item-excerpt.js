/** @jsx jsx */
import { Box, jsx } from "theme-ui"
import processTweetString from "gatsby-theme-timeline/src/components/tweet/process-tweet-string"
import { t } from "../../../util"

export default function ({ item, pageContext: { locale } }) {
  const { excerpt, retweeted } = item
  if (!excerpt) {
    return null
  }
  let finalExcerpt = excerpt
  let field = "full_text"
  if (retweeted) {
    field = "retweeted_status_full_text"
  }

  let localize = []
  if (item.parent && item.parent.localize) {
    localize = item.parent.localize
  }
  finalExcerpt = t(field, localize, excerpt, locale)

  const body = processTweetString(finalExcerpt)
  return <Box sx={{ fontSize: 1, py: 2, whiteSpace: `pre-line` }}>{body}</Box>
}
