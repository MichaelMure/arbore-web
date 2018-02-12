import React from 'react'
import { Container, Grid, Header, Icon, Image, Message, Segment } from "semantic-ui-react"
import Download from '../components/Download'

import logo from "../images/logo.svg"

const Argument = ({icon, header, text}) => (
  <Grid.Column>
    <Header><Icon size='huge' name={icon} />{header}</Header>
    <div style={{ fontSize: '16px', lineHeight: '24px' }}>{ text }</div>
  </Grid.Column>
)

const IndexPage = () => (
  <div>

    <Segment vertical basic>
      <Container>
        <Message
          icon="announcement"
          header="Work in progress"
          content="This software is still being built and is not ready for prime time. Any feedback and help is welcome !"
        />
      </Container>
    </Segment>

    <Download/>

    <Segment className="stripe" vertical>
      <Container>
        <Grid stackable>

          <Grid.Row>
            <Grid columns={3} divided stackable>
              <Argument icon='privacy' header='Privacy' text='Keep your private communications private. Stop being the product, be yourself.' />
              <Argument icon='check' header='Convenient & efficient' text='No number or size limits. Share as much and anything you want.' />
              <Argument icon='code' header='Free & Open Source' text='Free as in free beer, Free as in free speech.' />
            </Grid>
          </Grid.Row>

          <Grid.Row>
            <Grid columns={3} divided stackable>
              <Argument icon='laptop' header='Multi-platform' text='Windows, MacOS and Linux are supported.' />
              <Argument icon='bug' header='Bug free' text='No spyware, No ads, No user tracking.' />
              <Argument icon='plug' header='Decentralized' text='Direct transfer from the sender to the recipient. You keep the control.' />
            </Grid>
          </Grid.Row>

        </Grid>
      </Container>
    </Segment>

    <Segment className="stripe" vertical>
      <Container>
        <Grid columns={2}>
          <Grid.Row>
            <Grid.Column>
              <Image src={logo} />
            </Grid.Column>
            <Grid.Column verticalAlign="middle">
              <Header as='h3' style={{ fontSize: '2em' }}>I shouldn't have gone with their competitor.</Header>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                laboris nisi ut aliquip ex ea commodo consequat.
              </p>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
    </Segment>

    <Segment className="stripe" vertical>
      <Container>
        <Grid columns={2}>
          <Grid.Row>
            <Grid.Column verticalAlign="middle">
              <Header as='h3' style={{ fontSize: '2em' }}>I shouldn't have gone with their competitor.</Header>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                laboris nisi ut aliquip ex ea commodo consequat.
              </p>
            </Grid.Column>
            <Grid.Column>
              <Image src={logo} />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
    </Segment>

  </div>
)

export default IndexPage
