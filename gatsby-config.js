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
    description: `A guerrilla data portal for analysts with deadlines. 
    Built with Gatsby and Tableau.`,
    siteUrl: `https://api-guild.github.io/greenlight/`,
    image: `/images/greenlight-sideways.png`,
    siteLanguage: `en`,
  },
  pathPrefix: "/greenlight",
  /* Your site config here */
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/blog/`,
      },
    },
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
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-remark-images`,
      // Known issue with .png files requires this plugin to be described twice
      // https://github.com/gatsbyjs/gatsby/issues/25272#issuecomment-649571274
      options: {
        maxWidth: 700,
        backgroundColor: `transparent`,
      },
    },
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: [`.mdx`, `.md`],
        gatsbyRemarkPlugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              backgroundColor: `transparent`,
              // It's important to specify the maxWidth (in pixels) of
              // the content container as this plugin uses this as the
              // base for generating different widths of each image.
              maxWidth: 700,            
            },
          },
        ],
      },
    },
    // {
    //   resolve: `gatsby-plugin-mdx`,
    //   options: {
    //     extensions: [`.mdx`, `.md`],
    //     gatsbyRemarkPlugins: [
    //       {
    //         resolve: `gatsby-remark-prismjs`,
    //       },
    //     ],
    //   },
    // },
  ],
}
