import React from "react"
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
  table,
  paragraph,
  ul,
  blockquote,
  ol,
  a,
  Checkbox,
} from "../components/bulmaElements/bulmaElements"

export default function Article({ data }) {
  const post = data.mdx;
  const meta = post.frontmatter;

  // Applying Bulma classes to markup generated from markdown
  const components = {
    h1: isSize1,
    h2: isSize2,
    h3: isSize3,
    h4: isSize4,
    h5: isSize5,
    h6: isSize6,
    table: table,
    p: paragraph,
    ul: ul,
    blockquote: blockquote,
    ol: ol,
    a: a,
    input: Checkbox,
  };

  return (
    <>
      <Layout>
        <Hero 
          title={meta.title}
          titleColor="primary"
          titleSize={1} 
          subtitle={meta.description}
          subtitleSize={4} 
          date={meta.date}
        />
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
      }
    }
  }
`
