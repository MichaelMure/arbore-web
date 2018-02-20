// @flow
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import { Button, Container, Grid, Header, Icon, Image, Segment } from "semantic-ui-react"
import ReleaseParser from '../utils/ReleaseParser'
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

  buttonText = 'Download Arbore'
  fallback = <Button as={Link} to='/releases' {...this.buttonOpt}>{this.buttonText}</Button>

  render() {
    const releases: ?ReleaseParser = this.state.releases

    if(!releases) {
      return (
        <Container text>
          <Grid columns={2} stackable>
            <Grid.Column>
              <Image src={logo} size='medium'/>
            </Grid.Column>
            <Grid.Column verticalAlign='middle'>
              <Header as='h1' style={{ fontSize: '4em', fontWeight: 400 }} color='blue'>Arbore</Header>
              <div style={{ fontSize: '16px', lineHeight: '24px' }}>{ this.description }</div>
              <Segment basic>
                <div style={{textAlign: 'center'}}>{ this.fallback }</div>
                <div style={{textAlign: 'center'}}>&nbsp; &#160;</div>
                <div style={{textAlign: 'center'}}>
                  { this.voidWindows }
                  { this.voidMacos }
                  { this.voidLinux }
                </div>
              </Segment>
            </Grid.Column>
          </Grid>
        </Container>
      )
    }

    const current = releases.current

    let button, platform
    switch (getOS()) {
      case 'windows':
        button = current.windowsAssets.length > 0
          ? <Button as='a' href={current.windowsAssets[0].browserDownloadUrl} {...this.buttonOpt}>{this.buttonText}</Button>
          : this.fallback
        platform = 'Windows'
        break
      case 'osx':
        button = current.macosAssets.length > 0
          ? <Button as='a' href={current.macosAssets[0].browserDownloadUrl} {...this.buttonOpt}>{this.buttonText}</Button>
          : this.fallback
        platform = 'MacOS'
        break
      case 'linux':
        button = this.fallback
        platform = 'Linux'
        break
      case 'android':
        button = this.fallback
        platform = 'Android is not supported yet'
        break
      case 'ios':
        button = this.fallback
        platform = 'iOS is not supported yet'
        break
      default:
        button = this.fallback
        break
    }

    return (
      <Container text>
        <Grid columns={2} stackable>
          <Grid.Column>
            <Image src={logo} size='medium'/>
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