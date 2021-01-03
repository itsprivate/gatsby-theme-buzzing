/** @jsx jsx */
import { jsx, Styled, Link } from "theme-ui"
import ProcessString from "./process-string"
import { getTitle, getExcerpt } from "../util"
const ItemBox = props => {
  const {
    item,
    pageContext: { locale },
  } = props
  let {
    datetime,
    imageRemote,
    author,
    originalUrl,
    authorUrl,
    channelUrl,
    channel,
    url,
    provider,
  } = item
  const finalAuthorUrl = authorUrl || channelUrl
  const finalAuthor = author || channel
  const finalUrl = originalUrl || url

  return (
    <li
      data-test="item-container"
      data-index={props.index}
      itemScope
      itemType="https://schema.org/Article https://schema.org/itemListElement"
      sx={{ m: 0 }}
    >
      {imageRemote && (
        <Styled.img
          sx={{ maxHeight: "512px", m: "0 auto", display: "block" }}
          src={imageRemote}
          alt="item hero"
          itemProp="image"
        ></Styled.img>
      )}
      {provider === "Twitter" ? (
        <Styled.h3 itemProp="name" sx={{ whiteSpace: `pre-line` }}>
          {ProcessString(provider, getTitle(item, locale))}
        </Styled.h3>
      ) : (
        <Styled.h3 sx={{}}>
          <Link itemProp="name" href={finalUrl} sx={{ color: "text" }}>
            {getTitle(item, locale)}
          </Link>
        </Styled.h3>
      )}
      {provider !== "Twitter" && (
        <Styled.p
          itemProp="description"
          sx={{
            color: "textMuted",
            whiteSpace: `pre-line`,
          }}
        >
          {ProcessString(provider, getExcerpt(item, locale))}
        </Styled.p>
      )}
      <Styled.blockquote
        as="sup"
        data-test="item-header"
        sx={{ color: "#718096", mt: "-10px" }}
      >
        Posted by{" "}
        <Link href={finalAuthorUrl} itemProp="author">
          {finalAuthor}
        </Link>{" "}
        at{" "}
        <Link href={finalUrl} itemProp="datePublished">
          {datetime}
        </Link>{" "}
        on {provider}
      </Styled.blockquote>
      <Styled.hr
        sx={{
          mt: "20px",
          mb: "48px",
        }}
      ></Styled.hr>
    </li>
  )
}
export default ItemBox
