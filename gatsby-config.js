/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  /* Site Metadata */
  siteMetadata: {
    title: `Greenlight`,
    author: [
      {
        name: `Stephen Price`,
        summary: `Fullstack Web Developer from Ecuador`,
        github: `https://github.com/stephenlprice`,
        portfolio: `https://stephenlprice.github.io/portfolio/index.html`,
      },
      {
        name: `Trevor Smith`,
        summary: `Fullstack Web Developer and Grammy nominated Musician`,
        github: `https://github.com/trevorsmithbanjo`,
        portfolio: `https://trevorsmithbanjo.github.io/#/`,
      },
    ],
    description: `A guerrilla data portal for analysts with deadlines.`,
    siteUrl: `http://localhost:8000`,
    image: `/static/greenlight-a77dbefffbe88458b1591453d8476397.svg`,
    siteLanguage: `en`,
  },
  /* Your site config here */
  plugins: [
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-plugin-purgecss`,
      options: {
        printRejected: true, // Print removed selectors and processed file names
        develop: false, // Enable while using `gatsby develop`
        // tailwind: true, // Enable tailwindcss support
        // ignore: ['/ignored.css', 'prismjs/', 'docsearch.js/'], // Ignore files/folders
        purgeOnly: ["global.scss"], // Purge only these files/folders ex. ['components/', '/main.css', 'bootstrap/']
        purgeCSSOptions: {
          // https://purgecss.com/configuration.html#options
          safelist: ["is-active"], // Don't remove this selector
        },
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `blog`,
        path: `${__dirname}/content/blog/`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-prismjs`,
          },
        ],
      },
    },
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-mdx`,
  ],
}
