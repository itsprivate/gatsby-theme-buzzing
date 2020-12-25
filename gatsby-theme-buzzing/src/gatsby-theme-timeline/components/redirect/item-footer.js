/** @jsx jsx */
import { jsx, Link } from "theme-ui"
import ItemDate from "gatsby-theme-timeline/src/components/redirect/item-date"
import { Trans } from "react-i18next"

export default function ({ item }) {
  const { authorUrl, authorName } = item
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
      {authorUrl ? (
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
          href={authorUrl}
        >
          <Trans ns="translation-tag">{authorName}</Trans>
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
          <Trans ns="translation-tag">{authorName}</Trans>
        </span>
      )}
    </footer>
  )
}
