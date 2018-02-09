// @flow
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import { Button, Container, Grid, Header, Icon, Image, Message, Segment } from "semantic-ui-react"
import releaseParser from '../models/releaseParser'
import getOS from '../utils/getos'

import logo from "../images/logo.svg"

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

  iconOpt     = { size: 'big' }
  buttonOpt   = { size: 'massive', primary: true }
  voidLinux   = <Link to="/releases"><Icon name='linux' disabled   {...this.iconOpt}/></Link>
  voidWindows = <Link to="/releases"><Icon name='windows' disabled {...this.iconOpt}/></Link>
  voidMacos   = <Link to="/releases"><Icon name='apple' disabled   {...this.iconOpt}/></Link>
  linuxLink   = <Link to="/releases"><Icon name='linux'            {...this.iconOpt}/></Link>
  windowsLink = (url) => <a href={url}><Icon name='windows'        {...this.iconOpt}/></a>
  macosLink   = (url) => <a href={url}><Icon name='apple'          {...this.iconOpt}/></a>

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

    const current = releases.current

    let button, platform
    const text = 'Download Arbore'
    const fallback = <Button as={Link} to='/releases' {...this.buttonOpt}>{text}</Button>
    switch (getOS()) {
      case 'windows':
        button = current.windowsAssets.length > 0
          ? <Button as='a' href={current.windowsAssets[0].browserDownloadUrl} {...this.buttonOpt}>{text}</Button>
          : fallback
        platform = 'Windows'
        break
      case 'osx':
        button = current.macosAssets.length > 0
          ? <Button as='a' href={current.macosAssets[0].browserDownloadUrl} {...this.buttonOpt}>{text}</Button>
          : fallback
        platform = 'MacOS'
        break
      case 'linux':
        button = fallback
        platform = 'Linux'
        break
      default:
        button = fallback
        break
    }

    return (
      <Container>
        <Grid columns={2}>
          <Grid.Column>
            <Image src={logo} />
          </Grid.Column>
          <Grid.Column verticalAlign='middle'>
            <Header as='h1' style={{ fontSize: '4em', fontWeight: 400 }} color='blue'>Arbore</Header>
            <div style={{ fontSize: '16px', lineHeight: '24px' }}>{ this.description }</div>
            <Segment basic>
              <div style={{textAlign: 'center'}}>
                { button }
              </div>
              <div style={{textAlign: 'center'}}>
                  Version { current.name }{ platform ? ' - ' + platform : ''  }
              </div>
              <div style={{textAlign: 'center'}}>
                  { current.windowsAssets.length > 0
                    ? this.windowsLink(current.windowsAssets[0].browserDownloadUrl)
                    : this.voidWindows
                  }
                  { current.macosAssets.length > 0
                    ? this.macosLink(current.macosAssets[0].browserDownloadUrl)
                    : this.voidMacos
                  }
                  { current.linuxAssets.length > 0
                    ? this.linuxLink
                    : this.voidLinux
                  }
              </div>
            </Segment>
          </Grid.Column>
        </Grid>
      </Container>
    )
  }
}

Download.contextTypes = {
  releases: PropTypes.object
};