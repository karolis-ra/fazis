/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: "https://fazis.lt",
  generateRobotsTxt: true,
  sitemapSize: 7000,
  exclude: ["/api/*", "/404", "/portfolio"],
  robotsTxtOptions: {
    policies: [
      { userAgent: "*", allow: "/" },
      { userAgent: "*", disallow: ["/api/*"] },
    ],
  },
};
