import React from "react"
import { Trans } from "react-i18next"
import { Link as LinkUI, css } from "theme-ui"
import { LocalizedLink as Link } from "gatsby-theme-i18n"
/**
 * Change the content to add your own bio
 */

export default function Bio() {
  return (
    <>
      <Trans>
        <LinkUI as={Link} to="/">
          See the hottest posts
        </LinkUI>{" "}
        on{" "}
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
