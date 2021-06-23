const siteMetadata = {
  siteUrl: "https://changemyview.buzzing.cc",
  author: `Buzzing.cc`,
  locale: "zh",
  title: "你可以改变我的想法吗？",
  iconUrl: "https://i.imgur.com/jVsw5Oq.png",
  defaultSocialImageUrl: "https://i.imgur.com/LI3xVu0.png",
  shortTitle: "改变我的想法",
  description: "用中文浏览Reddit-Change My View的热帖",
  keywords: ["buzzing", "改变我的想法", "reddit"],
  telegram: "@buzzingcc",
  telegram_chat_id: "-1001406368978",
  menuLinks: [
    {
      name: "每周精选",
      url: "/issues",
    },
  ],
  subscriptions: [
    {
      name: "Twitter @buzzingcc",
      url: "https://twitter.com/buzzingcc",
      external: true,
    },
    {
      name: "Telegram @buzzingcc",
      url: "https://t.me/buzzingcc",
      external: true,
    },
    {
      name: "RSS",
      url: "/rss.xml",
      prefetch: false,
    },
  ],
  social: [
    {
      name: `Change My View`,
      url: `https://www.reddit.com/r/changemyview/`,
      external: true,
    },
    {
      name: `Buzzing`,
      url: `https://www.buzzing.cc/`,
      external: true,
    },
    {
      name: `Buzzing`,
      url: `https://www.buzzing.cc/`,
      external: true,
    },
  ],
  localize: [
    {
      locale: "en",
      title: `Buzzing on Change My View`,
      shortTitle: "BuzzCMV",
      description: `See what's buzzing on Reddit Change My View Subreddit in your native language`,
      keywords: ["buzzing", "Change My View", "Change My Mind"],
      menuLinks: [
        {
          name: "Weekly Selection",
          url: "/en/issues",
        },
      ],
      social: [
        {
          name: `Change My View`,
          url: `https://www.reddit.com/r/changemyview/`,
          external: true,
        },
        {
          name: `Buzzing`,
          url: `https://www.buzzing.cc/en/`,
          external: true,
        },
      ],
    },
    {
      locale: "zh-Hant",
      title: "你可以改變我的想法嗎？",
      shortTitle: "改變我的想法",
      description: "用中文瀏覽Reddit-Change My View的熱帖",
      keywords: ["buzzing", "改變我的想法", "reddit"],
      menuLinks: [
        {
          name: "每週精選",
          url: "/zh-Hant/issues",
        },
      ],
      social: [
        {
          name: `Change My View`,
          url: `https://www.reddit.com/r/changemyview/`,
          external: true,
        },
        {
          name: `Buzzing`,
          url: `https://www.buzzing.cc/zh-Hant/`,
          external: true,
        },
      ],
    },
    {
      locale: "ja",
      title: "気が変わってもらえますか？",
      shortTitle: "気が変わってもらえますか",
      description: "人気のReddit気が変わってもらえますか記事を日本語で閲覧",
      keywords: ["buzzing", "気が変わってもらえますか？"],
      menuLinks: [
        // {
        // name: "每週精選",
        // url: "/zh-Hant/issues",
        // },
        // {
        //   name: "RSS",
        //   url: "/zh-Hant/rss.xml",
        //   prefetch: false,
        // },
      ],
    },
  ],
}

module.exports = {
  siteMetadata,
}
