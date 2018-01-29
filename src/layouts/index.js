import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { Segment, Icon, Container, Sidebar, Button } from "semantic-ui-react"

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
  </div>
)

// const TemplateWrapper = ({ children }) => (
//   <div>
//
//     <Header />
//     <div
//       style={{
//         margin: '0 auto',
//         maxWidth: 960,
//         padding: '0px 1.0875rem 1.45rem',
//         paddingTop: 0,
//       }}
//     >
//       {children()}
//     </div>
//   </div>
// )
//
// TemplateWrapper.propTypes = {
//   children: PropTypes.func,
// }

export default layout
