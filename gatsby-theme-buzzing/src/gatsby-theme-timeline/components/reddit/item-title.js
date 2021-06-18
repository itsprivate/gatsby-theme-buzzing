/** @jsx jsx */
import { Link as LinkUI, jsx, Themed } from "theme-ui"
import { getTitle } from "../../../util"
export default function ({ item, pageContext: { locale } }) {
  const { url } = item
  return (
    <LinkUI
      sx={{ color: `text` }}
      href={url}
      target="_blank"
      rel="noopener noreferrer"
    >
      <Themed.h3 sx={{ fontSize: 2, fontWeight: `medium` }}>
        {getTitle(item, locale)}
      </Themed.h3>
    </LinkUI>
  )
}
