import { graphql } from "gatsby"
import PostsPage from "gatsby-theme-timeline/src/components/items-page"

export default PostsPage

export const query = graphql`
  query CustomItemsPostsQuery(
    $skip: Int!
    $limit: Int!
    $filter: BlogPostFilterInput
    $tagsFilter: BlogPostFilterInput
  ) {
    site {
      siteMetadata {
        title
        author
        description
        keywords
        siteUrl
        telegram
        iconUrl
        defaultSocialImageUrl
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
        disqus {
          shortname
        }
        utterances {
          repo
          label
        }
        localize {
          title
          description
          keywords
          locale
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
            gatsbyImageData
          }
        }
        imageAlt
        __typename
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
          authorImageRemote
          authorImage {
            childImageSharp {
              gatsbyImageData(width: 48, height: 48, layout: FIXED)
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
                gatsbyImageData
              }
            }
            imageAlt
            authorImage {
              childImageSharp {
                gatsbyImageData(width: 24, height: 24, layout: FIXED)
              }
            }
            authorImageRemote
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
                description
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
