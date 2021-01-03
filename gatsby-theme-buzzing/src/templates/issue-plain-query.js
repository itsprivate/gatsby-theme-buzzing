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
        ... on SocialMediaPost {
          provider
          thirdPartyId
          url
          originalUrl
          imageRemote
          video {
            url
            embed
            width
            height
          }
          channel
          channelUrl
          author
          authorUrl
          authorImage {
            childImageSharp {
              fixed(width: 48, height: 48) {
                ...GatsbyImageSharpFixed
              }
            }
          }
          authorSlug
          score
          views
          sharedCount
          likeCount
          sharedContent {
            excerpt
            slug
            title
            date(formatString: "MMMM DD, YYYY")
            dateISO: date
            datetime: date(formatString: "YYYY-MM-DD HH:mm")
            tags
            imageRemote
            image {
              childImageSharp {
                fluid(maxHeight: $maxHeight) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            imageAlt
            authorImage {
              childImageSharp {
                fixed(width: 24, height: 24) {
                  ...GatsbyImageSharpFixed
                }
              }
            }
            video {
              url
              embed
              width
              height
            }
            channel
            channelUrl
            author
            authorUrl
            authorSlug
            score
            views
            sharedCount
            likeCount
          }
          parent {
            ... on RedditJson {
              localize {
                title
                the_new_excerpt
                locale
              }
            }
            ... on HnJson {
              localize {
                title
                locale
              }
            }
            ... on RedirectJson {
              localize {
                title
                locale
              }
            }
            ... on YoutubeJson {
              localize {
                title
                description
                locale
              }
            }
            ... on PhJson {
              localize {
                description
                tagline
                locale
              }
            }
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
