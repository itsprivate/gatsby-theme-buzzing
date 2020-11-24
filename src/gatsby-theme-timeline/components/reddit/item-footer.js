/** @jsx jsx */
import { jsx, Flex } from "theme-ui"
import ItemDate from "gatsby-theme-timeline/src/components/reddit/item-date"
import ItemSource from "./item-source"
import ShareIcon from "./share-icon"
export default function ({ item }) {
  const handleShare = () => {
    if (navigator.share) {
      const origin = window.location.origin
      navigator
        .share({
          title: item.title,
          url: origin + item.slug,
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
        <div role="button" onClick={handleShare} sx={{ cursor: "pointer" }}>
          <ShareIcon></ShareIcon>
        </div>
      </Flex>
    </footer>
  )
}
