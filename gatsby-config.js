//require('dotenv').config()
console.log("gatsby-config.js");
console.log("process.env: ", process.env);
console.log("process.env.DATO_API_TOKEN: ", process.env.DATO_API_TOKEN);
module.exports = {
  siteMetadata: {
    title: `Gabe O'Leary`
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sass`,
    `gatsby-transformer-remark`,
    {
      resolve: `gatsby-source-datocms`,
      options: {
        apiToken: process.env.DATO_API_TOKEN
      }
    }
  ]
};
