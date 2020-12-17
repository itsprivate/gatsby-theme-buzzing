/** @jsx jsx */
import { Trans } from "react-i18next"
import { jsx } from "theme-ui"
import ItemSource from "gatsby-theme-timeline/src/components/item-source"
export default function ({ item }) {
  return (
    <ItemSource to={`https://news.ycombinator.com/item?id=${item.hnId}`}>
      <Trans>View on Hacker News</Trans>
    </ItemSource>
  )
}
