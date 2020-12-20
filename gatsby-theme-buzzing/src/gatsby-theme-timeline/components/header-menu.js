/** @jsx jsx */
import { jsx, NavLink as LinkUI, Flex } from "theme-ui"
import { LocalizedLink as Link } from "gatsby-theme-i18n"
import { t } from "../../util"
const Title = ({ pageContext: { locale }, siteMetadata }) => {
  const menuLinks = t(
    "menuLinks",
    siteMetadata.localize,
    siteMetadata.menuLinks,
    locale
  )
  if (!menuLinks) {
    return null
  }
  return (
    <Flex as="nav">
      {menuLinks.map(nav => {
        const attr = {}
        let isUseATag = false
        let url = nav.url
        if (nav.external) {
          attr.target = `_blank`
          attr.rel = `noopener noreferrer`
          isUseATag = true
        }
        if (nav.prefetch === false && !nav.external) {
          isUseATag = true
        }

        return (
          <LinkUI
            as={isUseATag ? LinkUI : Link}
            to={!isUseATag ? url : undefined}
            href={isUseATag ? url : undefined}
            key={url}
            {...attr}
          >
            {nav.name}
          </LinkUI>
        )
      })}
    </Flex>
  )
}
export default Title
