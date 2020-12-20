/** @jsx jsx */
import { Link as LinkUI, jsx, Styled } from "theme-ui"
import { t } from "../../../util"
export default function ({ item, pageContext: { locale } }) {
  const { title, isSelf, permalink, url, postHint } = item
  let finalTitle = title
  let localize = []
  if (item.parent && item.parent.localize) {
    localize = item.parent.localize
  }
  finalTitle = t("title", localize, title, locale)
  return (
    <LinkUI
      sx={{ color: `text` }}
      href={
        isSelf || postHint === `image` || postHint === `hosted:video`
          ? `https://www.reddit.com${permalink}`
          : url
      }
      target="_blank"
      rel="noopener noreferrer"
    >
      <Styled.h3 sx={{ fontSize: 2, fontWeight: `medium` }}>
        {finalTitle}
      </Styled.h3>
    </LinkUI>
  )
}
