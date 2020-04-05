/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  plugins: [
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-styled-components",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "project",
        path: "./data"
      }
    },
    "gatsby-transformer-json",
    `gatsby-transformer-remark`
  ], 
  siteMetadata: {
    title: `Andreas Limi`,
    github: `https://github.com/andreaslimidev`,
    linkedin: `https://linkedin.com`,
    email: `mailto: andreaslimidev@gmail.com`
  }
};
