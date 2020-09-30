import React from 'react'
import Header from './header'
import { Link } from 'gatsby'
import '../styles/index.scss'
import layoutStyles from './layout.module.scss'

const Layout = (props) => {
  return (
    <div className={layoutStyles.container}>
      <Header />
        <div className={layoutStyles.content}>
          {props.children}
        </div>
    </div>
  );
}
export default Layout
