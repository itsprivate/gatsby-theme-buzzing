import React, { useState, useEffect } from "react"
import Layout from "gatsby-theme-timeline/src/components/layout"
import DetailFooter from "gatsby-theme-timeline/src/components/detail-footer"
import Detail from "../gatsby-theme-timeline/components/detail"
import DetailSEO from "../gatsby-theme-timeline/components/detail-seo"
import { useStaticQuery, graphql } from "gatsby"
import Helmet from "react-helmet"
import { useLocalization } from "gatsby-theme-i18n"
import { jsonToData } from "../util"
const DetailPage = ({ location, pageContext }) => {
  const { basePath, pageType } = pageContext
  const { locale } = useLocalization()

  const data = useStaticQuery(graphql`
    query DetailSiteQuery {
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
        }
      }
    }
  `)
  const {
    site: { siteMetadata },
  } = data

  const [isLoading, setIsLoading] = useState(true)
  const [item, setItem] = useState(null)
  useEffect(() => {
    let currentLocation = window.location
    let currentPath = currentLocation.pathname
    let mounted = true
    const api = `https://json-api.buzzing.cc/ref${currentPath}data.json`

    fetch(api)
      .then(data => data.json())
      .then(result => {
        if (mounted) {
          let _item = jsonToData(pageType, result)
          _item.__typename = "SocialMediaPost"
          setItem(_item)
          setIsLoading(false)
        }
      })
    return () => (mounted = false)
  }, [])

  if (!siteMetadata || !basePath) {
    return null
  }

  const { title, menuLinks } = siteMetadata

  if (item === null) {
    return (
      <Layout
        basePath={basePath}
        menuLinks={menuLinks}
        location={location}
        title={title}
        pageType="detail"
        pageContext={pageContext}
        siteMetadata={siteMetadata}
      >
        <Helmet
          htmlAttributes={{
            lang: locale,
          }}
          title={"Loading Detail..."}
        ></Helmet>
        <div>Loading...</div>
      </Layout>
    )
  }

  return (
    <Layout
      basePath={basePath}
      menuLinks={menuLinks}
      location={location}
      title={title}
      pageType="detail"
      pageContext={pageContext}
      siteMetadata={siteMetadata}
    >
      <DetailSEO
        location={location}
        pageContext={pageContext}
        item={item}
        siteMetadata={siteMetadata}
      ></DetailSEO>

      <main>
        <Detail
          item={item}
          pageContext={pageContext}
          location={location}
        ></Detail>
        <DetailFooter
          {...{
            basePath: basePath,
            item,
            pageContext,
            siteMetadata,
          }}
        />
      </main>
    </Layout>
  )
}

export default DetailPage
