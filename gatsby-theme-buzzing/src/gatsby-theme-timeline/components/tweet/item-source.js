/** @jsx jsx */
import { jsx } from "theme-ui"
import ItemSource from "gatsby-theme-timeline/src/components/item-source"
import { Trans } from "react-i18next"

export default function ({ item }) {
  return (
    <ItemSource
      to={`https://twitter.com/${item.authorScreenName}/status/${item.idStr}`}
    >
      <Trans>View on Twitter</Trans>
    </ItemSource>
  )
}
