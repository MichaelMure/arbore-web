import React, { Component } from 'react'
import { Accordion, Container } from "semantic-ui-react"

const panels = [
  {
    title: 'title1',
    content: 'content1',
  },
  {
    title: 'title2',
    content: 'content2',
  },
  {
    title: 'title3',
    content: 'content3',
  },
  {
    title: 'title4',
    content: 'content4',
  },
]

export default class Faq extends Component {

  render() {
    return (
      <Container>
        <Accordion styled fluid panels={panels} exclusive={false} />
      </Container>
    )
  }
}