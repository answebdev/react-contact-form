import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap';

export class Navigation extends Component {
  render() {
    return (
      <Fragment>
        <Navbar
          collapseOnSelect
          className='navbar navbar-expand-lg navbar-dark bg-primary'
        >
          <Navbar.Brand href='/'>Practice React App</Navbar.Brand>
          <Nav className='mr-auto'>
            <Link eventKey='1' to='/'>
              Home
            </Link>
            <Link eventKey='2' to='/contact'>
              Contact
            </Link>
            <Link eventKey='3' to='/about'>
              About
            </Link>
          </Nav>
        </Navbar>
      </Fragment>
    );
  }
}

export default Navigation;
