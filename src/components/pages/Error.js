import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Helmet } from 'react-helmet';

const Error = () => {
  return (
    <div>
      <Helmet>
        <title>React Playground | Error</title>
      </Helmet>
      <Container fluid>
        <Row>
          <Col md={12}>
            <h1 className='text-center'>404 Page Not Found</h1>
          </Col>
        </Row>
        <br />
        <Row>
          <Col md={12}>
            <p className='text-center'>
              <a class='btn btn-primary' id='error-btn' href='/'>
                <i className='fa fa-home'></i> Take Me Home
              </a>
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Error;
