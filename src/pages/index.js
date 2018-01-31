import React from 'react'
import Link from 'gatsby-link'
import { Container, Divider, Grid, Header, Icon, Image, Message, Segment } from "semantic-ui-react"

import logo from "../images/logo.svg"

const IndexPage = () => (
  <div>

    <Container>
      <Message
        icon="announcement"
        header="Work in progress"
        content="This software is still being built and is not ready for prime time. Any feedback and help is welcome !"
      />
    </Container>


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

    <Segment inverted>
      <Container>
        <Grid columns={3}>

          <Grid.Column>
            <Grid.Row>
              <Icon circular size='huge' name='users' />
              blaah
            </Grid.Row>
          </Grid.Column>

          <Grid.Column>
            <Grid.Row>
              <Icon circular size='huge' name='users' />
              blaah
            </Grid.Row>
          </Grid.Column>

          <Grid.Column>
            <Grid.Row>
              blaah
            </Grid.Row>
          </Grid.Column>

        </Grid>
      </Container>
    </Segment>

    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <Link to="/page-2/">Go to page 2</Link>

    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut faucibus eros eget turpis imperdiet venenatis. Sed dolor augue, suscipit ut accumsan sit amet, blandit eu arcu. Nam at lacus elementum, luctus turpis ac, auctor velit. Vivamus mattis ipsum ultricies mi porta placerat. Ut non urna vehicula, dapibus neque sed, dapibus est. Nulla a fringilla purus, nec tincidunt lorem. Sed hendrerit ultricies aliquam. Curabitur sapien tellus, pretium a tempor malesuada, cursus non leo.</p>
    <p>Vivamus congue id nisl a consequat. Nulla sit amet molestie turpis, et tincidunt velit. Ut luctus libero mi, vel sodales est dapibus in. Suspendisse potenti. Nulla pretium luctus diam, a eleifend nunc tristique a. Nulla congue malesuada est, sed dictum lacus faucibus blandit. Suspendisse et consectetur magna. Quisque id ante efficitur, laoreet augue euismod, cursus eros.</p>
    <p>Donec ultrices iaculis maximus. Morbi et aliquet dui, in auctor est. Maecenas quis ullamcorper diam. Duis bibendum tincidunt leo ac commodo. Curabitur eget malesuada lacus. Donec ultrices lectus finibus dui sagittis, tempus ornare tellus ornare. Nunc tortor mi, pellentesque at viverra sit amet, lobortis ut dui. Nullam at blandit purus, eu placerat augue. Aliquam leo ante, sodales sed varius a, egestas convallis eros. Praesent nec felis nec leo venenatis ultrices.</p>

    <p>Vivamus luctus nisl erat, ut pharetra erat facilisis vitae. Vivamus et felis non massa mollis vulputate. Cras egestas ullamcorper arcu. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Integer ut tristique lorem. Integer quis molestie dolor. Vestibulum ut enim eget risus dapibus auctor et eu ligula. In ornare neque et leo faucibus volutpat. Donec pharetra at diam nec laoreet. Aliquam et scelerisque felis. In tempus at enim lacinia elementum. Mauris nec auctor arcu.</p>
    <p>Curabitur vitae dignissim diam. Nam a purus eros. Integer ac scelerisque nisi. Praesent aliquet nunc sollicitudin mollis consectetur. Mauris sit amet interdum enim. Vivamus vitae lorem quis magna vulputate tincidunt. Morbi iaculis eget ante sed dapibus. Phasellus eget hendrerit turpis. Integer rutrum ipsum at ornare consectetur. Sed at massa dolor. Duis pharetra viverra velit, eget tempor elit dignissim nec. Sed vestibulum vestibulum augue, a dignissim massa ultricies eu. Suspendisse nec neque vitae dui tincidunt bibendum. Nulla facilisi.</p>
  </div>
)

export default IndexPage
