import React, { Component } from 'react';

class Footer extends Component {
  render() {
    return (
      <div className='fixed-bottom'>
        <footer className='footer'>
          <div className='container'>
            <span id='footer-text'>
              React Playground &nbsp;<i id='react' class='fab fa-react'></i>
            </span>
          </div>
        </footer>
      </div>
    );
  }
}

export default Footer;
