const siteMetadata = {
  siteUrl: "https://reddit.buzzing.cc",
  author: `Reddit`,
  locale: "zh",
  title: "Reddit 热门",
  shortTitle: "Reddit热门",
  description: "用中文浏览Reddit热门内容",
  keywords: ["buzzing"],
  telegram: "buzzingcc",
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
  menuLinks: [
    {
      name: "每周精选",
      url: "/issues",
    },
    {
      name: "RSS",
      url: "/rss.xml",
      prefetch: false,
    },
  ],
  social: [
    {
      name: `Reddit`,
      url: `https://www.reddit.com/`,
      external: true,
    },
  ],
  localize: [
    {
      locale: "en",
      title: `Buzzing on Reddit`,
      shortTitle: "BuzzReddit",
      description: `See what's buzzing on Reddit in your native language`,
      keywords: ["buzzing"],
      menuLinks: [
        {
          name: "Weekly Selection",
          url: "/issues",
        },
        {
          name: "RSS",
          url: "/rss.xml",
          prefetch: false,
        },
      ],
      social: [
        {
          name: `Reddit`,
          url: `https://www.reddit.com/`,
          external: true,
        },
      ],
    },
    {
      locale: "zh-Hant",
      title: "Reddit 熱門",
      shortTitle: "Reddit熱門",
      description: "用中文瀏覽Reddit熱門內容",
    },
  ],
}

module.exports = {
  siteMetadata,
}
