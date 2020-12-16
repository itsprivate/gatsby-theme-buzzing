/** @jsx jsx */
import { Box, jsx } from "theme-ui"
import processTweetString from "gatsby-theme-timeline/src/components/tweet/process-tweet-string"
import { kebabToSnakeCase } from "../../../util"

export default function ({ item, pageContext: { locale } }) {
  const { isQuoteStatus, quoteBody } = item

  if (!isQuoteStatus || !quoteBody) {
    return null
  }
  let finalExcerpt = quoteBody
  let finalQuoteBody = ``
  let finalLocale = kebabToSnakeCase(locale)
  if (
    item.parent &&
    item.parent.i18nResource &&
    item.parent.i18nResource[finalLocale] &&
    item.parent.i18nResource[finalLocale]["quoted_status_full_text"]
  ) {
    finalExcerpt =
      item.parent.i18nResource[finalLocale]["quoted_status_full_text"]
  }
  if (isQuoteStatus) {
    finalQuoteBody = processTweetString(finalExcerpt)
  }
  return (
    <Box sx={{ fontSize: 1, py: 2, whiteSpace: `pre-line` }}>
      {finalQuoteBody}
    </Box>
  )
}
