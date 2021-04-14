import React from "react"
import PropTypes from "prop-types"
import { Helmet } from "react-helmet"
import { useLocation } from "@reach/router"
import { useStaticQuery, graphql } from "gatsby"

const SEO = ({ title, description, image, article, siteLanguage }) => {
  const { pathname } = useLocation();
  const { site } = useStaticQuery(query);

  // destructure the data from the query
  const {
    defaultTitle,
    defaultDescription,
    siteUrl,
    defaultImage,
    defaultLanguage,
  } = site.siteMetadata;

  // Aliasing the properties comes in handy here to avoid name collisions.
  const seo = {
    title: title || defaultTitle,
    description: description || defaultDescription,
    image: `${siteUrl}${image || defaultImage}`,
    url: `${siteUrl}${pathname}`,
    lang: siteLanguage || defaultLanguage,
  };

  // Adds meta tags for SEO and to generate previews for social media sharing.
  // Checks if the props were used. If not, the default values are applied.
  return (
    <Helmet title={seo.title}>
      <html lang={seo.lang} />
      <meta name="description" content={seo.description} />
      <meta name="image" content={seo.image} />
      {seo.url && <meta property="og:url" content={seo.url} />}
      {(article ? true : null) && <meta property="og:type" content="article" />}
      {seo.title && <meta property="og:title" content={seo.title} />}
      {seo.description && (<meta property="og:description" content={seo.description} />)}
      {seo.image && <meta property="og:image" content={seo.image} />}
      <meta name="twitter:card" content="summary_large_image" />
      {/* {twitterUsername && (<meta name="twitter:creator" content={twitterUsername} />)} */}
      {seo.title && <meta name="twitter:title" content={seo.title} />}
      {seo.description && (<meta name="twitter:description" content={seo.description} />)}
      {seo.image && <meta name="twitter:image" content={seo.image} />}
      <title>{seo.title}</title>
    </Helmet>
  )
}

export default SEO

// propTypes ensure we get all the data needed in the component
// helps as a guide while destructuring or using the props.
SEO.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  image: PropTypes.string,
  article: PropTypes.bool,
  siteLanguage: PropTypes.string,
  url: PropTypes.string,
};

// SEO component is also in other files, e.g. post-template file, 
// the component also accepts sensible defaults in the SEO.defaultProps section. 
// This way the information in siteMetadata (gatsby-config.js) gets used every time unless you define the property explicitly.
SEO.defaultProps = {
  title: null,
  description: null,
  image: null,
  article: false,
  siteLanguage: 'en',
  url: null,
};

const query = graphql`
  query SEO {
    site {
      siteMetadata {
        defaultTitle: title
        defaultDescription: description
        siteUrl: siteUrl
        defaultImage: image
        defaultLanguage: siteLanguage
      }
    }
  }
`;
