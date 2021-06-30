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
    siteLanguage: `en-US`,
  },
  pathPrefix: "/greenlight",
  /* Your site config here */
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        // important to change this path on your new site
        path: `${__dirname}/content/docs/`,
      },
    },
    'gatsby-plugin-svgr',
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `docs`,
        path: `${__dirname}/content/docs/`,
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
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: "Greenlight: a guerrilla data portal for analysts with deadlines",
        short_name: "Greenlight",
        description: "Leverage the modern web to build a site that's fast, secure, and low maintenance. Forget about deploying servers and dealing with malware. You don't need hundreds of hours of work to learn these techniques either. Instead, focus on your content and let Greenlight take care of the rest.",
        start_url: "/",
        background_color: "#0D0D0D",
        theme_color: "#0DF2C1",
        // Enables "Add to Homescreen" prompt and disables browser UI (including back button)
        // see https://developers.google.com/web/fundamentals/web-app-manifest/#display
        display: "minimal-ui",
        icon: "src/assets/svg/greenlightFavicon.svg", // This path is relative to the root of the site.
        // An optional attribute which provides support for CORS check.
        // If you do not provide a crossOrigin option, it will skip CORS for manifest.
        // Any invalid keyword or empty string defaults to `anonymous`
        crossOrigin: `use-credentials`,
      },
    },
    'gatsby-plugin-offline',
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
