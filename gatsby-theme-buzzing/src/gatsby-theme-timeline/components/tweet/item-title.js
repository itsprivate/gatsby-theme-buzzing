/** @jsx jsx */
import { Box, jsx } from "theme-ui"
import processTweetString from "gatsby-theme-timeline/src/components/tweet/process-tweet-string"
import { getTitle } from "../../../util"

export default function ({ item, pageContext: { locale } }) {
  const body = processTweetString(getTitle(item, locale))
  return <Box sx={{ fontSize: 1, py: 2, whiteSpace: `pre-line` }}>{body}</Box>
}
