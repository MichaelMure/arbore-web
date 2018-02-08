import PropTypes from 'prop-types'
import React, { Component } from 'react'
import releaseParser from './src/models/releaseParser'

const API_QUERY = 'https://api.github.com/repos/MichaelMure/Arbore/releases'

class ReleaseProvider extends Component {

  getChildContext() {
    return {
      releases: fetch(API_QUERY)
        .then(response => response.json())
        .then(r => {console.log(r); return r})
        .then(data => new releaseParser(data))
        .catch((err) => { console.log("Error loading github data: ", err)})
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