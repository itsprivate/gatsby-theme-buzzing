export {
  t,
  getTitle,
  getExcerpt,
  getSharedTitle,
  kebabToSnakeCase,
} from "../utils"

function isDefaultLang(locale, defaultLang) {
  return locale === defaultLang
}

export function localizedPath(defaultLang, locale, path) {
  // The default language isn't prefixed
  if (isDefaultLang(locale, defaultLang)) {
    return path
  }

  const [, base] = path.split(`/`)
  //
  // If for whatever reason we receive an already localized path
  // (e.g. if the path was made with location.pathname)
  // just return it as-is.
  if (base === locale) {
    return path
  }

  // If it's another language, prefix with the locale
  return `/${locale}${path}`
}
import moment from "moment"
const basePath = `/`
export function jsonToData(type, node) {
  if (type == `tweet`) {
    const date = moment(
      node.created_at,
      `dd MMM DD HH:mm:ss ZZ YYYY`,
      `en`
    ).toISOString()

    const tweetText = node.full_text
    const author = node.user.name
    const authorSlug = node.user.screen_name
    const authorUrl = `https://twitter.com/${node.user.screen_name}`
    const authorAvatarUrl = node.user.profile_image_url_https.replace(
      `_normal.`,
      `.`
    )

    const retweeted = !!node.retweeted_status
    const isQuoteStatus = !!node.quoted_status
    const sharedCount = node.retweet_count
    const likeCount = node.favorite_count
    const score = sharedCount * 2 + likeCount
    const fieldData = {
      parent: node,
      provider: `Twitter`,
      title: tweetText,
      excerpt: ``,
      thirdPartyId: node.id_str,
      body: ``,
      tags: node.entities.hashtags.map(tag => tag.text) || [],
      slug: urlResolve(basePath, `tweet/${node.id_str}/`),
      date: date,
      author,
      authorSlug,
      authorUrl,
      authorImageRemote: authorAvatarUrl,
      score,
      sharedCount,
      likeCount,
      url: `https://twitter.com/${authorSlug}/statuses/${node.id_str}`,
    }
    if (
      node.entities &&
      node.entities.media &&
      node.entities.media[0] &&
      node.entities.media[0].media_url_https
    ) {
      fieldData.imageAlt = `Tweet Image`
      fieldData.imageRemote = node.entities.media[0].media_url_https
    }

    if (retweeted || isQuoteStatus) {
      const sharedStatus = node.retweeted_status || node.quoted_status

      const sharedCreated = moment(
        sharedStatus.created_at,
        `dd MMM DD HH:mm:ss ZZ YYYY`,
        `en`
      ).toISOString()
      const sharedAuthorImageRemote =
        sharedStatus.user.profile_image_url_https.replace(`_normal.`, `.`)
      fieldData.sharedContent = {
        id: sharedStatus.id_str,
        thirdPartyId: sharedStatus.id_str,
        title: sharedStatus.full_text,
        body: ``,
        slug: ``,
        date: sharedCreated,
        tags: sharedStatus.entities.hashtags.map(tag => tag.text) || [],
        excerpt: ``,
        url: `https://twitter.com/${sharedStatus.user.screen_name}/statuses/${sharedStatus.id_str}`,
        author: sharedStatus.user.name,
        authorUrl: `https://twitter.com/statuses/${sharedStatus.user.screen_name}`,
        authorImageRemote: sharedAuthorImageRemote,
        authorSlug: sharedStatus.user.screen_name,
      }

      if (
        sharedStatus.entities &&
        sharedStatus.entities.media &&
        sharedStatus.entities.media[0] &&
        sharedStatus.entities.media[0].media_url_https
      ) {
        fieldData.sharedContent.imageAlt = `Tweet Image`
        fieldData.sharedContent.imageRemote =
          sharedStatus.entities.media[0].media_url_https
      }
    }

    // add tweet tag
    if (!fieldData.tags.includes(`tweet`)) {
      fieldData.tags.push(`tweet`)
    }

    return fieldData
  }
  if (type == `reddit`) {
    const date = new Date(parseInt(node.created_utc * 1000)).toISOString()

    const author = node.author
    let text = ``
    if (node.the_new_excerpt) {
      text = node.the_new_excerpt
    }
    const tags = [node.subreddit]
    const excerpt = text
    const postHint = node.postHint
    const redditUrl = `https://www.reddit.com${node.permalink}`
    const fieldData = {
      parent: node,

      provider: `Reddit`,
      title: node.title,
      thirdPartyId: node.id,
      excerpt: excerpt,
      body: node.selftext_html || ``,
      tags: tags,
      slug: urlResolve(basePath, `reddit${node.permalink}`),
      date: date,
      author,
      authorSlug: author,
      authorUrl: `https://www.reddit.com/user/${node.author}`,
      channel: node.subreddit,
      channelUrl: `https://www.reddit.com/r/${node.subreddit}`,
      url: redditUrl,
      originalUrl:
        node.is_self || postHint === `image` || postHint === `hosted:video`
          ? `https://www.reddit.com${node.permalink}`
          : redditUrl,
      score: node.score,
    }
    // add tweet tag
    if (!fieldData.tags.includes(`reddit`)) {
      fieldData.tags.push(`reddit`)
    }
    if (
      node.media &&
      node.media.reddit_video &&
      node.media.reddit_video.fallback_url
    ) {
      fieldData.video = {
        url: node.media.reddit_video.fallback_url,
        width: node.media.reddit_video.width,
        height: node.media.reddit_video.height,
      }
    } else if (
      node.preview &&
      node.preview.images &&
      node.preview.images[0] &&
      node.preview.images[0].variants &&
      node.preview.images[0].variants.mp4 &&
      node.preview.images[0].variants.mp4.source &&
      node.preview.images[0].variants.mp4.source.url
    ) {
      // gif

      fieldData.video = {
        url: node.preview.images[0].variants.mp4.source.url,
        width: node.preview.images[0].variants.mp4.source.width,
        height: node.preview.images[0].variants.mp4.source.height,
      }
    } else if (
      node.preview &&
      node.preview.reddit_video_preview &&
      node.preview.reddit_video_preview.fallback_url
    ) {
      fieldData.video = {
        url: node.preview.reddit_video_preview.fallback_url,
        width: node.preview.reddit_video_preview.width,
        height: node.preview.reddit_video_preview.height,
      }
    } else if (
      node.preview &&
      node.preview.images &&
      node.preview.images[0] &&
      node.preview.images[0].source &&
      node.preview.images[0].source.url
    ) {
      fieldData.imageAlt = `Reddit Image`
      if (
        node.preview.images[0].resolutions &&
        node.preview.images[0].resolutions.length > 0
      ) {
        fieldData.imageRemote =
          node.preview.images[0].resolutions[
            node.preview.images[0].resolutions.length - 1
          ].url
      } else {
        fieldData.imageRemote = node.preview.images[0].source.url
      }
      if (fieldData.imageRemote.startsWith(`https://preview.`)) {
        fieldData.imageRemote = fieldData.imageRemote.replace(
          `https://preview.`,
          `https://i.`
        )
      }
    }
    if (node.is_video && fieldData.video) {
      // fieldData.video.url = `https://www.reddit.com/mediaembed/${node.id}`
      fieldData.video.url = `https://www.redditmedia.com${node.permalink}?ref_source=embed&amp;ref=share&amp;embed=true`
      fieldData.video.embed = true
    }

    return fieldData
  }

  if (type == `hn`) {
    const date = new Date(node.created_at).toISOString()

    const author = node.author
    const tags = []
    let channel = ``
    let channelUrl = ``
    if (node._tags && node._tags[0]) {
      tags.push(node._tags[0])
      if (node._tags.includes(`show_hn`)) {
        tags.push(`Show HN`)
        channel = `Show HN`
        channelUrl = `https://news.ycombinator.com/show`
      }
      if (node._tags.includes(`ask_hn`)) {
        tags.push(`ASK HN`)
        channel = `ASK HN`
        channelUrl = `https://news.ycombinator.com/ask`
      }
      if (node._tags.includes(`poll`)) {
        tags.push(`Poll`)
      }
    }
    const excerpt = ``
    const fieldData = {
      parent: node,

      provider: `Hacker News`,
      title: node.title,
      thirdPartyId: node.objectID,
      excerpt: excerpt,
      body: ``,
      tags: tags,
      slug: urlResolve(basePath, `hn/${node.objectID}/`),
      date: date,
      author,
      authorUrl: `https://news.ycombinator.com/user?id=${author}`,
      url: `https://news.ycombinator.com/item?id=${node.objectID}`,
      originalUrl:
        node.url || `https://news.ycombinator.com/item?id=${node.objectID}`,
      score: node.points,
    }
    if (channel) {
      fieldData.channel = channel
      fieldData.channelUrl = channelUrl
    }
    if (node.image) {
      fieldData.imageRemote = node.image
    }
    // add  tag
    if (!fieldData.tags.includes(`Hacker News`)) {
      fieldData.tags.push(`Hacker News`)
    }

    return fieldData
  }

  if (type === `ph`) {
    const date = node.createdAt

    const author = node.user.name
    const authorUrl = node.user.url
    const tags = []
    if (node.topics && node.topics.edges && node.topics.edges.length > 0) {
      node.topics.edges.forEach(edge => {
        tags.push(edge.node.name)
      })
    }
    const excerpt = node.description
    const fieldData = {
      parent: node,

      provider: `Product Hunt`,
      title: `${node.name} - ${node.tagline}`,
      excerpt: excerpt,
      thirdPartyId: node.id,
      body: excerpt,
      tags: tags,
      slug: urlResolve(basePath, `ph/${node.slug}/`),
      date: date,
      author,
      authorUrl,
      originalUrl: node.website || node.url,
      url: node.url,
      score: node.votesCount,
    }
    if (node.media && node.media.length > 0) {
      if (node.media[0].type === `video`) {
        fieldData.video = {
          url: node.media[0].videoUrl,
        }
      }
      if (node.media[0].type === `image` && node.media[0].url) {
        fieldData.imageRemote = node.media[0].url
      }
    }
    // add  tag
    if (!fieldData.tags.includes(`ProductHunt`)) {
      fieldData.tags.push(`ProductHunt`)
    }

    return fieldData
  }
  if (type == `youtube`) {
    const date = node.created_at || node.isoDate

    const author = node.author
    const channelUrl = `https://www.youtube.com/channel/${node.channelId}`
    let tags = []
    if (node.tags && node.tags.length > 0) {
      tags = node.tags
    } else {
      tags = findHashtags(node.description)
    }
    const excerpt = node.excerpt || node.description
    let score = Math.floor(
      (node.starRating.count * node.starRating.average) / 5
    )
    if (!(score > 0)) {
      score = 0
    }
    let views = 0
    views = Number(node.statistics.views)
    if (!(views > 0)) {
      views = 0
    }
    const fieldData = {
      parent: node,

      provider: `Youtube`,
      title: node.title,
      excerpt: excerpt,
      body: excerpt,
      thirdPartyId: node.videoId,
      tags: tags,
      slug: urlResolve(basePath, `youtube/${node.videoId}/`),
      date: date,
      author,
      channelUrl,
      url: node.link,
      score: score,
      views: views,
      video: {
        url: node.link,
      },
    }

    if (node.thumbnail && node.thumbnail.url) {
      fieldData.imageRemote = node.thumbnail.url
    }

    // add  tag
    if (!fieldData.tags.includes(`Youtube`)) {
      fieldData.tags.push(`Youtube`)
    }

    return fieldData
  }
  if (type === `instagram`) {
    // TODO
    const date = new Date(node.createdAt || node.timestamp).toISOString()

    const author = node.username
    const channelUrl = `https://www.instagram.com//${node.username}`
    let tags = []
    if (node.tags && node.tags.length > 0) {
      tags = node.tags
    } else {
      tags = findHashtags(node.caption)
    }

    const fieldData = {
      parent: node,

      provider: `Instagram`,
      title: node.caption,
      excerpt: ``,
      body: ``,
      thirdPartyId: node.id,
      tags: tags,
      slug: urlResolve(basePath, `instagram/${node.id}/`),
      date: date,
      author,
      channel: author,
      channelUrl,
      authorUrl: channelUrl,
      url: node.permalink,
      originalUrl: node.permalink,
    }

    if (node.original || node.media_url) {
      if (node.mediaType === `VIDEO` || node.media_type === `VIDEO`) {
        fieldData.video = {
          url: node.original || node.media_url,
        }
        if (node.preview || node.thumbnail_url) {
          fieldData.imageRemote = node.preview || node.thumbnail_url
        }
      } else {
        fieldData.imageRemote = node.original || node.media_url
      }
    }

    // add  tag
    if (!fieldData.tags.includes(`Instagram`)) {
      fieldData.tags.push(`Instagram`)
    }

    return fieldData
  }
}
function urlResolve(...args) {
  return args.join(``)
}
function findHashtags(searchText) {
  searchText = searchText || ``
  const regexp = /\B#\w\w+\b/g
  const result = searchText.match(regexp)
  if (result) {
    return result.map(item => {
      return item.trim().slice(1)
    })
  } else {
    return []
  }
}
