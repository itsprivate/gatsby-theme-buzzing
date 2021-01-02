import React from "react"
import { css, Link as LinkUI } from "theme-ui"

const Footer = () => (
  <footer
    css={css({
      mt: 4,
      pt: 3,
      textAlign: "center",
    })}
  >
    © {new Date().getFullYear()}
    <LinkUI
      sx={{ ml: 4, mr: 2 }}
      data-test="main-site-link"
      href="https://www.buzzing.cc"
    >
      Buzzing.cc
    </LinkUI>
    <LinkUI
      sx={{ mx: 2, color: "textMuted" }}
      data-test="privacy-link"
      href="https://www.buzzing.cc/privacy"
    >
      Privacy
    </LinkUI>
    <LinkUI
      sx={{ mx: 2, color: "textMuted" }}
      data-test="terms-link"
      href="https://www.buzzing.cc/terms"
    >
      Terms of Service
    </LinkUI>
    {` `}
  </footer>
)
export default Footer
