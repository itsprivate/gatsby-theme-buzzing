/** @jsx jsx */
import { Link as LinkUI, jsx, Styled } from "theme-ui"
import { kebabToSnakeCase } from "../../../util"

function getDomain(url) {
  url = url.replace(/(https?:\/\/)?(www.)?/i, ``)
  if (url.indexOf(`/`) !== -1) {
    return url.split(`/`)[0]
  }

  return url
}
export default function ({ item, pageContext: { locale } }) {
  const { title, url, hnId } = item
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
  let finalUrl = url
  if (!url) {
    finalUrl = `https://news.ycombinator.com/item?id=${hnId}`
  }
  return (
    <LinkUI sx={{ color: `text` }} href={finalUrl}>
      <Styled.h3 sx={{ fontWeight: `normal`, fontSize: `1.15rem` }}>
        {finalTitle}
        {` `}
        {url && (
          <span sx={{ color: `textMuted`, fontSize: `0.9rem` }}>
            ({getDomain(url)})
          </span>
        )}
      </Styled.h3>
    </LinkUI>
  )
}
