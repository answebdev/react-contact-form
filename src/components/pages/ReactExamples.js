import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import { Container, Col, Row } from 'react-bootstrap';
import {
  EmailIcon,
  FacebookIcon,
  LineIcon,
  LinkedinIcon,
  WhatsappIcon,
} from 'react-share';

class ReactExamples extends Component {
  render() {
    return (
      <div>
        <Helmet>
          <title>React Playground | React Examples</title>
        </Helmet>
        <Container fluid>
          <h3>React Examples Page</h3>
          <p>Welcome to the React Examples Page.</p>
          <hr />
          <p>
            <EmailIcon size={32} round={true} style={{ marginRight: '5px' }} />
            <FacebookIcon
              size={32}
              round={true}
              style={{ marginRight: '5px' }}
            />
            <LinkedinIcon
              size={32}
              round={true}
              style={{ marginRight: '5px' }}
            />
            <WhatsappIcon
              size={32}
              round={true}
              style={{ marginRight: '5px' }}
            />
            <LineIcon size={32} round={true} style={{ marginRight: '5px' }} />
          </p>
          <Row>
            <Col md={12}>
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
