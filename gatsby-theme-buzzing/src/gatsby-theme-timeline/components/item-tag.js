/** @jsx jsx */
import { jsx, Link as LinkUI } from "theme-ui"
import { LocalizedLink as Link } from "gatsby-theme-i18n"
import { Trans } from "react-i18next"

export default function ({ to, children }) {
  return (
    <LinkUI
      as={Link}
      to={to}
      sx={{
        color: `textMuted`,
        fontStyle: `italic`,
        "::before": {
          content: `"#"`,
        },
        mr: 2,
      }}
    >
      <span>
        <Trans ns="translation-tag">{children}</Trans>
      </span>
    </LinkUI>
  )
}
