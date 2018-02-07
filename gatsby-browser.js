import PropTypes from 'prop-types'
import React, { Component } from 'react'

const API_QUERY = 'https://api.github.com/repos/MichaelMure/Arbore/releases'

class ReleaseProvider extends Component {

  getChildContext() {
    return {
      releases: fetch(API_QUERY)
        .then(response => response.json())
    }
  }

  render() {
    return this.props.children()
  }
}

ReleaseProvider.childContextTypes = {
  releases: PropTypes.object
}

exports.wrapRootComponent = ({ Root }) => {

  return () => (
    <ReleaseProvider>
      {Root}
    </ReleaseProvider>
  )
}