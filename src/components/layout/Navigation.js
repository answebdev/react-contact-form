import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
// import logo from '../layout/react-logo.png';

const Navigation = ({ title }) => {
  return (
    <Fragment>
      <div className='navbar bg-primary'>
        <a href='/'>
          <p className='nav-title'>
            {/* <img id='app-logo' src={logo} alt='React Logo' />
            &nbsp; */}
            {title}
          </p>
        </a>
        <div id='links'>
          <ul>
            <li>
              <Link to='/'>Home</Link>
            </li>
            <li>
              <Link to='/about'>About</Link>
            </li>
            <li>
              <Link to='/contact'>Contact</Link>
            </li>
          </ul>
        </div>
      </div>
    </Fragment>
  );
};

Navigation.defaultProps = {
  title: 'React Playground',
};

export default Navigation;

// NAVBAR WITH HAMBURGER COLLAPSE:

// import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
// import { Navbar, Nav } from 'react-bootstrap';
// import Scroll from 'react-scroll';

// export class Navigation extends Component {
//   render() {
//     return (
//       <div className='header'>
//         <Navbar className='navbar-dark' collapseOnSelect expand='lg'>
//           <Navbar.Brand
//             id='app-name'
//             onSelect={() =>
//               Scroll.scrollTo('home', {
//                 smooth: true,
//                 offset: -70,
//                 duration: 500,
//               })
//             }
//           >
//             <span>
//               <a id='brand-link' href='/'>
//                 Practice React App
//               </a>{' '}
//             </span>
//           </Navbar.Brand>
//           <Navbar.Toggle aria-controls='responsive-navbar-nav' />
//           <Navbar.Collapse id='responsive-navbar-nav'>
//             <Nav className='ml-auto'>
//               <Link
//                 className='nav-link'
//                 to='/'
//                 style={{
//                   paddingLeft: '.5rem',
//                   paddingRight: '.5rem',
//                 }}
//               >
//                 Home
//               </Link>
//               <Link
//                 className='nav-link'
//                 to='/contact'
//                 style={{
//                   paddingLeft: '.5rem',
//                   paddingRight: '.5rem',
//                 }}
//               >
//                 Contact
//               </Link>
//               <Link
//                 className='nav-link'
//                 to='/about'
//                 style={{
//                   paddingLeft: '.5rem',
//                   paddingRight: '.5rem',
//                 }}
//               >
//                 About
//               </Link>
//             </Nav>
//           </Navbar.Collapse>
//         </Navbar>
//       </div>
//     );
//   }
// }

// export default Navigation;
