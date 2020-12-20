/** @jsx jsx */
import { Box, jsx } from "theme-ui"
import processTweetString from "gatsby-theme-timeline/src/components/tweet/process-tweet-string"
import { t } from "../../../util"

export default function ({ item, pageContext: { locale } }) {
  const { isQuoteStatus, quoteBody } = item

  if (!isQuoteStatus || !quoteBody) {
    return null
  }
  let finalExcerpt = quoteBody
  let finalQuoteBody = ``

  let localize = []
  if (item.parent && item.parent.localize) {
    localize = item.parent.localize
  }
  finalExcerpt = t("quoted_status_full_text", localize, finalExcerpt, locale)
  if (isQuoteStatus) {
    finalQuoteBody = processTweetString(finalExcerpt)
  }
  return (
    <Box sx={{ fontSize: 1, py: 2, whiteSpace: `pre-line` }}>
      {finalQuoteBody}
    </Box>
  )
}
