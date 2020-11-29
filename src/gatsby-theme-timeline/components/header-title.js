/** @jsx jsx */
import { withPrefix } from "gatsby"
import { LocalizedLink as Link } from "gatsby-theme-i18n"
import { Styled, jsx, Link as LinkUI } from "theme-ui"
import { Trans } from "react-i18next"

const Title = ({ children, basePath }) => {
  return (
    <Styled.h3 sx={{ mb: 2, mt: 2, mr: [3, 4] }}>
      <LinkUI sx={{ color: `text` }} as={Link} to={withPrefix(basePath)}>
        <Trans>{children}</Trans>
      </LinkUI>
    </Styled.h3>
  )
}
export default Title
