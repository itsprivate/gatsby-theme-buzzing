/** @jsx jsx */
import { jsx, Flex } from "theme-ui"
import ItemDate from "gatsby-theme-timeline/src/components/reddit/item-date"
import ItemSource from "gatsby-theme-timeline/src/components/item-source"
import ShareIcon from "./share-icon"
import { t } from "../../../util"
export default function ({ item, pageContext: { locale } }) {
  let title = item.title
  const url = item.url
  let localize = []
  if (item.parent && item.parent.localize) {
    localize = item.parent.localize
  }
  title = t("title", localize, title, locale)
  const handleShare = () => {
    if (navigator.share) {
      navigator
        .share({
          title: title,
          url: item.url,
        })
        .then(() => {
          console.log("Thanks for sharing!")
        })
        .catch(console.error)
    } else {
      // todo share
      console.log("Not support share yet")
    }
  }
  const handleKeyDown = ev => {
    // check keys if you want
    if (ev.keyCode === 13) {
      handleShare()
    }
  }
  return (
    <footer sx={{ display: `flex`, justifyContent: "space-between" }}>
      <Flex>
        <ItemDate item={item}></ItemDate>
        <span
          sx={{
            color: `textMuted`,
            display: `inline-block`,
            mx: 1,
            flexShrink: 0,
          }}
        >
          ·
        </span>
        <ItemSource item={item}></ItemSource>
      </Flex>
      <Flex>
        <div
          className="a2a_kit share-this"
          data-a2a-title={title}
          data-a2a-url={url}
          role="button"
          tabIndex={0}
          onKeyDown={handleKeyDown}
          onClick={handleShare}
          sx={{ cursor: "pointer" }}
        >
          <a className="share-button" href="#!">
            <ShareIcon></ShareIcon>
          </a>
        </div>
      </Flex>
    </footer>
  )
}
