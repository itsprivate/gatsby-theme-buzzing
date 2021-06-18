/** @jsx jsx */

import { jsx, Themed } from "theme-ui"
import Bio from "gatsby-theme-timeline/src/components/bio"
import Tags from "gatsby-theme-timeline/src/components/tags"
import Links from "gatsby-theme-timeline/src/components/links"
import Subscription from "../../components/subscription"
import Maker from "../../components/maker"
import Ad from "../../components/ad"
const Aside = ({ data, pageContext }) => {
  const { basePath } = pageContext
  const {
    site: { siteMetadata },
    tagsGroup: { group },
  } = data
  const { social } = siteMetadata
  return (
    <Themed.div data-test="aside" as="aside">
      <Themed.div
        sx={{
          top: 4,
          position: `sticky`,
          overflowY: `auto`,
          height: `calc(100vh - 32px)`,
          overscrollBehavior: `contain`,
          px: 4,
        }}
      >
        <Bio basePath={basePath}></Bio>
        <Subscription pageContext={pageContext}></Subscription>
        <Tags basePath={basePath} group={group}></Tags>
        <Links siteMetadata={siteMetadata} links={social}></Links>
        <Maker pageContext={pageContext}></Maker>
        <Ad></Ad>
      </Themed.div>
    </Themed.div>
  )
}
export default Aside
