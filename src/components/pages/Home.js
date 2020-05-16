import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import { Container, Col, Row, Card, Button } from 'react-bootstrap';
import ScrollAnimation from 'react-animate-on-scroll';
import Fade from 'react-reveal/Fade';

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
              For more information on <strong>React Animate On Scroll,</strong>{' '}
              click
              <a
                className='click'
                href='https://dbramwell.github.io/react-animate-on-scroll/'
                rel='noopener noreferrer'
                target='_blank'
              >
                <span style={{ marginLeft: '-10px' }}> here</span>
              </a>
              <span style={{ marginLeft: '-10px' }}>.</span>
            </p>
          </Fade>
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
