import { graphql } from "gatsby"
import PostPage from "gatsby-theme-timeline/src/components/detail-page"

export default PostPage

export const query = graphql`
  query CustomDetailPageQuery(
    $id: String!
    $previousId: String
    $nextId: String
    $maxWidth: Int
  ) {
    site {
      siteMetadata {
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
        localize {
          title
          description
          locale
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
    blogPost(id: { eq: $id }) {
      id
      excerpt
      body
      slug
      title
      tags
      date(formatString: "MMMM DD, YYYY")
      dateISO: date
      datetime: date(formatString: "YYYY-MM-DD HH:mm")
      image {
        childImageSharp {
          fluid(maxWidth: $maxWidth) {
            ...GatsbyImageSharpFluid
            src
          }
        }
      }
      imageAlt
      socialImage {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
            src
          }
        }
      }
      ... on SocialMediaPost {
        fields {
          basePath
        }
        thirdPartyId
        provider
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
              fluid(maxWidth: $maxWidth) {
                ...GatsbyImageSharpFluid
                src
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
    previous: blogPost(id: { eq: $previousId }) {
      id
      excerpt
      slug
      title
      date(formatString: "MMMM DD, YYYY")
      __typename
      ... on SocialMediaPost {
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
    next: blogPost(id: { eq: $nextId }) {
      id
      excerpt
      slug
      title
      __typename
      date(formatString: "MMMM DD, YYYY")
      ... on SocialMediaPost {
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
`
