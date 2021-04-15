import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout/layout"
import Hero from "../components/hero/hero"
import rehypeReact from "rehype-react"

export default function BlogPost({ data }) {
  const post = data.markdownRemark
  const frontmatter = post.frontmatter

  // const renderAst = new rehypeReact({
  //   createElement: React.createElement,
  //   components: {
  //     h1: isSize1,
  //     h2: isSize2,
  //     h3: isSize3,
  //     h4: isSize4,
  //     h5: isSize5,
  //     h6: isSize6,
  //   },
  // }).Compiler

  return (
    <Layout>
      <Hero
        title={frontmatter.title}
        subtitle={frontmatter.description}
        date={frontmatter.date}
      />
      <div className="container is-fluid content">
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
        {/* {renderAst(post.htmlAst)} */}
      </div>
    </Layout>
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
      }
    }
  }
`
