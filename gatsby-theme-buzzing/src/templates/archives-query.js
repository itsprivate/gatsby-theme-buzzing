/** @jsx jsx */
import Layout from "gatsby-theme-timeline/src/components/layout"
import Footer from "gatsby-theme-timeline/src/components/home-footer"
import { jsx, Grid } from "theme-ui"
import ItemsTitle from "gatsby-theme-timeline/src/components/items-title"
import AsideBox from "gatsby-theme-timeline/src/components/aside-box"
import ItemsSEO from "gatsby-theme-timeline/src/components/items-seo"
import ArchiveItems from "../components/archive-items"
import { graphql } from "gatsby"

const Items = ({ location, data, pageContext }) => {
  const { basePath, pageType, siteMetadata, items } = pageContext

  const { title, menuLinks } = siteMetadata
  return (
    <Layout
      basePath={basePath}
      location={location}
      menuLinks={menuLinks}
      title={title}
      pageType={pageType}
      pageContext={pageContext}
      siteMetadata={siteMetadata}
    >
      <ItemsSEO pageContext={pageContext} siteMetadata={siteMetadata} />
      <ItemsTitle pageContext={pageContext}></ItemsTitle>
      <Grid gap={[null, null, 3, 4]} columns={[1, 1, `2fr 1fr`]}>
        <main sx={{ minWidth: 0 }}>
          <ArchiveItems items={items} basePath={basePath}></ArchiveItems>
        </main>
        <AsideBox
          location={location}
          data={data}
          pageContext={pageContext}
        ></AsideBox>
      </Grid>
      <Footer />
    </Layout>
  )
}
export default Items
export const query = graphql`
  {
    tagsGroup: allBlogPost(sort: { fields: [date, slug], order: DESC }) {
      group(field: tags) {
        fieldValue
        totalCount
      }
    }
  }
`
