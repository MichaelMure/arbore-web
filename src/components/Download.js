// @flow
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import os from 'node.os'
import { Button, Container, Grid, Header, Icon, Image, Message, Segment } from "semantic-ui-react"
import releaseParser from '../models/releaseParser'

export default class Download extends Component {

  constructor(props: P, context: any) {
    super(props, context)

    this.state = {
      releases: null
    }
  }

  componentDidMount() {
    this.context.releases
      .then(releases => this.setState({releases}))
  }

  iconOpt = { size: 'big' }
  voidWindows =  <Icon name='windows' disabled {...this.iconOpt}/>
  voidMacos = <Icon name='apple' disabled {...this.iconOpt}/>
  voidLinux = <Icon name='linux' disabled {...this.iconOpt}/>
  windowsLink = (url) => <a href={url}><Icon name='windows' {...this.iconOpt}/></a>
  macosLink = (url) => <a href={url}><Icon name='apple' {...this.iconOpt}/></a>
  linuxLink = <Link to="/releases"><Icon name='linux' {...this.iconOpt}/></Link>

  description = 'Arbore is a free and open-source file sharing application that enables you to send your pictures, documents, files to your contacts privately and without limits.'

  render() {
    const releases: ?releaseParser = this.state.releases

    if(!releases) {
      return (
        <Container>
          <Header>Arbore</Header>
          { this.description }
        </Container>
      )
    }

    const release = releases.current

    let button
    const text = 'Download Arbore'
    const fallback = <Button as={Link} to='/releases' size='massive'>{text}</Button>
    switch (os.os) {
      case 'win':
        button = release.windowsAssets.length > 0
          ? <Button as='a' href={release.windowsAssets[0].browserDownloadUrl}>{text}</Button>
          : fallback
        break
      case 'osx':
        button = release.macosAssets.length > 0
          ? <Button as='a' href={release.macosAssets[0].browserDownloadUrl}>{text}</Button>
          : fallback
        break
      case 'linux':
      default:
        button = fallback;
        break
    }

    return (
      <Container>
        <Header>Arbore</Header>
          { this.description }
          { button }

          <Container>
            { release.windowsAssets.length > 0
              ? this.windowsLink(release.windowsAssets[0].browserDownloadUrl)
              : this.voidWindows
            }
            { release.macosAssets.length > 0
              ? this.macosLink(release.macosAssets[0].browserDownloadUrl)
              : this.voidMacos
            }
            { release.linuxAssets.length > 0
              ? this.linuxLink
              : this.voidLinux
            }
          </Container>
      </Container>
    )
  }

}

Download.contextTypes = {
  releases: PropTypes.object
};