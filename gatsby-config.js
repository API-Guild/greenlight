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
    `gatsby-remark-images`,
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: [`.mdx`, `.md`],
        gatsbyRemarkPlugins: [
          {
            resolve: `gatsby-remark-prismjs`,
            resolve: `gatsby-remark-images`,
            options: {
              // It's important to specify the maxWidth (in pixels) of
              // the content container as this plugin uses this as the
              // base for generating different widths of each image.
              maxWidth: 1408,
              backgroundColor: "none",
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
