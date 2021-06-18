/** @jsx jsx */
import { Link as LinkUI, jsx, Themed } from "theme-ui"
import { getTitle } from "../../../util"

export default function ({ item, pageContext: { locale } }) {
  const { url } = item
  let finalUrl = url
  return (
    <LinkUI
      target="_blank"
      rel="noopener noreferrer"
      sx={{ color: `text` }}
      href={finalUrl}
    >
      <Themed.h3
        sx={{
          fontWeight: item.excerpt ? "medium" : `normal`,
          fontSize: item.excerpt ? 2 : `1.15rem`,
        }}
      >
        {getTitle(item, locale)}
      </Themed.h3>
    </LinkUI>
  )
}
