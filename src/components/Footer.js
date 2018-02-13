import React, { Component } from 'react'
import Link from 'gatsby-link'
import { Container, Divider, Grid, Header, Image, List, Segment } from "semantic-ui-react"

import logo from "../images/logo.svg"

export default class Footer extends Component {

  render() {
    return (
      <Segment
        inverted
        vertical
        style={{ margin: '5em 0em 0em', padding: '5em 0em' }}
      >
        <Container textAlign='center'>
          <Grid divided inverted stackable centered>
            <Grid.Row>
              <Grid.Column width={3}>
                <Header inverted as='h4' content='Arbore' />
                <List link inverted>
                  <List.Item as={Link} to='releases'>Releases</List.Item>
                  <List.Item as={Link} to='team'>Team</List.Item>
                </List>
              </Grid.Column>
              <Grid.Column width={3}>
                <Header inverted as='h4' content='Contribute' />
                <List link inverted>
                  <List.Item as='a' href='https://github.com/MichaelMure/Arbore'>Source code</List.Item>
                  <List.Item as='a' href='https://github.com/MichaelMure/Arbore/issues'>Report a bug</List.Item>
                  <List.Item as='a' href='https://github.com/MichaelMure/Arbore/blob/master/LICENSE'>License</List.Item>
                </List>
              </Grid.Column>
              <Grid.Column width={3}>
                <Header inverted as='h4' content='Arbore' />
                <p>Brought to you by the internet's peoples.</p>
              </Grid.Column>
            </Grid.Row>
          </Grid>

          {/*<Divider inverted section />*/}
          {/*<Image*/}
            {/*centered*/}
            {/*size='mini'*/}
            {/*src={logo}*/}
          {/*/>*/}
          {/*<List horizontal inverted divided link>*/}
            {/*<List.Item as='a' href='#'>Site Map</List.Item>*/}
            {/*<List.Item as='a' href='#'>Contact Us</List.Item>*/}
            {/*<List.Item as='a' href='#'>Terms and Conditions</List.Item>*/}
            {/*<List.Item as='a' href='#'>Privacy Policy</List.Item>*/}
          {/*</List>*/}
        </Container>
      </Segment>
    )
  }
}