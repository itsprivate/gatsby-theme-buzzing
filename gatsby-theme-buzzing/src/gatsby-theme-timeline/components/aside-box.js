/** @jsx jsx */

import { jsx, Themed } from "theme-ui"
import Bio from "gatsby-theme-timeline/src/components/bio"
import Tags from "gatsby-theme-timeline/src/components/tags"
import Links from "gatsby-theme-timeline/src/components/links"
import Subscription from "../../components/subscription"
import Maker from "../../components/maker"
import Ad from "../../components/ad"

const Aside = ({ data, pageContext, siteMetadata }) => {
  const { basePath } = pageContext
  const {
    tagsGroup: { group },
  } = data
  const { social } = siteMetadata
  return (
    <Themed.div
      data-test="aside"
      as="aside"
      sx={{ height: [null, null, `full`] }}
    >
      <Themed.div
        sx={{
          top: [null, null, 4],
          position: [null, null, `sticky`],
          overflowY: [null, null, `auto`],
          height: [null, null, `calc(100vh - 32px)`],
          overscrollBehavior: [null, null, `contain`],
          px: [null, null, 4],
        }}
      >
        <Bio siteMetadata={siteMetadata} basePath={basePath}></Bio>
        <Subscription pageContext={pageContext}></Subscription>
        <Ad></Ad>
        <Links siteMetadata={siteMetadata} links={social}></Links>
        <Maker pageContext={pageContext}></Maker>
        <Tags basePath={basePath} group={group}></Tags>
      </Themed.div>
    </Themed.div>
  )
}
export default Aside
