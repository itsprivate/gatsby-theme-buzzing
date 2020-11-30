/** @jsx jsx */
import { Link as LinkUI, jsx, Styled } from "theme-ui"
import { withPrefix } from "gatsby"
import { LocalizedLink as Link } from "gatsby-theme-i18n"
import { Trans } from "react-i18next"

const ItemsTitle = ({ pageType, tag, basePath, currentPage }) => {
  const page = currentPage
  if (pageType === `tag`) {
    return (
      <Styled.h4 sx={{ fontWeight: `normal`, mb: `1.5rem` }}>
        <LinkUI sx={{ color: `text` }} as={Link} to={withPrefix(basePath)}>
          <Trans>All posts</Trans>
        </LinkUI>
        <span sx={{ color: `textMuted` }}> / </span>
        <span sx={{ color: `textMuted` }}>{tag}</span>
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
    if (pageType === "issues") {
      itemsTitle = "Weekly Selection"
    }
    return (
      <Styled.h4 sx={{ fontWeight: `normal`, mb: `1.5rem` }}>
        <Trans>{itemsTitle}</Trans>
        {currentPage > 1 && <span sx={{ color: `textMuted` }}> / </span>}
        {currentPage > 1 && (
          <span sx={{ color: `textMuted` }}>
            <Trans page={currentPage}>page {{ page }}</Trans>
          </span>
        )}
      </Styled.h4>
    )
  }
}

export default ItemsTitle
