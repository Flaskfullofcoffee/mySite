
import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'

const Footer = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <footer>
      <p>Twas created by {data.site.siteMetadata.title}, © 2020</p>
    </footer>
  )
}
export default Footer
