/** @jsx jsx */
import { Styled, jsx, Link as LinkUI } from "theme-ui"
import { LocalizedLink as Link } from "gatsby-theme-i18n"
import { withPrefix } from "gatsby"
import path from "path"

const Item = props => {
  const { item, basePath } = props
  console.log("basePath", basePath)

  return (
    <Styled.li sx={{ fontSize: 2 }}>
      <LinkUI
        as={Link}
        to={withPrefix(path.join(basePath, `issues/${item.issueNumber}`))}
      >{`Issue #${item.issueNumber} `}</LinkUI>
      - <span>{item.date}</span>
    </Styled.li>
  )
}

export default Item
