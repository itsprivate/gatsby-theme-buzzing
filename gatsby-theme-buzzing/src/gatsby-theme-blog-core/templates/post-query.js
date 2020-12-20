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
      ... on RedditPost {
        video
        videoWidth
        videoHeight
        imageRemote
        permalink
        isSelf
        postHint
        isVideo
        subreddit
        authorName
        url
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
        quoteBody
        quoteAuthorName
        quoteAuthorScreenName
        imageRemote
        quoteImageRemote
        authorAvatarRemote
        quoteAuthorAvatarRemote
        quoteAuthorAvatar {
          childImageSharp {
            fixed(width: 24, height: 24) {
              ...GatsbyImageSharpFixed
            }
          }
        }
        quoteImage {
          childImageSharp {
            fluid(maxWidth: $maxWidth) {
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
        fields {
          basePath
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
      ... on MdxBlogPost {
        id
        fields {
          basePath
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
      ... on RedditPost {
        parent {
          ... on RedditJson {
            localize {
              title
              locale
            }
          }
        }
      }
      ... on HnPost {
        parent {
          ... on HnJson {
            localize {
              title
              locale
            }
          }
        }
      }
      ... on PhPost {
        parent {
          ... on PhJson {
            localize {
              tagline
              locale
            }
          }
        }
      }
      ... on TweetPost {
        parent {
          ... on TweetJson {
            localize {
              full_text
              locale
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
      ... on RedditPost {
        parent {
          ... on RedditJson {
            localize {
              title
              locale
            }
          }
        }
      }
      ... on HnPost {
        parent {
          ... on HnJson {
            localize {
              title
              locale
            }
          }
        }
      }
      ... on PhPost {
        parent {
          ... on PhJson {
            localize {
              tagline
              locale
            }
          }
        }
      }
      ... on TweetPost {
        parent {
          ... on TweetJson {
            localize {
              full_text
            }
          }
        }
      }
    }
  }
`
