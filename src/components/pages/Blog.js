import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import {
  Container,
  Col,
  Row,
  Card,
  Button,
  Image,
  Form,
  ListGroup,
} from 'react-bootstrap';
import ScrollAnimation from 'react-animate-on-scroll';
import Fade from 'react-reveal/Fade';
import reactBootstrap from '../../img/react-bootstrap.png';
import reAnimate from '../../img/re-animate.png';
import animateCSS from '../../img/animate-css.png';
import lightbox from '../../img/lightbox.png';
import reactSpring from '../../img/react-spring.png';
import scroll from '../../img/scroll-button.png';
import rocket from '../../audio/rocket.mp3';
// import arrow from '../../img/up-arrow.png';
// import ScrollToTop from 'react-scroll-up';

import ScrollUpButton from 'react-scroll-up-button';

// import { InlineReactionButtons } from 'sharethis-reactjs';
import { InlineShareButtons } from 'sharethis-reactjs';
// import { StickyShareButtons } from 'sharethis-reactjs';
// import { InlineFollowButtons } from 'sharethis-reactjs';

// Logic for Dark and Light Modes
function night(e) {
  e.preventDefault();
  const nightMode = document.getElementById('root');
  nightMode.style.backgroundColor = '#181e24';
  nightMode.style.color = '#76808a';
  document.getElementById('all').style.color = '#22262a';
  document.querySelector('h3').style.color = '#fefefe';
  document.getElementById('beautiful').style.color = '#fefefe';
}

function day(e) {
  e.preventDefault();
  const dayMode = document.getElementById('root');
  dayMode.style.backgroundColor = '#ffffff';
  dayMode.style.color = '#2b2f32';
  document.getElementById('all').style.color = '#2b2f32';
  document.querySelector('h3').style.color = '#2b2f32';
  document.getElementById('beautiful').style.color = '#2b2f32';
}

// RADIO BUTTONS
// classList Property - Note: CSS styles are in this file using React Helmet,
// but they can also be put in App.css (which is actually better)
// To add a CSS class (or classes) to an element (#myDIV)
function darkBtn() {
  document.getElementById('myDIV').style.display = 'block';
  document
    .getElementById('myDIV')
    .classList.add('mystyle', 'anotherClass', 'thirdClass');
}

// To remove a CSS class (or classes) from an element (#myDIV)
function lightBtn() {
  document.getElementById('myDIV').style.display = 'none';
  document
    .getElementById('myDIV')
    .classList.remove('mystyle', 'anotherClass', 'thirdClass');
}

// You can also toggle a CSS class (or classes) (i.e. add a class if it's not there; remove a class if it's there)
// In this example, only one CSS class is being toggled: 'newClassName' (see CSS for the styles for this class)
function toggleBtn() {
  document.getElementById('myDIV').classList.toggle('newClassName');
}

function shoot1(e) {
  e.preventDefault();
  alert('I told you so!');
  e.target.style.fontFamily = 'Dancing Script';
  e.target.style.fontSize = '16px';
  e.target.style.letterSpacing = '1.5px';
  e.target.textContent = 'Thank You';
  // Use textContent Method for just text
  // If you also want HTML in the selected element, then use the innerHTML Method (see lines 47-48)
  // e.target.textContent = 'Thank You';

  const x = document.getElementById('neener');
  x.style.color = '#fff';
  x.style.fontFamily = 'Dancing Script';
  x.style.fontSize = '20px';
  x.style.letterSpacing = '1.5px';
  x.innerHTML = '<h4>Click anywhere on the color brown.</h4>';
  const y = document.getElementById('neener-card');
  y.style.backgroundColor = 'red';
  y.style.boxShadow = '12px 12px 2px 1px rgba(0, 0, 255, .2)';
  // const z = document.getElementById('root');
  // z.style.backgroundColor = 'brown';

  // Can just set style like this w/o having to declare a variable
  // The element 'root' comes from index.html: <div id="root"></div>
  // Using the id of 'root' will change the background of everything to brown, not just the div in this component
  const alles = document.getElementById('root');
  alles.style.backgroundColor = 'brown';

  // Event Listener METHOD 1
  // alles.addEventListener('click', touch);
  // function touch() {
  //   // alert("Dont'touch me!");
  //   alles.style.backgroundColor = '#4682b4';
  //   y.style.boxShadow = '12px 12px 2px 1px #efefef';
  //   document.getElementById('thing').src =
  //     'https://images.pexels.com/photos/2947337/pexels-photo-2947337.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940';
  // }

  // Event Listener METHOD 2: Anonymous Function
  // Written as an anonymous function - the function only called here, since it has no name (anonymous).
  // Therefore, this function cannot be used anywhere else but here.
  // So actually, since the function is only used here, it is better to use an anonymous function here:
  document.getElementById('root').addEventListener('click', function () {
    alles.style.backgroundColor = '#4682b4';
    y.style.boxShadow = '12px 12px 2px 1px #efefef';
    document.getElementById('thing').src =
      'https://images.pexels.com/photos/2947337/pexels-photo-2947337.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940';
  });
}

// Rocket Launch Event Logic
function launch(event) {
  event.preventDefault();

  // Play Rocket Launch Audio when Launch Button is Clicked
  // Source: https://coderrocketfuel.com/article/how-to-play-a-mp3-sound-file-in-react-js
  const audioEl = document.getElementsByClassName('audio-element')[0];
  audioEl.play();
  // End Audio Script

  // Logic for Blast Off Image
  const Image = document.getElementById('blast-off');
  Image.style.display = 'initial';
  // Blast Off Image Fades Out after 2.5 Seconds
  document.getElementById('blast-off').style.animation = 'fadeOut 2.5s';
  // Opacity Set to 0 So Image is Not Visible
  document.getElementById('blast-off').style.opacity = '0';

  // Logic for Rocket Animation
  console.log('Successful launch!');
  document.getElementById('launch').animate(
    [
      // Keyframes
      { transform: 'translateY(0px)' },
      { transform: 'translateY(-600px)' },
    ],
    {
      // Timing Options
      duration: 2000,
      iterations: 1,
      // iterations: Infinity
    }
  );
}
// For some reason, this works
//   function fadeout() {}

//   // Blast Off Image to Disappear After 2.5 Seconds
//   window.onload = function () {
//     // Fade out after 2.5 seconds
//     window.setTimeout(fadeout, 2500);
//   };

//   // function fadeout() {
//   // Fades Out after 2.5 Second
//   // document.getElementById('blast-off').style.opacity = '0';
//   document.getElementById('blast-off').style.animation = 'fadeOut 2.5s';
//   // Opacity Set to 0 So Image is Not Visible
//   document.getElementById('blast-off').style.opacity = '0';
// }

// Empty Website Array
const siteArray = [];

// Add Website Logic
function addSite(event) {
  event.preventDefault();
  console.log('Add Website Button Works');
  // Get URL from the Input Field
  const myUrl = document.getElementById('url').value;
  // Clear Input Field After Adding a URL
  document.getElementById('url').value = '';
  // Get Website Name from the Input Field
  const mySite = document.getElementById('page').value;
  // Clear Input Field After Website Name
  document.getElementById('page').value = '';

  // Disaply Button for Each Website
  const button = document.getElementById('button');
  // Set to Default Value with 'initial' so that Display is No Longer 'none'
  button.style.display = 'initial';

  // Add Link to Website to Page
  // const website = 'https://' + myUrl;
  // const website = myUrl || 'https://' + myUrl;
  const website = myUrl;
  const wbtn = document.createElement('a'); // Create an anchor element
  wbtn.href = website; // Set its href
  wbtn.textContent = mySite; // Set its text
  wbtn.target = '_blank'; // Open link in new window

  // Append and Style Button
  document.getElementById('button').appendChild(wbtn);
  // Add Two Line Breaks After Each Button
  button.appendChild(document.createElement('br'));
  button.appendChild(document.createElement('br'));

  // wbtn.style.display = 'inline';
  wbtn.style.fontFamily = 'Oxygen';
  wbtn.style.fontSize = '16px';
  wbtn.style.backgroundColor = '#007bff';
  wbtn.style.color = '#ffffff';
  wbtn.style.border = 'solid 1px #007bff';
  wbtn.style.borderRadius = '4px';
  wbtn.style.padding = '6px 12px';
  wbtn.style.margin = '2.5px';

  // Add New Inputted Website to the Beginning of the Array
  siteArray.unshift(myUrl);
  console.log('Site Array: ' + siteArray);
  console.table(siteArray);
  // Stop Submission
  return false;
}

function deleteEntry(event) {
  event.preventDefault();
  document.getElementById('button').remove();

  // const deleteAction = document.getElementById('button');
  // deleteAction.remove();
}

// To Do Logic
// Empty Array
const todoArray = [];

function todo(event) {
  // Prevent page from reloading each time Submit event is triggered
  event.preventDefault();
  console.log('Add Task Button Works');
  // Get Todo Item from the Input Field
  const myTask = document.getElementById('item').value;
  // Clear Input Field After Adding a Todo
  document.getElementById('item').value = '';

  // Display List Group Item for Each Todo
  const listGroup = document.getElementById('list-group');
  // Set to Default Value with 'initial' so that ListGroup Display is No Longer 'none'
  listGroup.style.display = 'initial';

  // Add Text of Todo to List Group Item
  const para = document.createElement('ListGroup.Item');
  para.innerHTML = myTask + '<br>';
  document.getElementById('myTodo').appendChild(para);

  // Add New Inputted Item to the Beginning of the Array
  todoArray.unshift(myTask);
  console.log('Array: ' + todoArray);
  // Stop Submission
  return false;
}

class Blog extends Component {
  // componentDidMount() {
  //   const audioEl = document.getElementsByClassName('audio-element')[0];
  //   audioEl.play();
  // }
  // Button 1 Event
  // shoot1(e) {
  //   e.preventDefault();
  //   alert('I told you so!');
  // }

  // Button 2 Event
  shoot2(e) {
    e.preventDefault();
    const answer = prompt('Are you a man or a mouse?');
    if (answer === 'man') {
      alert('Good job!');
    } else {
      if (answer !== 'man') {
        alert('Wrong answer...');
      }
    }
  }

  // Button 3 Event
  shoot3(e) {
    e.preventDefault();
    const choice = window.confirm('Do you want to play?');
    if (choice === true) {
      const guess = prompt(
        'Okay great! Guess the number. Choose a number between 1 and 10.'
      );
      if (guess === '7') {
        alert('Congratulations! You win. Bye!');
      } else {
        if (guess !== '7') {
          alert('Nope. Try again.');
        }
      }
    } else {
      if (choice !== true) {
        alert('Okay, bye!');
      }
    }
  }

  render() {
    return (
      <div id='all'>
        <Helmet>
          <title>React Playground | Blog</title>
          <style type='text/css'>{`

        .mystyle {
          display: block;
          width: 500px;
          padding: 15px;
          border: 1px solid black;
          border-radius: 4px;
        }

        .anotherClass {
          background-color: coral;
          color: white;
        }

        .thirdClass {
          text-transform: uppercase;
          text-align: center;
          font-size: 25px;
        }

        #myDIV {
          display: none;
        }

        .newClassName {
          background-color: #4682b4;
          color: white;
        }

        .footer {
          bottom: -5px;
        }

        .fa-trash-alt:hover,
        .fa-pencil-alt:hover {
          color: #007bff;
        }

    `}</style>
        </Helmet>
        <Container fluid>
          <Fade left>
            <h3>Blog Page</h3>
            <p>
              Welcome to the React Playground Blog Page. Scroll down to see some
              of my favorite tools and technologies. For random JavaScript, go
              down to the
              <a href='#beautiful' className='click'>
                <span style={{ marginLeft: '-10px' }}> Beautiful Nothing </span>
              </a>
              <span style={{ marginLeft: '-10px' }}>section below</span>.
            </p>
            <div
              style={{
                display: 'flex',
                flexWrap: 'nowrap',
              }}
            >
              <Button
                id='moon'
                onClick={night}
                style={{ marginRight: '10px', borderRadius: '50%' }}
                variant='outline-primary'
              >
                <i class='fas fa-moon'></i>
              </Button>
              <Button
                id='sun'
                onClick={day}
                style={{ clear: 'both', borderRadius: '50%' }}
                variant='outline-primary'
              >
                <i class='fas fa-sun'></i>
              </Button>
            </div>
            <hr />

            <InlineShareButtons
              config={{
                alignment: 'left', // alignment of buttons (left, center, right)
                color: 'social', // set the color of buttons (social, white)
                enabled: true, // show/hide buttons (true, false)
                font_size: 16, // font size for the buttons
                labels: 'cta', // button labels (cta, counts, null)
                language: 'en', // which language to use (see LANGUAGES)
                networks: [
                  // which networks to include (see SHARING NETWORKS)
                  'facebook',
                  'twitter',
                  'linkedin',
                  'pinterest',
                  'email',
                  'sharethis',
                ],
                padding: 12, // padding within buttons (INTEGER)
                radius: 4, // the corner radius on each button (INTEGER)
                show_total: true,
                size: 40, // the size of each button (INTEGER)

                // OPTIONAL PARAMETERS
                url: 'https://www.sharethis.com', // (defaults to current url)
                image: 'https://bit.ly/2CMhCMC', // (defaults to og:image or twitter:image)
                description: 'custom text', // (defaults to og:description or twitter:description)
                title: 'custom title', // (defaults to og:title or twitter:title)
                message: 'custom email text', // (only for email sharing)
                subject: 'custom email subject', // (only for email sharing)
                username: 'custom twitter handle', // (only for twitter sharing)
              }}
            />
            <br />

            <Row>
              <Col md={12}>
                <Form.Group as={Row}>
                  <Col sm={10}>
                    <Form.Check
                      id='dark-btn'
                      onClick={darkBtn}
                      type='radio'
                      label='Show Peek-a-Boo'
                      name='formHorizontalRadios'
                      // id='formHorizontalRadios1'
                    />
                    <Form.Check
                      id='light-btn'
                      onClick={lightBtn}
                      type='radio'
                      label='Hide Peek-a-Boo'
                      name='formHorizontalRadios'
                      // id='formHorizontalRadios2'
                    />
                    <br />
                    <Button
                      id='toggle-btn'
                      onClick={toggleBtn}
                      variant='outline-primary'
                    >
                      <i class='fas fa-toggle-on'></i> Color Toggle
                    </Button>
                  </Col>
                </Form.Group>

                <div id='myDIV'>Peek-a-Boo!</div>
                <br />
              </Col>
            </Row>
          </Fade>
          <Row>
            <Col md={12}>
              <ScrollAnimation animateIn='bounceInRight'>
                <Card style={{ marginBottom: '40px' }}>
                  {/* <Card.Header>Framework</Card.Header> */}
                  <Card.Body>
                    <Card.Title>
                      <strong>React Bootstrap</strong>
                    </Card.Title>

                    <Image
                      src={reactBootstrap}
                      style={{
                        width: '35%',
                        height: 'auto',
                        float: 'right',
                        marginLeft: '10px',
                      }}
                      fluid
                    />
                    <Card.Text>
                      <p>
                        The most popular front-end framework Rebuilt for React.
                      </p>
                      <p>
                        React-Bootstrap replaces the Bootstrap JavaScript. Each
                        component has been built from scratch as a true React
                        component, without unneeded dependencies like jQuery.
                      </p>
                      <p>
                        As one of the oldest React libraries, React-Bootstrap
                        has evolved and grown alongside React, making it an
                        excellent choice as your UI foundation.
                      </p>
                    </Card.Text>
                    <Button
                      className='button'
                      variant='primary'
                      href='https://react-bootstrap.github.io/'
                      rel='noopener noreferrer'
                      target='_blank'
                      style={{ marginRight: '5px' }}
                    >
                      Enter <i class='far fa-arrow-alt-circle-right'></i>
                    </Button>
                    <Button
                      className='button'
                      variant='primary'
                      href='/blog/bootstrap-carousel'
                      style={{ marginRight: '5px' }}
                    >
                      Carousel <i class='fab fa-react'></i>
                    </Button>
                  </Card.Body>
                </Card>
              </ScrollAnimation>
            </Col>
          </Row>
          <Row>
            <Col md={12}>
              <ScrollAnimation animateIn='bounceInLeft'>
                <Card style={{ marginBottom: '40px' }}>
                  {/* <Card.Header>Framework</Card.Header> */}
                  <Card.Body>
                    <Card.Title>
                      <strong>React Animate On Scroll</strong>
                    </Card.Title>

                    <Image
                      src={reAnimate}
                      style={{
                        width: '35%',
                        height: 'auto',
                        float: 'right',
                        marginLeft: '10px',
                      }}
                      fluid
                    />
                    <Card.Text>
                      <p>
                        React component that provides animations when the user
                        scrolls. It animates elements on scroll with
                        Animate.css. Properties include animateIn, delay, and
                        animateOnce.
                      </p>
                    </Card.Text>
                    <Button
                      className='button'
                      variant='primary'
                      href='https://dbramwell.github.io/react-animate-on-scroll/'
                      rel='noopener noreferrer'
                      target='_blank'
                      style={{ marginRight: '5px' }}
                    >
                      Enter <i class='far fa-arrow-alt-circle-right'></i>
                    </Button>
                    <Button
                      className='button'
                      variant='primary'
                      href='/blog/carousel'
                      style={{ marginRight: '5px' }}
                    >
                      Carousel
                    </Button>
                  </Card.Body>
                </Card>
              </ScrollAnimation>
            </Col>
          </Row>
          <Row>
            <Col md={12}>
              <ScrollAnimation animateIn='bounceInRight'>
                <Card style={{ marginBottom: '40px' }}>
                  {/* <Card.Header>Framework</Card.Header> */}
                  <Card.Body>
                    <Card.Title>
                      <strong>Lightbox</strong>
                    </Card.Title>

                    <Image
                      src={lightbox}
                      style={{
                        width: '35%',
                        height: 'auto',
                        float: 'right',
                        marginLeft: '10px',
                      }}
                      fluid
                    />
                    <Card.Text>
                      <p>
                        The original lightbox script, by Lokesh Dhakar. Eight
                        years later — still going strong!
                      </p>
                      <p>
                        Lightbox is a small javascript library used to overlay
                        images on the current page. It's a snap to set up and
                        works on all modern browsers.
                      </p>
                    </Card.Text>
                    <Button
                      className='button'
                      variant='primary'
                      href='https://lokeshdhakar.com/projects/lightbox2/'
                      rel='noopener noreferrer'
                      target='_blank'
                      style={{ marginRight: '5px' }}
                    >
                      Enter <i class='far fa-arrow-alt-circle-right'></i>
                    </Button>
                    <Button
                      className='button'
                      variant='primary'
                      href='/blog/react-examples'
                      style={{ marginRight: '5px' }}
                    >
                      Examples
                    </Button>
                  </Card.Body>
                </Card>
              </ScrollAnimation>
            </Col>
          </Row>
          <Row>
            <Col md={12}>
              <ScrollAnimation animateIn='bounceInLeft'>
                <Card style={{ marginBottom: '40px' }}>
                  {/* <Card.Header>Framework</Card.Header> */}
                  <Card.Body>
                    <Card.Title>
                      <strong>Animate.css</strong>
                    </Card.Title>

                    <Image
                      src={animateCSS}
                      style={{
                        width: '35%',
                        height: 'auto',
                        float: 'right',
                        marginLeft: '10px',
                      }}
                      fluid
                    />
                    <Card.Text>
                      <p>Just-add-water CSS animations.</p>
                      <p>
                        A library of ready-to-use, cross-browser animations for
                        use in your web projects. Great for emphasis, home
                        pages, sliders, and attention-guiding hints.
                      </p>
                    </Card.Text>
                    <Button
                      className='button'
                      variant='primary'
                      href='https://animate.style/'
                      rel='noopener noreferrer'
                      target='_blank'
                    >
                      Enter <i class='far fa-arrow-alt-circle-right'></i>
                    </Button>
                  </Card.Body>
                </Card>
              </ScrollAnimation>
            </Col>
          </Row>

          <Row>
            <Col md={12}>
              <ScrollAnimation animateIn='bounceInRight'>
                <Card style={{ marginBottom: '40px' }}>
                  {/* <Card.Header>Framework</Card.Header> */}
                  <Card.Body>
                    <Card.Title>
                      <strong>React-Spring</strong>
                    </Card.Title>

                    <Image
                      src={reactSpring}
                      style={{
                        width: '35%',
                        height: 'auto',
                        float: 'right',
                        marginLeft: '10px',
                      }}
                      fluid
                    />
                    <Card.Text>
                      <p>
                        Bring your components to life with simple spring
                        animation primitives.
                      </p>
                      <p>
                        React-spring is a spring-physics based animation library
                        that should cover most of your UI related animation
                        needs. It gives you tools flexible enough to confidently
                        cast your ideas into moving interfaces.
                      </p>
                    </Card.Text>
                    <Button
                      className='button'
                      variant='primary'
                      href='https://www.react-spring.io/'
                      rel='noopener noreferrer'
                      target='_blank'
                    >
                      Enter <i class='far fa-arrow-alt-circle-right'></i>
                    </Button>
                  </Card.Body>
                </Card>
              </ScrollAnimation>
            </Col>
          </Row>

          <Row>
            <Col md={12}>
              <ScrollAnimation animateIn='bounceInLeft'>
                <Card style={{ marginBottom: '40px' }}>
                  {/* <Card.Header>Framework</Card.Header> */}
                  <Card.Body>
                    <Card.Title>
                      <strong>React-Scroll-Up-Button</strong>
                    </Card.Title>

                    <Image
                      src={scroll}
                      style={{
                        width: '35%',
                        height: 'auto',
                        float: 'right',
                        marginLeft: '10px',
                      }}
                      fluid
                    />
                    <Card.Text>
                      <p>React component for a fixed scroll to top button.</p>
                      <p>
                        The default button can be used, or it can be customized
                        to look like any button you want. The component contains
                        all the code neccassary to scroll to the top of the page
                        (or desired position) utilizing easing effects.
                      </p>
                      <p>
                        Different styles have been added that you can copy and
                        paste into this component to quickly acheive a style you
                        can appreciate and fits your websites look and feel.
                      </p>
                    </Card.Text>
                    <Button
                      className='button'
                      variant='primary'
                      href='https://react-scroll-up-button.com/'
                      rel='noopener noreferrer'
                      target='_blank'
                    >
                      Enter <i class='far fa-arrow-alt-circle-right'></i>
                    </Button>
                  </Card.Body>
                </Card>
              </ScrollAnimation>
            </Col>
          </Row>

          <Row>
            <Col md={4}>
              <ScrollAnimation animateIn='flipInY' animateOut='flipOutY'>
                <Card style={{ width: '18rem', marginBottom: '80px' }}>
                  <Card.Img
                    variant='top'
                    src='https://images.pexels.com/photos/1319911/pexels-photo-1319911.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
                  />
                  <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </Card.Text>
                    <Button variant='primary'>Go somewhere</Button>
                  </Card.Body>
                </Card>
              </ScrollAnimation>
            </Col>
            <Col md={4}>
              <ScrollAnimation animateIn='flipInY' animateOut='flipOutY'>
                <Card style={{ width: '18rem', marginBottom: '80px' }}>
                  <Card.Img
                    variant='top'
                    src='https://images.pexels.com/photos/1319911/pexels-photo-1319911.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
                  />
                  <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </Card.Text>
                    <Button variant='primary'>Go somewhere</Button>
                  </Card.Body>
                </Card>
              </ScrollAnimation>
            </Col>
            <Col md={4}>
              <ScrollAnimation animateIn='flipInY' animateOut='flipOutY'>
                <Card style={{ width: '18rem', marginBottom: '80px' }}>
                  <Card.Img
                    variant='top'
                    src='https://images.pexels.com/photos/1319911/pexels-photo-1319911.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
                  />
                  <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </Card.Text>
                    <Button variant='primary'>Go somewhere</Button>
                  </Card.Body>
                </Card>
              </ScrollAnimation>
            </Col>
          </Row>
          <Row>
            <Col md={12}>
              <h3>
                <strong>
                  <span id='beautiful' className='smooth-goto'>
                    {' '}
                    Beautiful Nothing
                  </span>
                </strong>
              </h3>
              <p>
                Welcome to Beautiful Nothing. Here you will find random
                JavaScript things that don't do much.
              </p>
              <hr />
            </Col>
          </Row>
          <Row>
            <Col md={4}>
              <Card style={{ width: '18rem', marginBottom: '80px' }}>
                <Card.Img
                  variant='top'
                  src='https://www.costumesinaustralia.com.au/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/p/p/pp1010g_2.jpg'
                />
                <Card.Body id='neener-card'>
                  <Card.Title>
                    <strong>Thing 1</strong>
                  </Card.Title>
                  <Card.Text id='neener'>
                    Here is some random thing happening. Click on the button and
                    be prepared to be unamazed.
                  </Card.Text>
                  <Button variant='primary' onClick={shoot1}>
                    Click Here
                  </Button>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4}>
              <Card style={{ width: '18rem', marginBottom: '80px' }}>
                <Card.Img
                  variant='top'
                  src='https://http2.mlstatic.com/disfraz-para-nino-cosa-1-y-cosa-2-dr-seuss-talla-4-6-D_NQ_NP_816291-MCO26014998900_092017-F.jpg'
                />
                <Card.Body>
                  <Card.Title>
                    <strong>Thing 2</strong>
                  </Card.Title>
                  <Card.Text>
                    Take part in a completely uneventful conversation. You'll be
                    amazed how much nothing happens.
                  </Card.Text>
                  <Button variant='primary' onClick={this.shoot2}>
                    Click Here
                  </Button>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4}>
              <Card style={{ width: '18rem', marginBottom: '80px' }}>
                <Card.Img
                  id='thing'
                  variant='top'
                  src='https://images.pexels.com/photos/3807758/pexels-photo-3807758.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
                />
                <Card.Body>
                  <Card.Title>
                    <strong>Number Thing</strong>
                  </Card.Title>
                  <Card.Text>
                    This is a game where you have to guess the number. It's
                    easy. Play it now.
                  </Card.Text>
                  <Button variant='primary' onClick={this.shoot3}>
                    Click Here
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          </Row>

          <Row>
            <Col md={6}>
              <Form style={{ marginBottom: '80px' }}>
                <Form.Group>
                  <Form.Label>
                    <strong>Add A Website</strong>
                  </Form.Label>
                  <Form.Control
                    style={{ marginBottom: '10px' }}
                    id='url'
                    placeholder='https://www.example.com'
                  />
                  <Form.Control id='page' placeholder='Name of Site' />
                  <Form.Text className='text-muted'>
                    Add the URL and the name of the website you want to save. A
                    button will appear to the right for easy access.
                  </Form.Text>
                </Form.Group>

                <Button
                  variant='primary'
                  type='submit'
                  onClick={addSite}
                  value='addPage'
                >
                  Add Site
                </Button>
              </Form>
            </Col>
            <Col md={6}>
              <Form.Label>
                <strong>Your Saved Websites</strong>
              </Form.Label>
              <div style={{ marginTop: '5px', marginBottom: '80px' }}>
                <ListGroup
                  id='button'
                  variant='flush'
                  style={{ display: 'none' }}
                >
                  <i
                    onClick={deleteEntry}
                    style={{ float: 'right', marginLeft: '10px' }}
                    className='fas fa-trash-alt'
                    title='Delete'
                  ></i>
                  <i
                    style={{ float: 'right' }}
                    className='fas fa-pencil-alt'
                    title='Edit'
                  ></i>
                </ListGroup>
              </div>
            </Col>
          </Row>

          <Row>
            <Col md={6}>
              <Form style={{ marginBottom: '80px' }}>
                <Form.Group>
                  <Form.Label>
                    <strong>Add Task</strong>
                  </Form.Label>
                  <Form.Control id='item' placeholder='Add Task' />
                  <Form.Text className='text-muted'>
                    Welcome to your very own to do list. Add tasks so that you
                    remember to do them.
                  </Form.Text>
                </Form.Group>

                <Button
                  variant='primary'
                  type='submit'
                  onClick={todo}
                  value='todo'
                >
                  Add Task
                </Button>
              </Form>
            </Col>
            <Col md={6}>
              <Form.Label>
                <strong>List of Things To Do</strong>
              </Form.Label>
              <Card style={{ marginBottom: '80px' }}>
                <Card.Header>
                  <strong>To Do List</strong>
                </Card.Header>
                <ListGroup
                  id='list-group'
                  variant='flush'
                  style={{ display: 'none' }}
                >
                  <ListGroup.Item
                    className='to-do'
                    type='text'
                    id='myTodo'
                  ></ListGroup.Item>
                </ListGroup>
              </Card>
            </Col>
          </Row>

          <Row>
            <Col md={6}>
              <Form style={{ marginBottom: '80px' }}>
                <Image
                  id='launch'
                  style={{ width: '25%', height: 'auto' }}
                  src='https://pngimg.com/uploads/rockets/rockets_PNG13294.png'
                />
              </Form>
            </Col>
            <Col md={6}>
              <Form style={{ marginBottom: '80px' }}>
                <Image
                  id='blast-off'
                  style={{ width: '50%', height: 'auto', display: 'none' }}
                  src='https://i.ya-webdesign.com/images/blast-off-png-13.png'
                />
              </Form>
            </Col>
          </Row>
          <Row>
            <Col md={6}>
              <Form.Text
                style={{ marginBottom: '10px' }}
                className='text-muted'
              >
                Turn sound on for full effect.
              </Form.Text>
              <Form style={{ marginBottom: '80px' }}>
                <Button
                  variant='primary'
                  type='submit'
                  onClick={launch}
                  value='todo'
                >
                  Launch &nbsp;<i class='fas fa-rocket'></i>
                </Button>
                {/* Audio Source: https://www.findsounds.com/ISAPI/search.dll?keywords=rocket */}
                <div>
                  <audio className='audio-element'>
                    {/* <source src='http://77.93.223.93/dod/sound/weapons/rocket2.wav'></source> */}
                    <source src={rocket}></source>
                  </audio>
                </div>
              </Form>
            </Col>
          </Row>

          {/* React-scroll-up (use with my Canva arrow png):
          https://milosjanda.github.io/react-scroll-up/ */}
          {/* <ScrollToTop showUnder={160}>
            <span>
              <img
                src={arrow}
                style={{
                  // width: '10%',
                  width: '3em',
                  height: 'auto',
                  float: 'right',
                }}
                alt=''
              ></img>
            </span>
          </ScrollToTop> */}

          <div>
            <ScrollUpButton
              style={{
                marginBottom: '30px',
                marginRight: '-15px',
                background: '#3e63bd',
                borderRadius: '5px',
              }}
            />
          </div>
        </Container>
      </div>
    );
  }
}

export default Blog;
