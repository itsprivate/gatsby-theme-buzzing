/** @jsx jsx */
import { Styled, jsx } from "theme-ui"
import { kebabToSnakeCase } from "../../../util"

export default function ({ item, pageContext: { locale } }) {
  const { parent } = item
  if (!parent || !parent.the_new_excerpt) {
    return null
  }
  let finalExcerpt = parent.the_new_excerpt
  let finalLocale = kebabToSnakeCase(locale)
  if (
    item.parent &&
    item.parent.i18nResource &&
    item.parent.i18nResource[finalLocale] &&
    item.parent.i18nResource[finalLocale].the_new_excerpt
  ) {
    finalExcerpt = item.parent.i18nResource[finalLocale].the_new_excerpt
  }
  return (
    <Styled.p sx={{ mt: 0, whiteSpace: `pre-line` }}>{finalExcerpt}</Styled.p>
  )
}
