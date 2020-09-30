import React from 'react'
import { Link, graphql, useStaticQuery } from 'gatsby'
import headerStyles from './header.module.scss'

const Header = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          author
        }
      }
    }
  `)

  return (
    <header className={headerStyles.wrapper}>
      <h1>
        <Link to='/' className={headerStyles.title}>{data.site.siteMetadata.author}</Link>
      </h1>
      <nav className={headerStyles.nav}>
        <ul className={headerStyles.list}>
          <li className={headerStyles.listItem}>
            <Link className={headerStyles.listLink} to='/'>Home</Link>
          </li>
          <li className={headerStyles.listItem}>
            <Link className={headerStyles.listLink} to='/works'>Works</Link>
          </li>
          <li className={headerStyles.listItem}>
            <Link className={headerStyles.listLink} to='/contact'>Contact</Link>
          </li>
          <li className={headerStyles.listItem}>
            <Link className={headerStyles.listLink} to='/about'>About</Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}
export default Header
