/** @jsx jsx */
import { Box, jsx, Styled, Link as LinkUI } from "theme-ui"
import { Trans } from "react-i18next"
import { useStaticQuery, graphql } from "gatsby"
import { LocalizedLink as Link } from "./localized-link"

const Subscription = ({ pageContext: { locale, basePath } }) => {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            subscriptions {
              name
              url
              external
            }
          }
        }
      }
    `
  )
  const {
    siteMetadata: { subscriptions },
  } = site
  const links = subscriptions
  return (
    <Box data-test="subscription-container">
      <Styled.h4 data-test="subscription-title">
        <Trans>Subscription</Trans>
      </Styled.h4>
      <Styled.p sx={{ color: "textMuted", fontSize: 1 }}>
        <Trans>Subscribe to us in the following ways:</Trans>
      </Styled.p>
      <Styled.ul>
        {links
          ? links.map((link, i) => {
              const attr = {}
              if (link.external) {
                attr.target = `_blank`
                attr.rel = `noopener noreferrer`
                return (
                  <li key={`links-${i}`}>
                    <LinkUI {...attr} href={link.url}>
                      {link.name}
                    </LinkUI>
                  </li>
                )
              } else {
                // localize
                return (
                  <li key={`links-${i}`}>
                    <LinkUI as={Link} {...attr} href={link.url}>
                      {link.name}
                    </LinkUI>
                  </li>
                )
              }
            })
          : null}
      </Styled.ul>
    </Box>
  )
}

export default Subscription
