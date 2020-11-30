/** @jsx jsx */
import Item from "./issue-item"
import { Styled, jsx } from "theme-ui"

const ItemBox = props => {
  return (
    <Styled.div as="article">
      <Item {...props}></Item>
    </Styled.div>
  )
}
export default ItemBox
