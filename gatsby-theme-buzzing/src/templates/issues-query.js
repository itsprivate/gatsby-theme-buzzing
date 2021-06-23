import { graphql } from "gatsby"
import PostsPage from "../components/issues-page"

export default PostsPage

export const query = graphql`
  {
    tagsGroup: allBlogPost(sort: { fields: [date, slug], order: DESC }) {
      group(field: tags) {
        fieldValue
        totalCount
      }
    }
    allIssue(
      filter: { draft: { eq: false } }
      sort: { fields: [date], order: DESC }
    ) {
      nodes {
        issueNumber
        date(formatString: "YYYY-MM-DD")
        dateISO: date
        datetime: date(formatString: "YYYY-MM-DD HH:mm")
        year: date(formatString: "YYYY")
      }
    }
  }
`
