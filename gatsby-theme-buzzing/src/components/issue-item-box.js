/** @jsx jsx */
import Item from "./issue-item"
import { Themed, jsx } from "theme-ui"

const ItemBox = props => {
  return (
    <Themed.div as="article">
      <Item {...props}></Item>
    </Themed.div>
  )
}
export default ItemBox
