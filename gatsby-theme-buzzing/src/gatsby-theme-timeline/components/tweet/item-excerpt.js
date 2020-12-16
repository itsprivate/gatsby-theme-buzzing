/** @jsx jsx */
import { Box, jsx } from "theme-ui"
import processTweetString from "gatsby-theme-timeline/src/components/tweet/process-tweet-string"
import { kebabToSnakeCase } from "../../../util"

export default function ({ item, pageContext: { locale } }) {
  const { excerpt, retweeted } = item
  if (!excerpt) {
    return null
  }
  let finalExcerpt = excerpt
  let finalLocale = kebabToSnakeCase(locale)
  let field = "full_text"
  if (retweeted) {
    field = "retweeted_status_full_text"
  }
  if (
    item.parent &&
    item.parent.i18nResource &&
    item.parent.i18nResource[finalLocale] &&
    item.parent.i18nResource[finalLocale][field]
  ) {
    finalExcerpt = item.parent.i18nResource[finalLocale][field]
  }
  const body = processTweetString(finalExcerpt)
  return <Box sx={{ fontSize: 1, py: 2, whiteSpace: `pre-line` }}>{body}</Box>
}
