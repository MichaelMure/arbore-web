import React, { Component } from 'react'
import Link from 'gatsby-link'
import { Accordion, Container, Header, Icon, Label, Message, Segment, Table } from "semantic-ui-react"
import humanize from "humanize"
import path from 'path'

export default class ReleasePages extends Component {

  renderRelease(release) {
    const date = new Date(Date.parse(release.publishedAt))

    return {
      title: {
        key: `title-${release.url}`,
        content: <span><Label color='blue' content={release.name}/>  {date.toLocaleDateString()} </span>,
      },
      content: {
        key: `content-${release.url}`,
        content: (
          <Segment>
            <Message content={release.body}/>
            { this.renderAssets(release.assets) }
          </Segment>
        ),
      }
    }
  }

  renderAssets(assets) {

    const linux = []
    const windows = []
    const macos = []

    assets.forEach(asset => {
      switch(path.extname(asset.name)) {
        case '.deb':
        case '.AppImage':
        case '.rpm':
          asset.icon = "linux"; asset.os = "Linux"; linux.push(asset); break
        case '.exe':
          asset.icon = "windows"; asset.os = "Windows"; windows.push(asset); break
        case '.dmg':
          asset.icon = "apple"; asset.os = "MacOS"; macos.push(asset); break
        default:
          throw('unrecognized')
      }
    })

    const render = (assets) => {
      return assets.map((asset) => (
        <Table.Row>
          <Table.Cell><Icon name={asset.icon} size="large"/>{asset.os}</Table.Cell>
          <Table.Cell><a href={asset.browserDownloadUrl}>{asset.name}</a></Table.Cell>
          <Table.Cell>{humanize.filesize(asset.size)}</Table.Cell>
          <Table.Cell>{asset.downloadCount}</Table.Cell>
          <Table.Cell textAlign="center"><a href={asset.browserDownloadUrl}><Icon name="download" size="large"/></a></Table.Cell>
        </Table.Row>
      ))
    }

    return (
      <Table basic='very' singleLine>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell/>
            <Table.HeaderCell/>
            <Table.HeaderCell>Size</Table.HeaderCell>
            <Table.HeaderCell>Downloads</Table.HeaderCell>
            <Table.HeaderCell/>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          { render(windows) }
          { render(macos) }
          { render(linux) }
        </Table.Body>
      </Table>
    )
  }

  render() {

    const releases = this.props.data.allGithubRelease.edges.map(edge => edge.node)
    const current = releases.shift()
    const currentDate = new Date(Date.parse(current.publishedAt))

    return (
      <Container>
        <Header>Arbore {current.name} - {currentDate.toLocaleDateString()}</Header>
        <Message content={current.body}/>
        <Container>
          { this.renderAssets(current.assets) }
        </Container>


        <Header>Older releases</Header>
        <Accordion
           fluid
          panels={releases.map(release => this.renderRelease(release))}
        />
      </Container>
    )
  }
}

export const pageQuery = graphql`
  query GithubReleasesQuery {
    allGithubRelease {
      edges {
        node {
          url, body, name, htmlUrl, prerelease, publishedAt
          assets {
            name, size, downloadCount, browserDownloadUrl, 
          }
        }
      }
    }
  }
`
