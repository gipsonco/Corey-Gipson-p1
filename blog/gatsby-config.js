module.exports = {
  siteMetadata: {
    title: `Last 50 NBA Champions`,
    description: `ITDev-164 Project 1`,
    author: `Corey Gipson`,
    siteUrl: `https://gatsbystarterdefaultsource.gatsbyjs.io/`,
    contact: {
      name: 'Corey Gipson',
      company: 'Blogs Inc.',
      address: 'PO Box 1234'
    }
  },
  plugins: [
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: `imi0ootzdn5x`,
        accessToken: `BX39ktMj3nsJeRrBqAKJFGKMMv8US6fbASVb8jgmkRc`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        // This will impact how browsers show your PWA/website
        // https://css-tricks.com/meta-theme-color-and-trickery/
        // theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
  ],
}
