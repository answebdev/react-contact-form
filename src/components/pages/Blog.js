import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import { Container, Col, Row, Card, Button, Image } from 'react-bootstrap';
import ScrollAnimation from 'react-animate-on-scroll';
import Fade from 'react-reveal/Fade';
import reactBootstrap from '../../img/react-bootstrap.png';
import reAnimate from '../../img/re-animate.png';
import animateCSS from '../../img/animate-css.png';
import lightbox from '../../img/lightbox.png';
import reactSpring from '../../img/react-spring.png';
import scroll from '../../img/scroll-button.png';
// import arrow from '../../img/up-arrow.png';
// import ScrollToTop from 'react-scroll-up';

import ScrollUpButton from 'react-scroll-up-button';

import skirt from '../../img/skirt.webp';

// import { InlineReactionButtons } from 'sharethis-reactjs';
import { InlineShareButtons } from 'sharethis-reactjs';
import { StickyShareButtons } from 'sharethis-reactjs';
// import { InlineFollowButtons } from 'sharethis-reactjs';

class Blog extends Component {
  render() {
    return (
      <div>
        <Helmet>
          <title>React Playground | Blog</title>
          <style type='text/css'>{`
    
        .footer {
          bottom: -5px;
        }

    `}</style>
        </Helmet>
        <Container fluid>
          <Fade left>
            <h3>Blog Page</h3>
            <p>
              Welcome to the React Playground Blog Page. Scroll down to see some
              of my favorite tools and technologies.
            </p>
            <hr />

            <StickyShareButtons
              config={{
                alignment: 'left', // alignment of buttons (left, right)
                color: 'social', // set the color of buttons (social, white)
                enabled: true, // show/hide buttons (true, false)
                font_size: 16, // font size for the buttons
                hide_desktop: false, // hide buttons on desktop (true, false)
                labels: 'counts', // button labels (cta, counts, null)
                language: 'en', // which language to use (see LANGUAGES)
                min_count: 0, // hide react counts less than min_count (INTEGER)
                networks: [
                  // which networks to include (see SHARING NETWORKS)
                  'linkedin',
                  'facebook',
                  'twitter',
                  'pinterest',
                  'email',
                ],
                padding: 12, // padding within buttons (INTEGER)
                radius: 4, // the corner radius on each button (INTEGER)
                show_total: true, // show/hide the total share count (true, false)
                show_mobile: true, // show/hide the buttons on mobile (true, false)
                show_toggle: true, // show/hide the toggle buttons (true, false)
                size: 48, // the size of each button (INTEGER)
                top: 160, // offset in pixels from the top of the page

                // OPTIONAL PARAMETERS
                url: 'https://silly-feynman.netlify.app/blog', // (defaults to current url)
                image: `url(${skirt})`, // (defaults to og:image or twitter:image)
                description: 'This is the description', // (defaults to og:description or twitter:description)
                title: 'Title here', // (defaults to og:title or twitter:title)
                message: 'Thee message', // (only for email sharing)
                subject: 'custom email subject', // (only for email sharing)
                username: 'custom twitter handle', // (only for twitter sharing)
              }}
            />

            <InlineShareButtons
              config={{
                alignment: 'center', // alignment of buttons (left, center, right)
                color: 'social', // set the color of buttons (social, white)
                enabled: true, // show/hide buttons (true, false)
                font_size: 16, // font size for the buttons
                labels: 'cta', // button labels (cta, counts, null)
                language: 'en', // which language to use (see LANGUAGES)
                networks: [
                  // which networks to include (see SHARING NETWORKS)
                  'whatsapp',
                  'linkedin',
                  'messenger',
                  'facebook',
                  'twitter',
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
