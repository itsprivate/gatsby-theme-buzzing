/** @jsx jsx */

import { jsx, Styled } from "theme-ui"
import Bio from "gatsby-theme-timeline/src/components/bio"
import Tags from "gatsby-theme-timeline/src/components/tags"
import Links from "gatsby-theme-timeline/src/components/links"
import Subscription from "../../components/subscription"
import Maker from "../../components/maker"

const Aside = ({ data, pageContext }) => {
  const { basePath } = pageContext
  const {
    site: { siteMetadata },
    tagsGroup: { group },
  } = data
  const { social } = siteMetadata
  return (
    <Styled.div data-test="aside" as="aside">
      <Styled.div>
        <Bio basePath={basePath}></Bio>
        <Subscription pageContext={pageContext}></Subscription>
        <Tags basePath={basePath} group={group}></Tags>
        <Links siteMetadata={siteMetadata} links={social}></Links>
        <Maker pageContext={pageContext}></Maker>
      </Styled.div>
    </Styled.div>
  )
}
export default Aside
