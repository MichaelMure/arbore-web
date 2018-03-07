import React, { Component } from 'react'
import { Accordion, Container, Header, Message } from "semantic-ui-react"

let i = 0
const panels = [
  {
    title: {
      content: <span className='faqtitle'>Is it ready ?</span>,
      key: (i++),
    },
    content: {
      content: <div>
        <p>Yes and no.</p>
        <p>Arbore is working, but not secure yet. Do not use it for sensitive files !</p>
        <p>Encryption will come at a later stage when IPFS is ready.</p>
      </div>,
      key: (i++),
    },
  },
  {
    title: {
      content: <span className='faqtitle'>Why ?</span>,
      key: (i++),
    },
    content: {
      content: <div>
        <p>Communication medium shapes how people interact and by extension how society works.</p>
        <p>Nowadays to communicate and share, people massively use products from companies like Google, Facebook, Dropbox ...</p>
        <p>These products are free and easy to use but the drawback is that you have to give your private life to these companies, which use that to feed you with advertisement. More often than not, governments also have access to all of these databases and can use that to in a way detrimental to society.</p>
        <p>Arbore is an attempt to provide an alternate medium that is free of commercial or private interest, a place where privacy still exist. That doesn't mean that Facebook and Google have to go, but at least there is another way.</p>
        <p>Or maybe you just want to share stuff easily and without limits.</p>
      </div>,
      key: (i++),
    },
  },
  {
    title: {
      content: <span className='faqtitle'>But, doesn't that helps the bad guys ?</span>,
      key: (i++),
    },
    content: {
      content: <div>
        <p>No.</p>
        <p>This is the wrong way to look at this problem. Obviously pedophile are bad. Obviously terrorist are bad. But first of, if the communication medium become dangerous for them, they will find other ways. These peoples have time, motivation and means to do everything offline. So why should we limit freedom for everyone else ? For the terrorism especially, that would mean losing the fight against them.</p>
        <p>If you really want to catch the bad guys, you go on the ground. Having a mass spying system is just way too risky for society. What happen when the guy in charge think it's a good way to track and eliminate political opponent or deviant ? In way too many countries, mass surveillance is used for power abuse. Maybe we should do something about that and prevent it from happening in free societies.</p>

        <Message>"Saying that you don't care about privacy because you have nothing to hide, is like saying that you don't care about freedom of speech because you have nothing to say".<br/>
          -- Edward Snowden</Message>

        <p>For more on the subject, you can watch:
          <ul>
            <li><a href="https://citizenfourfilm.com/">CitizenFour</a>, the story of Edward Snowden</li>
            <li><a href="https://vimeo.com/nothingtohide">Nothing to hide</a>, a documentary about the power of mass surveillance</li>
          </ul>
        </p>
      </div>,
      key: (i++),
    },
  },
  {
    title: {
      content: <span className='faqtitle'>Does that mean I have to be online at the same time as the recipient ?</span>,
      key: (i++),
    },
    content: {
      content: <div>
        <p>Unfortunately that's a yes for now.</p>
        <p>There is way to reduce this problem thought and it will be implemented later.</p>
      </div>,
      key: (i++),
    },
  },
  {
    title: {
      content: <span className='faqtitle'>Why not a mobile app ?</span>,
      key: (i++),
    },
    content: {
      content: <div>
        <p>Arbore is currently a proof of concept where it's possible to iterate, validate and improve ideas. When this work is done, a mobile app would be great to have as well !</p>
      </div>,
      key: (i++),
    },
  },
  {
    title: {
      content: <span className='faqtitle'>I'm concerned by your choice of using Electron and javascript.</span>,
      key: (i++),
    },
    content: {
      content: <div>
        <p>Electron surely have drawbacks, especially in performance. But it was the only realist way to build this project as a one-man team and have a great UI/UX. I know because I tried other ways ;-)</p>
        <p>If this project is successful, why not build another client with another technology with your help ?</p>
      </div>,
      key: (i++),
    },
  },
]

export default class Faq extends Component {

  render() {
    return (
      <Container>
        <Header as='h1'>Frequently asked questions</Header>
        <Accordion styled panels={panels} exclusive={false} />
      </Container>
    )
  }
}
