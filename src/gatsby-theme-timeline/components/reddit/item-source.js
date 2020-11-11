/** @jsx jsx */
import { Link as LinkUI, jsx } from "theme-ui"
import { Trans } from "react-i18next"

export default function ({ permalink }) {
  return (
    <LinkUI
      href={`https://www.reddit.com${permalink}`}
      target="_blank"
      rel="noopener noreferrer"
    >
      <Trans>View on Reddit</Trans>
    </LinkUI>
  )
}
