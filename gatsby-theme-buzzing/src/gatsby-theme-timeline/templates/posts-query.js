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
              i18nResource {
                zh {
                  title
                  the_new_excerpt
                }
                zh_Hant {
                  title
                  the_new_excerpt
                }
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
              i18nResource {
                zh {
                  title
                }
                zh_Hant {
                  title
                }
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
              i18nResource {
                zh {
                  description
                  tagline
                }
                zh_Hant {
                  description
                  tagline
                }
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
              i18nResource {
                zh {
                  full_text
                  quoted_status_full_text
                  retweeted_status_full_text
                }
                zh_Hant {
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
  }
`
