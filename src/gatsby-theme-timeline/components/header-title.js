/** @jsx jsx */
import { withPrefix } from "gatsby"
import { LocalizedLink as Link } from "gatsby-theme-i18n"
import { Styled, jsx, Link as LinkUI } from "theme-ui"
import { Trans } from "react-i18next"

const Title = ({ children, type, basePath }) => {
  if (type === `detail`) {
    return (
      <Styled.h3 sx={{ mb: 3 }}>
        <LinkUI sx={{ color: `text` }} as={Link} to={withPrefix(basePath)}>
          <Trans>{children}</Trans>
        </LinkUI>
      </Styled.h3>
    )
  }
  return (
    <Styled.h1>
      <LinkUI sx={{ color: `text` }} as={Link} to={withPrefix(basePath)}>
        <Trans>{children}</Trans>
      </LinkUI>
    </Styled.h1>
  )
}
export default Title
