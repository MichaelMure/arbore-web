import React, { Component } from 'react'
import Link from 'gatsby-link'
import { Container, Menu, Visibility, Segment, Image, Dropdown } from "semantic-ui-react"

const menuItems = [
  { name: "Arbore", path: "/", exact: true},
  { name: "About", path: "/about/", exact: true },
  { name: "Team", path: "/team/", exact: true },
]

export default class Header extends Component {

  props: {
    location: {
      pathname: string
    },
    children: any
  }

  state = {}

  hideFixedMenu() { this.setState({ visible: false }) }

  showFixedMenu() { this.setState({ visible: true }) }

  fixedMenu() {
    return (
      <Menu fixed='top' size='large'>
        <Container>
          <Image src="logo.svg" size="mini" verticalAlign="middle" />
          { ::this.itemsLeft() }
        </Container>
      </Menu>
    )
  }

  normalMenu() {
    return (
      <Container>
        <Menu inverted pointing secondary size='large'>
          <Menu.Menu  position="left">
            <Image src="logo.svg" size="mini" verticalAlign="middle" />
            { ::this.itemsLeft() }
          </Menu.Menu>
          <Menu.Menu  position="right">
            { ::this.itemsRight() }
          </Menu.Menu>
        </Menu>
      </Container>
    )
  }

  static buildItem({name, path, exact}, pathname) {
    const active = (exact) ? pathname === path : pathname.startsWith(path)

    return (<Menu.Item
        as={Link}
        to={path}
        key={path}
        active={active}
      >
        {name}
      </Menu.Item>
    )
  }

  itemsLeft() {
    const { pathname } = this.props.location

    return menuItems.map(item => Header.buildItem(item, pathname))
  }

  itemsRight() {
    return (
      <Dropdown item text='Language'>
        <Dropdown.Menu>
          <Dropdown.Item>English</Dropdown.Item>
          <Dropdown.Item>Russian</Dropdown.Item>
          <Dropdown.Item>Spanish</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    )
  }

  render() {
    const { visible } = this.state

    return (
      <div>
        { visible ? this.fixedMenu() : null}

        <Visibility onBottomPassed={::this.showFixedMenu} onBottomVisible={::this.hideFixedMenu} once={false} style={{ marginBottom: "5px"}}>

          <Segment inverted textAlign='center' vertical>
            { this.normalMenu() }
          </Segment>

        </Visibility>

      </div>
    )
  }
}
