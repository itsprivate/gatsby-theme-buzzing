import { graphql } from "gatsby"
import PostPage from "gatsby-theme-timeline/src/components/detail-page"

export default PostPage

export const query = graphql`
  query CustomDetailPageQuery(
    $id: String!
    $previousId: String
    $nextId: String
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
          gatsbyImageData
        }
      }
      imageAlt
      socialImage {
        childImageSharp {
          gatsbyImageData
        }
      }
      __typename
      ... on SocialMediaPost {
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
            gatsbyImageData(width: 48, height: 48, layout: FIXED)
          }
        }
        authorImageRemote
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
          authorImageRemote
          authorImage {
            childImageSharp {
              gatsbyImageData(width: 24, height: 24, layout: FIXED)
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
        provider
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
        provider
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
