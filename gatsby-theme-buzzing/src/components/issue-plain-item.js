/** @jsx jsx */
import { jsx, Styled, Link } from "theme-ui"

const ItemBox = props => {
  const { item } = props
  let { title, datetime, excerpt, imageRemote, authorName, slug } = item
  return (
    <li
      data-test="item-container"
      data-index={props.index}
      itemScope
      itemType="https://schema.org/Article https://schema.org/itemListElement"
    >
      <Styled.h3 sx={{}}>
        <Link itemProp="name" href="/#" sx={{ color: "text" }}>
          {title}
        </Link>
      </Styled.h3>
      <Styled.p data-test="item-header" sx={{ color: "#718096", mt: "-10px" }}>
        Posted by{" "}
        <Link href="/#" itemProp="author">
          {authorName}
        </Link>{" "}
        at{" "}
        <Link href={slug} itemProp="datePublished">
          {datetime}
        </Link>
      </Styled.p>
      {imageRemote && (
        <Styled.img
          sx={{ maxHeight: "512px", m: "0 auto", display: "block" }}
          src={imageRemote}
          alt="item hero"
          itemProp="image"
        ></Styled.img>
      )}

      <Styled.p
        itemProp="description"
        sx={{
          color: "textMuted",
        }}
      >
        {excerpt}
      </Styled.p>
      <Styled.hr
        sx={{
          my: "48px",
        }}
      ></Styled.hr>
    </li>
  )
}
export default ItemBox
