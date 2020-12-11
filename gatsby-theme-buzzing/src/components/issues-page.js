/** @jsx jsx */
import Layout from "gatsby-theme-timeline/src/components/layout"
import Footer from "gatsby-theme-timeline/src/components/home-footer"
import Bio from "gatsby-theme-timeline/src/components/bio"
import Tags from "gatsby-theme-timeline/src/components/tags"
import Links from "gatsby-theme-timeline/src/components/links"
import { jsx, Grid } from "theme-ui"
import ItemsTitle from "gatsby-theme-timeline/src/components/items-title"
import AsideBox from "gatsby-theme-timeline/src/components/aside-box"
import ItemsSEO from "gatsby-theme-timeline/src/components/items-seo"
import IssueItems from "./issue-items"
const Items = ({ location, data, pageContext }) => {
  const { basePath, pageType } = pageContext
  const items = data.allIssue.nodes
  const {
    site: {
      siteMetadata: { social, title, menuLinks },
    },
    tagsGroup: { group },
  } = data

  return (
    <Layout
      basePath={basePath}
      location={location}
      menuLinks={menuLinks}
      title={title}
      pageType={pageType}
      pageContext={pageContext}
    >
      <ItemsSEO pageContext={pageContext} />
      <ItemsTitle pageContext={pageContext}></ItemsTitle>
      <Grid gap={[null, null, 3, 4]} columns={[1, 1, `2fr 1fr`]}>
        <main sx={{ minWidth: 0 }}>
          <IssueItems items={items} basePath={basePath}></IssueItems>
        </main>
        <AsideBox>
          <Bio basePath={basePath}></Bio>
          <Tags basePath={basePath} group={group}></Tags>
          <Links links={social}></Links>
        </AsideBox>
      </Grid>
      <Footer />
    </Layout>
  )
}
export default Items
