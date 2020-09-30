import React from 'react'
import Layout from '../components/layout'
import { Link, graphql, useStaticQuery } from 'gatsby'
import Head from '../components/head'

const WorksPage = () => {
  const data = useStaticQuery(graphql`
    query {
        allContentfulProject (
          sort: {
            fields:publishedDate,
            order:DESC
          }
        ) {
          edges {
            node {
              title
              slug
              publishedDate (
                formatString:"MMMM Do, YYYY"
              )
            }
          }
        }
      }
    `)
  return (
    <Layout>
    <Head title='works'/>
      <h1>Works</h1>
      <ol>
        {data.allContentfulProject.edges.map((edge) => {
          return (
            <li>
              <Link to={`/works/${edge.node.slug}`}>
                <h2>{edge.node.title}</h2>
              </Link>
            </li>
          )
        })}
      </ol>
    </Layout>
  );
}
export default WorksPage
