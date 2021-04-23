import React from "react"
import Helmet from "react-helmet"
import { graphql } from "gatsby"
import Layout from "../components/layout/layout"
import Hero from "../components/hero/hero"
import { MDXRenderer } from "gatsby-plugin-mdx"
import { MDXProvider } from "@mdx-js/react"
import {
  isSize1,
  isSize2,
  isSize3,
  isSize4,
  isSize5,
  isSize6,
  isSize7,
  table,
  paragraph,
  ul,
  blockquote,
} from "../components/bulmaElements/bulmaElements"

export default function BlogPost({ data }) {
  const post = data.mdx
  const meta = post.frontmatter
  const pathSegment = "/javascripts/api/"
  const fullPath = meta.tableauServer + pathSegment + meta.tableauVersion
  const viz = meta.viz

  // const isSize1 = props => <h1 className="is-size-1" {...props} />
  const components = {
    h1: isSize1,
    h2: isSize2,
    h3: isSize3,
    h4: isSize4,
    h5: isSize5,
    h6: isSize6,
    h7: isSize7,
    table: table,
    p: paragraph,
    ul: ul,
    blockquote: blockquote,
  }

  return (
    <>
      <Helmet>
        {meta.tableauServer && meta.tableauVersion ? (
          <script type="text/javascript" src={fullPath} />
        ) : null}
      </Helmet>
      <Layout>
        <Hero title={meta.title} subtitle={meta.description} date={meta.date} />
        <div className="container is-fluid">
          <MDXProvider components={components}>
            <MDXRenderer>{post.body}</MDXRenderer>
          </MDXProvider>
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
