import React, { Component } from 'react'
import Link from 'gatsby-link'
import { Container, Menu, Visibility, Segment, Image, Dropdown, Icon } from "semantic-ui-react"

import logo from "../images/logo.svg"

const menuItems = [
  { name: "Arbore", path: "/", exact: true},
  { name: "Releases", path: "/releases/", exact: true },
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
        <Menu.Item>
          <img src={logo}/>
        </Menu.Item>
        { ::this.itemsLeft() }
      </Menu>
    )
  }

  normalMenu() {
    return (
      <Menu inverted secondary size='large' style={{}}>
        <Menu.Menu position="left">
          <Menu.Item>
            <img src={logo}/>
          </Menu.Item>
          { ::this.itemsLeft() }
        </Menu.Menu>
        <Menu.Menu position="right">
          { ::this.itemsRight() }
        </Menu.Menu>
      </Menu>
    )
  }

  static buildItem({name, path, exact}, pathname) {
    const active = (exact) ? pathname === path : pathname.startsWith(path)

    return (
      <Menu.Item as={Link} to={path} key={path} active={active}>
        {name}
      </Menu.Item>
    )
  }

  itemsLeft() {
    const { pathname } = this.props.location

    return menuItems.map(item => Header.buildItem(item, pathname))
  }

  itemsRight() {
    return [(
      <Dropdown item text='Language'>
        <Dropdown.Menu>
          <Dropdown.Item>English</Dropdown.Item>
          <Dropdown.Item>Russian</Dropdown.Item>
          <Dropdown.Item>Spanish</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    ),(
      <Menu.Item>
        <a href="https://github.com/MichaelMure/Arbore">
          <Icon name='github' size='big'/>
        </a>
      </Menu.Item>
    )]
  }

  render() {
    const { visible } = this.state

    return (
      <div>
        { visible ? this.fixedMenu() : null}

        <Visibility onBottomPassed={::this.showFixedMenu} onBottomVisible={::this.hideFixedMenu} once={false} style={{ marginBottom: "5px"}}>

          <Segment inverted basic attached='top' style={{padding: 0}}>
            { this.normalMenu() }
          </Segment>

        </Visibility>

      </div>
    )
  }
}
