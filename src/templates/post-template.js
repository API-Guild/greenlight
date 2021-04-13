import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout/layout"
import Hero from "../components/hero/hero"
import "../pages/global.scss"

export default function BlogPost({ data }) {
  const post = data.markdownRemark
  return (
    <Layout>
      <Hero title={post.frontmatter.title} subtitle={post.frontmatter.description} date={post.frontmatter.date} />
        <div className="container is-fluid">
          <div dangerouslySetInnerHTML={{ __html: post.html }} />
        </div>
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title,
        description,
        date
      }
    }
  }
`
