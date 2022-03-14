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
      resolve: "gatsby-plugin-copy-files",
      options: {
        source: `/_redirects`,
        destination: "public",
      },
    },
  ],
};
