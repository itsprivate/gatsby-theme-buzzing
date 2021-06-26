/** @jsx jsx */
import { jsx } from "theme-ui"
import { withPrefix } from "gatsby"
import { LocalizedLink as Link } from "gatsby-theme-i18n"
import { Link as LinkUI } from "theme-ui"
import { join as urlJoin } from "path-browserify"
import { Trans } from "react-i18next"

export default function NextPageLink({ prefix, pageContext }, props) {
  const { originalPath, currentPage, pageType } = pageContext
  let pagePath = "page"
  let nextText = "Next"
  if (pageType === "issue") {
    pagePath = originalPath.slice(1, originalPath.indexOf(`/${currentPage}`))
    nextText = "Next Issue"
  }
  if (props.isActive) {
    return (
      <div
        sx={{
          flexGrow: 1,
          textAlign: `right`,
        }}
      ></div>
    )
  }
  return (
    <div
      sx={{
        flexGrow: 1,
        textAlign: `right`,
      }}
    >
      <LinkUI
        disabled={props.disabled}
        as={Link}
        to={withPrefix(
          props.value === 1
            ? `${prefix}`
            : urlJoin(prefix, `${pagePath}/${props.value}`)
        )}
        sx={{
          color: `textMuted`,
          flexGrow: 1,
          textAlign: `right`,
        }}
      >
        <Trans>{nextText}</Trans> &rarr;
      </LinkUI>
    </div>
  )
}
