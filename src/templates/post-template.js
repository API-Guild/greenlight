import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout/layout"
import Hero from "../components/hero/hero"
import "../pages/global.scss"

export default function BlogPost({ data }) {
  const post = data.markdownRemark
  return (
    <Layout>
      <Hero title={post.frontmatter.title} subtitle={post.frontmatter.description} />
      <section className="section">
        <div className="container is-fluid">
          <div dangerouslySetInnerHTML={{ __html: post.html }} />
        </div>
      </section>
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title,
        description
      }
    }
  }
`
