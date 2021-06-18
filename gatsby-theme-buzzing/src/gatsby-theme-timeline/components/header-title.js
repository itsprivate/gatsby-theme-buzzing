/** @jsx jsx */
import { withPrefix } from "gatsby"
import { LocalizedLink as Link } from "gatsby-theme-i18n"
import { Themed, jsx, Link as LinkUI } from "theme-ui"
import { t } from "../../util"
const Title = ({
  children,
  basePath,
  pageContext: { locale },
  siteMetadata,
}) => {
  return (
    <Themed.h3 sx={{ mb: 2, mt: 2, mr: [3, 4] }}>
      <LinkUI sx={{ color: `text` }} as={Link} to={withPrefix(basePath)}>
        {t("title", siteMetadata.localize, siteMetadata.title, locale)}
      </LinkUI>
    </Themed.h3>
  )
}
export default Title
