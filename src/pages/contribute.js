import React from 'react'
import Link from 'gatsby-link'
import { Card, Container, Header, Image, List, Message, Segment } from 'semantic-ui-react'

import btcbch from '../images/btcbch.png'

export default () => (
  <Container>
    <Header as='h1' style={{fontWeight: 400}}>How to contribute to Arbore</Header>
    <Header as='h2'>Give time</Header>

    <p>
    {/*Arbore is currently a team of essentially one person and need to grow */}If you have time, we welcome your help in various areas:
    </p>

    <List bulleted>
      <List.Item><b>Programmers</b>, to help us developing Arbore<br/>

        <List>
          <List.Item as='a' href='https://github.com/MichaelMure/Arbore'>Source code and roadmap</List.Item>
          <List.Item as='a' href='https://gitter.im/Arbore/Lobby'>Gitter chat lobby</List.Item>
          <List.Item as='a' href='https://github.com/MichaelMure/Arbore/issues'>Report a bug</List.Item>
        </List>
      </List.Item>
      <List.Item><b>Designers</b>, to help us for Arbore and this website, on the UI and the UX</List.Item>
      <List.Item><b>Translators</b>, to help translate Arbore and this website when ready</List.Item>
    </List>

    <Header as='h2'>Donate</Header>

    <p>You can also support the development of Arbore by donating using bitcoin or bitcoin cash:</p>

    <p>
      <b>Bitcoin: </b><br/>
      1QDEL5bp9p6p13vgVpAMfHJR1HPu9nhmXK
      <Image src={btcbch} size="small" />
    </p>

    <p>
      <b>Bitcoin Cash:</b><br/>
      1QDEL5bp9p6p13vgVpAMfHJR1HPu9nhmXK
      <Image src={btcbch} size="small" />
    </p>
  </Container>
)
