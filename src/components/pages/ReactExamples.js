import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import { Container, Col, Row } from 'react-bootstrap';
import {
  Facebook,
  Twitter,
  Email,
  Google,
  Pinterest,
} from 'react-sharingbuttons';
import 'react-sharingbuttons/dist/main.css';

class ReactExamples extends Component {
  render() {
    const url = 'https://github.com/caspg/react-sharingbuttons';
    const shareText = 'Check this site!';
    return (
      <div>
        <Helmet>
          <title>React Playground | React Examples</title>
        </Helmet>
        <Container fluid>
          <h3>React Examples Page</h3>
          <p>Welcome to the React Examples Page.</p>
          <hr />

          <Row>
            <Col md={12}>
              <div>
                <Facebook url={url} />
                <Twitter url={url} shareText={shareText} />
                <Email url={url} subject='React Examples Page' />
                <Google url={url} />
                <Pinterest url={url} shareText={shareText} mediaSrc={url} />
              </div>
              <br />
              <div id='back-div'>
                <a
                  class='btn btn-primary btn-sm'
                  style={{ float: 'left' }}
                  id='back-btn'
                  href='/blog'
                >
                  <i class='fas fa-arrow-left'></i> Back to Blog
                </a>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default ReactExamples;
