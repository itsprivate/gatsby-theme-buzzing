/** @jsx jsx */
import { jsx, Styled, Link } from "theme-ui"
import ProcessString from "./process-string"
import { getTitle, getExcerpt } from "../util"
import Video from "gatsby-theme-timeline/src/components/item-video"
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
      sx={{ m: 0, listStyle: "none" }}
    >
      {imageRemote && (
        <Styled.img
          sx={{ maxHeight: "512px", display: "block" }}
          src={imageRemote}
          alt="item hero"
          itemProp="image"
        ></Styled.img>
      )}
      <Video item={item}></Video>
      <br></br>
      {provider === "Twitter" ? null : (
        <Styled.h4>
          <Link itemProp="name" href={finalUrl} sx={{ color: "text" }}>
            {getTitle(item, locale)}
          </Link>
        </Styled.h4>
      )}
      <Styled.blockquote data-test="item-header" sx={{ color: "#718096" }}>
        <Styled.p
          itemProp="description"
          sx={{
            color: "textMuted",
            whiteSpace: `pre-line`,
          }}
        >
          {ProcessString(
            provider,
            provider === "Twitter"
              ? getTitle(item, locale)
              : getExcerpt(item, locale)
          )}
        </Styled.p>
        <Styled.p>
          Posted by{" "}
          <Link href={finalAuthorUrl} itemProp="author">
            {finalAuthor}
          </Link>{" "}
          at{" "}
          <Link href={finalUrl} itemProp="datePublished">
            {datetime}
          </Link>{" "}
          on {provider}{" "}
          {provider === "Reddit" && (
            <Link href={channelUrl} itemProp="datePublished">
              {`/r/${channel}`}
            </Link>
          )}
        </Styled.p>
      </Styled.blockquote>
      <Styled.hr
        sx={{
          mt: "48px",
          mb: "48px",
        }}
      ></Styled.hr>
    </li>
  )
}
export default ItemBox
