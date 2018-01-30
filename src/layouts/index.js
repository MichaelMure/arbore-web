import React from 'react'
import Helmet from 'react-helmet'
import { Segment, Icon, Container, Sidebar, Button } from "semantic-ui-react"
import Footer from "../components/Footer"
import Header from '../components/Header'
import 'semantic-ui-css/semantic.min.css'

const layout = ({children, location}) => (
  <div>
    <Helmet
      title="Gatsby Default Starter"
      meta={[
        { name: 'description', content: 'Sample' },
        { name: 'keywords', content: 'sample, something' },
      ]}
    />
    <Header location={location} />
    { children() }
    <Footer />
  </div>
)

export default layout
