import React from 'react'
import Helmet from 'react-helmet'
import Footer from "../components/Footer"
import Header from '../components/Header'

import 'semantic-ui-css/semantic.min.css'
import '../css/global.css'

export default ({children, location}) => (
  <div>
    <Helmet
      title="Arbore - P2P social file sharing"
      meta={[
        { name: 'description', content: 'Friend-to-friend filesharing app to save the world from dystopia' },
        { name: 'keywords', content: 'P2P, F2F, file sharing, file transfer, social, ipfs' },
      ]}
    />
    <Header location={location} />
      { children() }
    <Footer />
  </div>
)
