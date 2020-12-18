/** @jsx jsx */
import { Styled, jsx } from "theme-ui"
import { kebabToSnakeCase } from "../../../util"

export default function ({ item, pageContext: { locale } }) {
  const { excerpt } = item
  if (!excerpt) {
    return null
  }
  let finalExcerpt = excerpt
  let finalLocale = kebabToSnakeCase(locale)
  if (
    item.parent &&
    item.parent.i18nResource &&
    item.parent.i18nResource[finalLocale] &&
    item.parent.i18nResource[finalLocale].description
  ) {
    finalExcerpt = item.parent.i18nResource[finalLocale].description
  }
  return (
    <Styled.p sx={{ whiteSpace: `pre-line`, color: `textMuted` }}>
      {finalExcerpt}
    </Styled.p>
  )
}
