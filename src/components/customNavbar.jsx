import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Nav, NavItem, Navbar } from 'react-bootstrap';

export default class CustomNavbar extends Component {
  render() {
    return (
      <div>
        <Navbar inverse collapseOnSelect>
          <Navbar.Header>
            <Navbar.Brand>
              <Link to='/'> React-Bootstrap </Link>
            </Navbar.Brand>
            <Navbar.Toggle />
          </Navbar.Header>
          <Nav pullRight>
            <NavItem eventKey={1} componentClass={Link} to='/' href='/' >
              Home
            </NavItem>
            <NavItem eventKey={2} componentClass={Link} to='/about' href='/about'>
              About
            </NavItem>
            <NavItem eventKey={3} componentClass={Link} to='/news' href='/news'>
              News
            </NavItem>
          </Nav>
        </Navbar>
      </div>
    )
  }
}