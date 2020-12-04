/** @jsx jsx */
import { Link as LinkUI, jsx, Styled } from "theme-ui"
import { withPrefix } from "gatsby"
import { LocalizedLink as Link } from "gatsby-theme-i18n"
import { Trans } from "react-i18next"
import path from "path"
const ItemsTitle = props => {
  const pageContext = props.pageContext
  const { pageType, tag, basePath, currentPage, date } = pageContext

  const page = currentPage
  if (pageType === `tag`) {
    return (
      <Styled.h4 sx={{ fontWeight: `normal`, mb: `1.5rem` }}>
        <LinkUI sx={{ color: `text` }} as={Link} to={withPrefix(basePath)}>
          <Trans>All posts</Trans>
        </LinkUI>
        <span sx={{ color: `textMuted` }}> / </span>
        <span sx={{ color: `textMuted` }}>
          <Trans ns="translation-tag">{tag}</Trans>
        </span>
        {currentPage > 1 && <span sx={{ color: `textMuted` }}> / </span>}
        {currentPage > 1 && (
          <span sx={{ color: `textMuted` }}>
            <Trans page={currentPage}>page {{ page }}</Trans>
          </span>
        )}
      </Styled.h4>
    )
  } else {
    let itemsTitle = "Latest"
    let homePath = basePath
    if (pageType === "issues" || pageType === "issue") {
      itemsTitle = "Weekly Selection"
      homePath = path.join(basePath, "issues")
    }

    const issueNumber = page
    return (
      <Styled.h4 sx={{ fontWeight: `normal`, mb: `1.5rem` }}>
        {currentPage > 1 ? (
          <LinkUI sx={{ color: `text` }} as={Link} to={withPrefix(homePath)}>
            <Trans>{itemsTitle}</Trans>
          </LinkUI>
        ) : (
          <Trans>{itemsTitle}</Trans>
        )}
        {(currentPage > 1 || pageType === "issue") && (
          <span sx={{ color: `textMuted` }}> / </span>
        )}
        {(currentPage > 1 || pageType === "issue") && (
          <span sx={{ color: `textMuted` }}>
            {pageType === "issue" ? (
              <Trans page={currentPage}>Issue {{ issueNumber }}</Trans>
            ) : (
              <Trans page={currentPage}>page {{ page }}</Trans>
            )}
          </span>
        )}
        {pageType === "issue" ? (
          <span sx={{ color: `textMuted` }}>{` · ${date}`}</span>
        ) : null}
      </Styled.h4>
    )
  }
}

export default ItemsTitle
