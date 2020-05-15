import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap';
import Scroll from 'react-scroll';

export class Navigation extends Component {
  render() {
    return (
      <div className='header'>
        <Navbar collapseOnSelect expand='lg'>
          <Navbar.Brand
            id='app-name'
            onSelect={() =>
              Scroll.scrollTo('home', {
                smooth: true,
                offset: -70,
                duration: 500,
              })
            }
          >
            Practice React App
          </Navbar.Brand>
          <Navbar.Toggle aria-controls='responsive-navbar-nav' />
          <Navbar.Collapse id='responsive-navbar-nav'>
            <Nav className='ml-auto'>
              <Link
                className='nav-link'
                to='/'
                style={{
                  paddingLeft: '.5rem',
                  paddingRight: '.5rem',
                }}
              >
                Home
              </Link>
              <Link
                className='nav-link'
                to='/contact'
                style={{
                  paddingLeft: '.5rem',
                  paddingRight: '.5rem',
                }}
              >
                Contact
              </Link>
              <Link
                className='nav-link'
                to='/about'
                style={{
                  paddingLeft: '.5rem',
                  paddingRight: '.5rem',
                }}
              >
                About
              </Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    );
  }
}

export default Navigation;
