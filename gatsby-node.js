const path = require('path');

module.exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const portfolioTemplate = path.resolve('./src/templates/portfolio.js')
  const resp = await graphql(`
    query {
      allContentfulProject {
        edges {
          node {
            slug
          }
        }
      }
    }
  `)

  resp.data.allContentfulProject.edges.forEach((edge) => {
    createPage({
      component: portfolioTemplate,
      path: `/works/${edge.node.slug}`,
      context: {
        slug: edge.node.slug
      }
    })
  })
}
// this is to find & extract the slug
