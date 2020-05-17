import React, { Component } from 'react';

class Footer extends Component {
  render() {
    return (
      <div>
        {/* // <div className='fixed-bottom'>
      //   <footer className='footer'>
      //     <div className='container'>
      //       <span id='footer-text'>
      //         React Playground &nbsp;<i id='react' class='fab fa-react'></i>
      //       </span>
      //     </div>
      //   </footer> */}

        <div class='footer'>
          <span id='footer-text'>
            React Playground &nbsp;<i id='react' class='fab fa-react'></i>
          </span>
        </div>
      </div>
    );
  }
}

export default Footer;
