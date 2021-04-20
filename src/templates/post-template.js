import React from "react"
import Helmet from "react-helmet"
import { graphql } from "gatsby"
import Layout from "../components/layout/layout"
import Hero from "../components/hero/hero"
import { MDXRenderer } from "gatsby-plugin-mdx"

export default function BlogPost({ data }) {
  const post = data.mdx
  const meta = post.frontmatter
  const pathSegment = "/javascripts/api/"
  const fullPath = meta.tableauServer + pathSegment + meta.tableauVersion
  const viz = meta.viz

  return (
    <>
      <Helmet>
        {meta.tableauServer && meta.tableauVersion ? (
          <script type="text/javascript" src={fullPath} />
        ) : null}
      </Helmet>
      <Layout>
        <Hero title={meta.title} subtitle={meta.description} date={meta.date} />
        <div className="container is-fluid content">
          <MDXRenderer>{post.body}</MDXRenderer>
        </div>
      </Layout>
    </>
  )
}

export const query = graphql`
  query($slug: String!) {
    mdx(fields: { slug: { eq: $slug } }) {
      body
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
