/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-config/
 */

/**
 * 

 * @type {import('gatsby').GatsbyConfig}
 */


module.exports = {
  flags: {
    DEV_SSR: true
  },
  plugins: [`gatsby-plugin-styled-components`, `gatsby-plugin-react-helmet`],
}


