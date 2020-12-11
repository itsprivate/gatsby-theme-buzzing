/** @jsx jsx */
import { Styled, jsx, Link as LinkUI } from "theme-ui"
import { LocalizedLink as Link } from "gatsby-theme-i18n"
import { withPrefix } from "gatsby"
import path from "path"
import { Trans } from "react-i18next"

const Item = props => {
  const { item, basePath } = props
  const issueNumber = item.issueNumber
  return (
    <Styled.li sx={{ fontSize: 2 }}>
      <LinkUI
        as={Link}
        to={withPrefix(path.join(basePath, `issues/${item.issueNumber}`))}
      >
        <Trans>Issue {{ issueNumber }}</Trans>
      </LinkUI>
      - <span>{item.date}</span>
    </Styled.li>
  )
}

export default Item
