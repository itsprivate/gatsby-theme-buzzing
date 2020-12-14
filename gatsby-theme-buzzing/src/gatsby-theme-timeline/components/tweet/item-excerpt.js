/** @jsx jsx */
import { Box, jsx } from "theme-ui"
import processTweetString from "gatsby-theme-timeline/src/components/tweet/process-tweet-string"
import { kebabToSnakeCase } from "../../../util"

export default function ({ item, pageContext: { locale } }) {
  const { excerpt } = item
  if (!excerpt) {
    return null
  }
  let finalExcerpt = excerpt
  let finalLocale = kebabToSnakeCase(locale)
  if (
    item.parent &&
    item.parent.i18nResource &&
    item.parent.i18nResource[finalLocale] &&
    item.parent.i18nResource[finalLocale].full_text
  ) {
    finalExcerpt = item.parent.i18nResource[finalLocale].full_text
  }
  const body = processTweetString(finalExcerpt)
  return <Box sx={{ fontSize: 1, py: 2, whiteSpace: `pre-line` }}>{body}</Box>
}
