import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import { Container, Col, Row, Card, Button, Image } from 'react-bootstrap';
import ScrollAnimation from 'react-animate-on-scroll';
import Fade from 'react-reveal/Fade';
import reactBootstrap from '../../img/react-bootstrap.png';
import lightbox from '../../img/lightbox.png';
import reAnimate from '../../img/re-animate.png';

class Home extends Component {
  render() {
    return (
      <div>
        <Helmet>
          <title>React Playground</title>
        </Helmet>
        <Container fluid>
          <Fade left>
            <h1>Home Page</h1>
            <p>
              Welcome to React Playground. Scroll down to see some of my
              favorite tools and technologies.
            </p>
            <hr />
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
        </Container>
      </div>
    );
  }
}

export default Home;
