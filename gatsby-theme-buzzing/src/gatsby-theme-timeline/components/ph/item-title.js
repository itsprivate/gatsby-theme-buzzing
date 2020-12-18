/** @jsx jsx */
import { Link as LinkUI, jsx, Styled } from "theme-ui"
import { kebabToSnakeCase } from "../../../util"

export default function ({ item, pageContext: { locale } }) {
  const { title, url, tagline } = item
  let finalTitle = `${title} - ${tagline}`
  let finalLocale = kebabToSnakeCase(locale)
  if (
    item.parent &&
    item.parent.i18nResource &&
    item.parent.i18nResource[finalLocale] &&
    item.parent.i18nResource[finalLocale].tagline
  ) {
    finalTitle = `${title} - ${item.parent.i18nResource[finalLocale].tagline}`
  }
  return (
    <LinkUI
      sx={{ color: `text` }}
      href={url}
      target="_blank"
      rel="noopener noreferrer"
    >
      <Styled.h3 sx={{ fontWeight: `normal` }}>{finalTitle}</Styled.h3>
    </LinkUI>
  )
}
