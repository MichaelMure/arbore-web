import React, { Component } from 'react'
import { Accordion, Container, Header, Icon, Label, Loader, Message, Segment, Table } from "semantic-ui-react"
import PropTypes from 'prop-types'
import Asset from '../models/Asset'
import Release from '../models/Release'
import ReleaseParser from '../utils/ReleaseParser'

export default class ReleasePages extends Component {

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

  renderRelease(release: Release) {
    return {
      title: {
        key: `title-${release.url}`,
        content: <span><Label color='blue' content={'Release ' + release.name}/>  {release.publishedAt.toLocaleDateString()} </span>,
      },
      content: {
        key: `content-${release.url}`,
        content: (
          <Segment>
            <Message content={
              <div dangerouslySetInnerHTML={release.bodyHtml}/>
            }/>
            { this.renderAssets(release) }
          </Segment>
        ),
      }
    }
  }

  renderAssets(release: Release) {

    const render = (assets: Asset[]) => {
      return assets.map((asset: Asset) => (
        <Table.Row key={asset.id}>
          <Table.Cell><Icon name={asset.icon} size="large"/>{asset.os}</Table.Cell>
          <Table.Cell><a href={asset.browserDownloadUrl}>{asset.name}</a></Table.Cell>
          <Table.Cell>{asset.humanSize}</Table.Cell>
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
          { render(release.windowsAssets) }
          { render(release.macosAssets) }
          { render(release.linuxAssets) }
        </Table.Body>
      </Table>
    )
  }

  render() {

    const releases : ?ReleaseParser = this.state.releases

    if(!releases || releases.length <= 0) {
      return (
        <Container style={{ margin: '5em 0em 0em', padding: '5em 0em' }}>
          <Loader active inline='centered'>Loading releases information...</Loader>
        </Container>
      )
    }

    const current = releases.current

    return (
      <Container>
        <Header>Arbore {current.name} - {current.publishedAt.toLocaleDateString()}</Header>
        <Message content={
          <div dangerouslySetInnerHTML={current.bodyHtml}/>
        }/>
        <Container>
          { this.renderAssets(current) }
        </Container>


        <Header>Older releases</Header>
        <Accordion
           fluid
          panels={releases.olds.map(release => this.renderRelease(release))}
        />
      </Container>
    )
  }
}

ReleasePages.contextTypes = {
  releases: PropTypes.object
};
