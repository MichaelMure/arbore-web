// @flow
import PropTypes from 'prop-types'
import React, { Component } from 'react'
import ReleaseParser from './ReleaseParser'

const API_QUERY = 'https://api.github.com/repos/MichaelMure/Arbore/releases'

export default class ReleaseProvider extends Component {

  getChildContext() {
    return {
      releases: fetch(API_QUERY)
        .then(response => response.json())
        .then(data => new ReleaseParser(data))
        .catch((err) => { console.log("Error loading github data: ", err); return null})
    }
  }

  render() {
    return this.props.children()
  }
}

ReleaseProvider.childContextTypes = {
  releases: PropTypes.object
}