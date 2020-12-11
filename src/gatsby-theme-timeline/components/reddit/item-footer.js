/** @jsx jsx */
import { jsx, Flex } from "theme-ui"
import ItemDate from "gatsby-theme-timeline/src/components/reddit/item-date"
import ItemSource from "./item-source"
import ShareIcon from "./share-icon"
import i18next from "i18next"

export default function ({ item }) {
  const { dateISO } = item
  const year = new Date(dateISO).getUTCFullYear()
  const title = i18next.t(`reddit-title-${year}__::::__${item.title}`)
  const handleShare = () => {
    if (navigator.share) {
      navigator
        .share({
          title: title,
          url: `https://www.reddit.com${item.permalink}`,
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
          data-a2a-url={`https://www.reddit.com${item.permalink}`}
          role="button"
          tabIndex={0}
          onClick={handleShare}
          sx={{ cursor: "pointer" }}
        >
          <a className="share-button" href="#">
            <ShareIcon></ShareIcon>
          </a>
        </div>
      </Flex>
    </footer>
  )
}
