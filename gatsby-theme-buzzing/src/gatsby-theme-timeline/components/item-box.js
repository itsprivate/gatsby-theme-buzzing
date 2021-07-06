/** @jsx jsx */
import Item from "gatsby-theme-timeline/src/components/item"
import { Themed, jsx, Box } from "theme-ui"
import AdSense from "react-adsense"

const ItemBox = props => {
  return (
    <Themed.div
      as="article"
      data-test="item-container"
      data-index={props.index}
      itemScope
      itemType="https://schema.org/Article https://schema.org/itemListElement"
      sx={{
        paddingBottom: 5,
      }}
    >
      <Item {...props}></Item>
      {props.index > 0 &&
        (props.index === 4 || (props.index > 7 && props.index % 6 === 0)) && (
          <Box
            sx={{
              borderRadius: `default`,
              overflow: `hidden`,
              wordWrap: `break-word`,
              borderWidth: 1,
              borderStyle: `solid`,
              borderColor: `muted`,
              mt: 5,
            }}
          >
            <AdSense.Google
              client="ca-pub-5211209136530011"
              slot="8812284549"
              style={{ display: "block" }}
              format="fluid"
              responsive="true"
            />
          </Box>
        )}
    </Themed.div>
  )
}
export default ItemBox
