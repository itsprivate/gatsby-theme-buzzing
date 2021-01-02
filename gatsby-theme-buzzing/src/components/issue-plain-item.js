/** @jsx jsx */
import { jsx, Styled, Link } from "theme-ui"

const ItemBox = props => {
  const { item } = props
  let { title, datetime, excerpt, imageRemote, authorName, slug } = item
  return (
    <div
      data-test="item-container"
      data-index={props.index}
      itemScope
      itemType="https://schema.org/Article https://schema.org/itemListElement"
    >
      <Styled.p sx={{ color: "textMuted", mb: "-10px" }}>
        Posted by{" "}
        <Link href="/#" itemProp="author">
          {authorName}
        </Link>{" "}
        at{" "}
        <Link href={slug} itemProp="datePublished">
          {datetime}
        </Link>
      </Styled.p>
      <Styled.h3>
        <Link itemProp="name" href="/#" sx={{ color: "text" }}>
          {title}
        </Link>
      </Styled.h3>
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
    </div>
  )
}
export default ItemBox
