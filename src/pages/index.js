import React from 'react'
import { Container, Grid, Header, Icon, Image, Message, Segment } from "semantic-ui-react"
import Download from '../components/Download'

import logo from "../images/logo.svg"

const IndexPage = () => (
  <div>

    <Segment className="stripe" vertical>
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
              <Grid.Column>
                <Header>
                  <Icon size='huge' name='privacy' />
                  Privacy
                </Header>
                qzdniklqzdnklzd
              </Grid.Column>

              <Grid.Column>
                <Header>
                  <Icon size='huge' name='check' />
                  Convenient & efficient
                </Header>
                qzdniklqzdnklzd
              </Grid.Column>

              <Grid.Column>
                <Header>
                  <Icon size='huge' name='code' />
                  Free & Open Source
                </Header>
                qzdniklqzdnklzd
              </Grid.Column>
            </Grid>
          </Grid.Row>

          <Grid.Row>
            <Grid columns={3} divided stackable>
              <Grid.Column>
                <Header>
                  <Icon size='huge' name='laptop' />
                  Multi-plateform
                </Header>
                Windows, MacOS and Linux are supported
              </Grid.Column>

              <Grid.Column>
                <Header>
                  <Icon size='huge' name='check' />
                  Convenient & efficient
                </Header>
                qzdniklqzdnklzd
              </Grid.Column>

              <Grid.Column>
                <Header>
                  <Icon size='huge' name='bug' />
                  Bug free
                </Header>
                No spyware, No ads, No user tracking.
              </Grid.Column>
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

  </div>
)

export default IndexPage
