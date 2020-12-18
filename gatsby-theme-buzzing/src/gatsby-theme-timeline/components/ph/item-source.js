/** @jsx jsx */
import { Trans } from "react-i18next"
import { jsx } from "theme-ui"
import ItemSource from "gatsby-theme-timeline/src/components/item-source"
export default function ({ item }) {
  return (
    <ItemSource to={`${item.phUrl}`}>
      <Trans>View on Product Hunt</Trans>
    </ItemSource>
  )
}
