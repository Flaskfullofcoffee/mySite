import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'
import Head from '../components/head'
import Footer from '../components/footer'
import layoutStyles from '../components/layout.module.scss'

const IndexPage = () => {
  return (
    <Layout>
      <div className={layoutStyles.testWrapper}>
        <div className={layoutStyles.test1}></div>
        <div className={layoutStyles.test2}></div>
        <div className={layoutStyles.test1}></div>
        <div className={layoutStyles.test2}></div>
        <Footer />
      </div>
    </Layout>
  )
}
export default IndexPage
