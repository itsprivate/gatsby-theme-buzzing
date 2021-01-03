/** @jsx jsx */
import { jsx, Link } from "theme-ui"
import ItemDate from "gatsby-theme-timeline/src/components/redirect/item-date"
import { Trans } from "react-i18next"

export default function ({ item }) {
  const { channelUrl, channel } = item
  return (
    <footer sx={{ display: `flex` }}>
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
      {channelUrl ? (
        <Link
          target="_blank"
          rel="noopener noreferrer"
          sx={{
            color: `textMuted`,
            overflow: `hidden`,
            textOverflow: `ellipsis`,
            whiteSpace: `nowrap`,
            display: `inline-block`,
          }}
          href={channelUrl}
        >
          <Trans ns="translation-tag">{channel}</Trans>
        </Link>
      ) : (
        <span
          sx={{
            color: `textMuted`,
            overflow: `hidden`,
            textOverflow: `ellipsis`,
            whiteSpace: `nowrap`,
            display: `inline-block`,
          }}
        >
          <Trans ns="translation-tag">{channel}</Trans>
        </span>
      )}
    </footer>
  )
}
