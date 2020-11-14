import React from "react"
import { Trans } from "react-i18next"
import { Link as LinkUI, css } from "theme-ui"
/**
 * Change the content to add your own bio
 */

export default function Bio() {
  return (
    <>
      <Trans>
        See the hottest posts on{" "}
        <LinkUI
          href="https://reddit.com"
          target="_blank"
          rel="noopener noreferrer"
          sx={css({
            lineHeight: 2,
          })}
        >
          Reddit
        </LinkUI>{" "}
        right now
      </Trans>
    </>
  )
}
