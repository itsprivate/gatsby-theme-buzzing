/** @jsx jsx */
import { jsx, Themed, Link } from "theme-ui"
import ProcessString from "./process-string"
import { getTitle, getExcerpt } from "../util"
import Video from "gatsby-theme-timeline/src/components/item-video"
const ItemBox = props => {
  const {
    item,
    index,
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
  const finalExcerpt =
    provider === "Twitter" ? getTitle(item, locale) : getExcerpt(item, locale)
  return (
    <li
      data-test="item-container"
      data-index={props.index}
      itemScope
      itemType="https://schema.org/Article https://schema.org/itemListElement"
      sx={{ m: 0, listStyle: "none" }}
    >
      <Themed.h4>
        <Link itemProp="name" href={finalUrl} sx={{ color: "text" }}>
          {index + 1}. {provider === "Twitter" ? null : getTitle(item, locale)}
        </Link>
      </Themed.h4>

      {imageRemote && !item.video && (
        <Themed.img
          sx={{ maxHeight: "512px", display: "block" }}
          src={imageRemote}
          alt="item hero"
          itemProp="image"
        ></Themed.img>
      )}
      <Video item={item}></Video>
      <Themed.blockquote data-test="item-header" sx={{ color: "#718096" }}>
        {finalExcerpt && (
          <Themed.p
            itemProp="description"
            sx={{
              color: "textMuted",
              whiteSpace: `pre-line`,
            }}
          >
            {ProcessString(provider, finalExcerpt)}
          </Themed.p>
        )}
        <Themed.p data-test="source">
          Posted by{" "}
          <Link href={finalAuthorUrl} itemProp="author">
            {finalAuthor}
          </Link>{" "}
          at{" "}
          <Link href={url} itemProp="datePublished">
            {datetime}
          </Link>{" "}
          on {provider}{" "}
          {provider === "Reddit" && (
            <Link href={channelUrl} itemProp="datePublished">
              {`/r/${channel}`}
            </Link>
          )}
        </Themed.p>
      </Themed.blockquote>
      <Themed.hr
        sx={{
          mt: "48px",
          mb: "48px",
        }}
      ></Themed.hr>
    </li>
  )
}
export default ItemBox
