/** @jsx jsx */
import { jsx } from "theme-ui"
import { withPrefix } from "gatsby"
import { Trans } from "react-i18next"
import { LocalizedLink as Link } from "gatsby-theme-i18n"
import { Link as LinkUI } from "theme-ui"
import { join as urlJoin } from "path-browserify"

export default function PreviousPageLink({ prefix, pageContext }, props) {
  const { originalPath, currentPage, pageType } = pageContext
  let pagePath = "page"
  let previousText = "Previous"
  if (pageType === "issue") {
    pagePath = originalPath.slice(1, originalPath.indexOf(`/${currentPage}`))
    previousText = "Previous Issue"
  }

  if (props.isActive) {
    return (
      <div
        sx={{
          flexGrow: 1,
          textAlign: `left`,
        }}
      ></div>
    )
  }
  return (
    <div
      sx={{
        flexGrow: 1,
        textAlign: `left`,
      }}
    >
      <LinkUI
        as={Link}
        to={withPrefix(
          props.value === 1 && pageType !== "issue"
            ? `${prefix}`
            : urlJoin(prefix, `${pagePath}/${props.value}`)
        )}
        sx={{
          color: `textMuted`,
        }}
      >
        &larr; <Trans>{previousText}</Trans>
      </LinkUI>
    </div>
  )
}
