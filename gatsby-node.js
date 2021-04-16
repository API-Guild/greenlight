const { createFilePath } = require(`gatsby-source-filesystem`)
const path = require(`path`)

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions
  // Ensures we are processing only markdown files
  if (node.internal.type === `Mdx`) {
    // Use `createFilePath` to turn markdown files in our `content/blog/` directory into `/dashboards/`
    const relativeFilePath = createFilePath({
      node,
      getNode,
      basePath: "content/blog/",
    })

    // removes the folder name from the slug as obtained from relativeFilePath
    // new content must always be added in the format of folder > .md file
    // so that folders may organize other post assets such as images
    const modifiedPath = relativeFilePath.substr(
      relativeFilePath.indexOf("/", relativeFilePath.indexOf("/") + 1)
    )

    // Creates new queryable field with name of 'slug'
    createNodeField({
      node,
      name: "slug",
      value: `/dashboards${modifiedPath}`,
    })
  }
}

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions
  const result = await graphql(
    `
      {
        allMdx {
          edges {
            node {
              fields {
                slug
              }
            }
          }
        }
      }
    `
  )

  if (result.errors) {
    reporter.panicOnBuild(
      `There was an error loading your data blog posts`,
      result.errors
    )
    return
  }

  result.data.allMdx.edges.forEach(({ node }) => {
    createPage({
      path: node.fields.slug,
      component: path.resolve(`./src/templates/post-template.js`),
      context: {
        // Data passed to context is available
        // in page queries as GraphQL variables.
        slug: node.fields.slug,
      },
    })
  })
}
