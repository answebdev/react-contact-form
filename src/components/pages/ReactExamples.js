import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import { Container, Col, Row } from 'react-bootstrap';

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
