/** @jsx jsx */
import { jsx, Flex, Select } from "theme-ui"
import { useLocalization } from "gatsby-theme-i18n"
import { withPrefix, navigate } from "gatsby"
import { join } from "path-browserify"
const HeaderRight = props => {
  const { location } = props
  const { locale: currentLocale, config, defaultLang } = useLocalization()
  let currentPath = location.pathname
  if (currentPath.startsWith(`/${currentLocale}`)) {
    currentPath = currentPath.substring(`/${currentLocale}`.length)
  }
  const handleChangeLocale = e => {
    const localeCode = e.target.value
    const targetUrl = withPrefix(
      join(
        `${localeCode === defaultLang ? "" : `/${localeCode}`}${currentPath}`
      )
    )
    navigate(targetUrl)
  }
  return (
    <Flex>
      <Select
        sx={{ minWidth: "6.5rem" }}
        value={currentLocale}
        onChange={handleChangeLocale}
      >
        {config.map(locale => {
          return (
            <option key={locale.code} value={locale.code}>
              {locale.localName}
            </option>
          )
        })}
      </Select>
    </Flex>
  )
}
export default HeaderRight
