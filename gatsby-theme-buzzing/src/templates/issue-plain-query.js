import { graphql } from "gatsby"
import PostsPage from "../components/issue-plain-page"

export default PostsPage

export const query = graphql`
  query CustomItemsIssuesPostsQuery(
    $maxHeight: Int!
    $skip: Int!
    $limit: Int!
    $filter: BlogPostFilterInput
    $tagsFilter: BlogPostFilterInput
  ) {
    site {
      siteMetadata {
        title
        description
        author
        siteUrl
        social {
          name
          url
          external
          prefetch
        }
        menuLinks {
          name
          url
          external
          prefetch
        }
        localize {
          locale
          title
          description
          social {
            name
            url
            external
            prefetch
          }
          menuLinks {
            name
            url
            external
            prefetch
          }
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
            ... on RedditJson {
              the_new_excerpt
              localize {
                title
                the_new_excerpt
                locale
              }
            }
          }
        }
        ... on HnPost {
          imageRemote
          authorName
          score
          hnId
          url
          parent {
            ... on HnJson {
              localize {
                title
                locale
              }
            }
          }
        }
        ... on RedirectPost {
          authorName
          authorUrl
          url
          imageRemote
          parent {
            ... on RedirectJson {
              localize {
                title
                locale
              }
            }
          }
        }
        ... on YoutubePost {
          imageRemote
          authorName
          authorUrl
          views
          score
          url
          video
          parent {
            ... on YoutubeJson {
              localize {
                title
                description
                locale
              }
            }
          }
        }
        ... on PhPost {
          imageRemote
          authorName
          authorUrl
          phUrl
          score
          url
          tagline
          video
          phId
          parent {
            ... on PhJson {
              localize {
                description
                tagline
                locale
              }
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
          parent {
            ... on TweetJson {
              localize {
                locale
                full_text
                quoted_status_full_text
                retweeted_status_full_text
              }
            }
          }
        }
      }
    }
  }
`
