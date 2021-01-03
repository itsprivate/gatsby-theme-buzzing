/** @jsx jsx */
import { Link as LinkUI, jsx } from "theme-ui"
import { Trans } from "react-i18next"
export default function ({ item }) {
  return (
    <LinkUI
      data-test="item-source"
      sx={{
        overflow: `hidden`,
        whiteSpace: `nowrap`,
        textOverflow: `ellipsis`,
        display: `inline-block`,
        flexShrink: 1,
      }}
      href={item.url}
      target="_blank"
      rel="noopener noreferrer"
    >
      <Trans>View on {item.provider}</Trans>
    </LinkUI>
  )
}
