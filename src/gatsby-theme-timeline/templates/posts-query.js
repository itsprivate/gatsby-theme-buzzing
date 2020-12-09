import { graphql } from "gatsby"
import PostsPage from "gatsby-theme-timeline/src/components/items-page"

export default PostsPage

export const query = graphql`
  query CustomItemsPostsQuery(
    $maxHeight: Int!
    $skip: Int!
    $limit: Int!
    $filter: BlogPostFilterInput
    $tagsFilter: BlogPostFilterInput
  ) {
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
    tagsGroup: allBlogPost(
      sort: { fields: [date, slug], order: DESC }
      filter: $tagsFilter
    ) {
      group(field: tags) {
        fieldValue
        totalCount
      }
    }
    allBlogPost(
      limit: $limit
      skip: $skip
      sort: { fields: [date, slug], order: DESC }
      filter: $filter
    ) {
      nodes {
        id
        excerpt
        slug
        title
        date(formatString: "MMMM DD, YYYY")
        dateISO: date
        datetime: date(formatString: "YYYY-MM-DD HH:mm")
        tags
        image {
          childImageSharp {
            fluid(maxHeight: $maxHeight) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        imageAlt
        ... on RedditPost {
          imageRemote
          video
          videoWidth
          videoHeight
          permalink
          isSelf
          postHint
          isVideo
          subreddit
          authorName
          url
          score
          redditId
          parent {
            ... on RedditTopJson {
              the_new_excerpt
            }
          }
        }
        ... on TweetPost {
          idStr
          retweeted
          isQuoteStatus
          imageRemote
          quoteImageRemote
          authorAvatarRemote
          quoteAuthorAvatarRemote
          quoteBody
          quoteAuthorName
          quoteAuthorScreenName
          quoteAuthorAvatar {
            childImageSharp {
              fixed(width: 24, height: 24) {
                ...GatsbyImageSharpFixed
              }
            }
          }
          quoteImage {
            childImageSharp {
              fluid(maxHeight: $maxHeight) {
                ...GatsbyImageSharpFluid
                src
              }
            }
          }
          authorName
          authorScreenName
          authorAvatar {
            childImageSharp {
              fixed(width: 48, height: 48) {
                ...GatsbyImageSharpFixed
              }
            }
          }
        }
      }
    }
  }
`
