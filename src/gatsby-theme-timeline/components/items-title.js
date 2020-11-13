/** @jsx jsx */
import { Link as LinkUI, jsx, Styled } from "theme-ui"
import { withPrefix } from "gatsby"
import { LocalizedLink as Link } from "gatsby-theme-i18n"
import { Trans } from "react-i18next"

/**
 * Shadow me to add your own bio content
 */

const ItemsTitle = ({ pageType, tag, basePath }) => {
  if (pageType === `tag`) {
    return (
      <Styled.h3>
        <LinkUI sx={{ color: `textMuted` }} as={Link} to={withPrefix(basePath)}>
          <Trans>All posts</Trans>
        </LinkUI>
        <span> / </span>
        <span>
          <Trans ns="translation-tag">{tag}</Trans>
        </span>
      </Styled.h3>
    )
  } else {
    return (
      <Styled.h4>
        <Trans>Latest</Trans>
      </Styled.h4>
    )
  }
}

export default ItemsTitle
