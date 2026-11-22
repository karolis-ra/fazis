/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: "https://fazis.lt",
  outDir: "out",
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
