import { graphql } from "gatsby"
import PostsPage from "../components/issues-page"

export default PostsPage

export const query = graphql`
  {
    site {
      siteMetadata {
        title
        social {
          name
          url
          external
        }
        menuLinks {
          name
          url
          external
        }
      }
    }
    tagsGroup: allBlogPost(sort: { fields: [date, slug], order: DESC }) {
      group(field: tags) {
        fieldValue
        totalCount
      }
    }
    allIssue(filter: { draft: { eq: false } }) {
      nodes {
        issueNumber
        date(formatString: "MMMM DD, YYYY")
        dateISO: date
        datetime: date(formatString: "YYYY-MM-DD HH:mm")
      }
    }
  }
`
