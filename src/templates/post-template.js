import React from "react"
import Helmet from "react-helmet"
import { graphql } from "gatsby"
import Layout from "../components/layout/layout"
import Hero from "../components/hero/hero"


export default function BlogPost({ data }) {
  const post = data.markdownRemark;
  const meta = post.frontmatter;
  const pathSegment = "/javascripts/api/";
  const fullPath = meta.tableauServer + pathSegment + meta.tableauVersion;
  const viz = meta.viz;

  return (
    <>
      <Helmet>
        <script type="text/javascript" src={fullPath} />
      </Helmet>
      <Layout>
        <Hero
          title={meta.title}
          subtitle={meta.description}
          date={meta.date}
        />
        <div className="container is-fluid content">
          <div dangerouslySetInnerHTML={{ __html: post.html }} />
        </div>
      </Layout>
    </>
  )
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        description
        date
        tableauServer
        tableauVersion
        viz
      }
    }
  }
`
