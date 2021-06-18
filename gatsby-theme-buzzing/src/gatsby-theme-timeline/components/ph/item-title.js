/** @jsx jsx */
import { Link as LinkUI, jsx, Themed } from "theme-ui"
import { getTitle } from "../../../util"

export default function ({ item, pageContext: { locale } }) {
  const { originalUrl: url } = item
  return (
    <LinkUI
      sx={{ color: `text` }}
      href={url}
      target="_blank"
      rel="noopener noreferrer"
    >
      <Themed.h3 sx={{ fontWeight: `normal` }}>
        {getTitle(item, locale)}
      </Themed.h3>
    </LinkUI>
  )
}
