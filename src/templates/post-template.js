import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout/layout"
import Hero from "../components/hero/hero"
import { MDXRenderer } from "gatsby-plugin-mdx"

export default function BlogPost({ data }) {
  const post = data.mdx;
  const meta = post.frontmatter;

  return (
    <>
      <Layout>
        <Hero title={meta.title} subtitle={meta.description} date={meta.date} />
        <div className="container is-fluid">
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
