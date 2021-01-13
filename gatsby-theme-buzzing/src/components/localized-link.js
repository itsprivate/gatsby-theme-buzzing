import * as React from "react"
import { Link } from "theme-ui"
import { useLocalization } from "gatsby-theme-i18n"
import { localizedPath } from "../util"
export const LocalizedLink = ({ href, language, ...props }) => {
  const { defaultLang, locale } = useLocalization()
  const linkLocale = language || locale

  return <Link {...props} href={localizedPath(defaultLang, linkLocale, href)} />
}
