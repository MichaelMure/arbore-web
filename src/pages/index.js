import React from 'react'
import { Container, Grid, Header, Icon, Image, Message, Segment } from "semantic-ui-react"
import Download from '../components/Download'

import identity from '../images/identity.png'
import contacts from '../images/contacts.png'
import sharing from '../images/sharing.png'
import chat from '../images/chat.png'

const Argument = ({icon, header, text}) => (
  <Grid.Column>
    <Header><Icon size='huge' name={icon} />{header}</Header>
    <div style={{ fontSize: '16px', lineHeight: '24px' }}>{ text }</div>
  </Grid.Column>
)

const Feature = ({inverted, image, header, text}) => (
  <Segment className="stripe" vertical>
    <Container>
      <Grid columns={2} stackable>
        <Grid.Row>
          { !inverted && <Grid.Column><Image src={image}/></Grid.Column> }
          <Grid.Column verticalAlign="middle">
            <Header as='h3' style={{ fontSize: '2em' }}>{header}</Header>
            <p style={{ fontSize: '1.1em' }}>{text}</p>
          </Grid.Column>
          { inverted && <Grid.Column><Image src={image}/></Grid.Column> }
        </Grid.Row>
      </Grid>
    </Container>
  </Segment>
)

const IndexPage = () => (
  <div>

    <Segment basic style={{paddingTop: 0}}>
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
              <Argument icon='check' header='Share without limits' text='No number or size limits. Share as much and anything you want.' />
              <Argument icon='code' header='Free & Open Source' text='Free as in free beer, Free as in free speech.' />
            </Grid>
          </Grid.Row>

          <Grid.Row>
            <Grid columns={3} divided stackable>
              <Argument icon='laptop' header='Multi-platform' text='Windows, MacOS and Linux are supported.' />
              <Argument icon='bug' header='Nasty free' text='No spyware, No ads, No user tracking.' />
              <Argument icon='plug' header='Decentralized' text='Direct transfer from the sender to the recipient. You keep the control.' />
            </Grid>
          </Grid.Row>

        </Grid>
      </Container>
    </Segment>

    <Feature
      image={identity} header='Create your identity'
      text='Your identity is simply a name or pseudonym. You can also add an avatar and a biography.
            You can have as many identity as you want.'
    />

    <Feature
      image={contacts} header='Manage your contacts' inverted
      text='Once you have added your first contact, Arbore will start to suggest new contact you may know so you can
            easily build your contact list.'
    />

    <Feature
      image={sharing} header='Share'
      text='Share files, documents, pictures ... with your contacts, as you would with an email. The difference is
            that there is no limits in size, number or type. It also stay private with strong encryption (not available yet).'
    />

    <Feature
      image={chat} header='Chat' inverted
      text='You can also chat with your contacts directly from the application.'
    />

  </div>
)

export default IndexPage
