/** @jsx jsx */
import { Link as LinkUI, jsx, Themed } from "theme-ui"
import { t } from "../../../util"

function getDomain(url) {
  url = url.replace(/(https?:\/\/)?(www.)?/i, ``)
  if (url.indexOf(`/`) !== -1) {
    return url.split(`/`)[0]
  }

  return url
}
export default function ({ item, pageContext: { locale } }) {
  const { title, url, originalUrl } = item
  let localize = []
  if (item.parent && item.parent.localize) {
    localize = item.parent.localize
  }
  let finalTitle = t("title", localize, title, locale)

  let finalUrl = originalUrl || url

  return (
    <LinkUI data-test="item-title" sx={{ color: `text` }} href={finalUrl}>
      <Themed.h3 sx={{ fontWeight: `normal`, fontSize: `1.15rem` }}>
        {finalTitle}
        {` `}
        {finalUrl && (
          <span sx={{ color: `textMuted`, fontSize: `0.9rem` }}>
            ({getDomain(finalUrl)})
          </span>
        )}
      </Themed.h3>
    </LinkUI>
  )
}
