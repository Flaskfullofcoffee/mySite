import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'
import Head from '../components/head'

const IndexPage = () => {
  return (
    <Layout>
      <Head title='Home'/>
      <h1>This is the index Page</h1>
      <p>This is the index pages content</p>
    </Layout>
  )
}
export default IndexPage
