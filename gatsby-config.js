require("dotenv").config();

module.exports = {
  siteMetadata: {
    title: `Gabe O'Leary`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sass`,
    `gatsby-transformer-remark`,
    {
      resolve: `gatsby-source-datocms`,
      options: {
        apiToken: process.env.DATO_API_TOKEN,
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-165977347-1",
      },
    },
    {
      resolve: `gatsby-plugin-umami`,
      options: {
        websiteId: "3bb05bc8-9b50-4ed9-9a15-313979906ae2",
        srcUrl: "https://umami-production-9fe7.up.railway.app/script.js",
        includeInDevelopment: false,
        autoTrack: true,
        respectDoNotTrack: true,
        dataCache: false,
        dataDomains: "goleary.com,gabeoleary.com",
      },
    },
  ],
};
