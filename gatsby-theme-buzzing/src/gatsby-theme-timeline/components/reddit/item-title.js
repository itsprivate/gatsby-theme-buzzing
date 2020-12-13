/** @jsx jsx */
import { Link as LinkUI, jsx, Styled } from "theme-ui"
import { kebabToSnakeCase } from "../../../util"
export default function ({ item, pageContext: { locale } }) {
  const { title, isSelf, permalink, url, postHint } = item
  let finalTitle = title
  let finalLocale = kebabToSnakeCase(locale)
  if (
    item.parent &&
    item.parent.i18nResource &&
    item.parent.i18nResource[finalLocale] &&
    item.parent.i18nResource[finalLocale].title
  ) {
    finalTitle = item.parent.i18nResource[finalLocale].title
  }
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
