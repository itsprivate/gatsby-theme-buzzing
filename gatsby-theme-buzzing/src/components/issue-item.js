/** @jsx jsx */
import { Themed, jsx, Link as LinkUI } from "theme-ui"
import { LocalizedLink as Link } from "gatsby-theme-i18n"
import { withPrefix } from "gatsby"
import path from "path-browserify"
import { Trans } from "react-i18next"

const Item = props => {
  const { item, basePath } = props
  const issueNumber = item.issueNumber
  return (
    <Themed.li sx={{ fontSize: 2 }}>
      <LinkUI
        as={Link}
        to={withPrefix(path.join(basePath, `issues/${item.issueNumber}`))}
      >
        <Trans>Issue {{ issueNumber }}</Trans>
      </LinkUI>
      - <span>{item.date}</span>
    </Themed.li>
  )
}

export default Item
