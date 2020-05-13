import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap';

export class Navigation extends Component {
  render() {
    return (
      <Fragment>
        <Navbar bg='dark' variant='dark'>
          <Navbar.Brand href='/'>Practice React App</Navbar.Brand>
          <Nav className='mr-auto'>
            <Link to='/'>Home</Link>
            <Link to='/contact'>Contact</Link>
            <Link to='/about'>About</Link>
          </Nav>
        </Navbar>
      </Fragment>
    );
  }
}

export default Navigation;
