/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  plugins: [
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-plugin-purgecss`,
      options: {
        printRejected: false, // Print removed selectors and processed file names
        develop: false, // Enable while using `gatsby develop`
        // tailwind: true, // Enable tailwindcss support
        // ignore: ['/ignored.css', 'prismjs/', 'docsearch.js/'], // Ignore files/folders
        purgeOnly : ['global.scss'], // Purge only these files/folders ex. ['components/', '/main.css', 'bootstrap/']
        purgeCSSOptions: {
          // https://purgecss.com/configuration.html#options
          safelist: ['is-active'], // Don't remove this selector
        },
      },
    },
  ],
}
