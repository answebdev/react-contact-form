import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Helmet } from 'react-helmet';

const Success = () => {
  return (
    <div>
      <Helmet>
        <title>React Playground | Success</title>
      </Helmet>
      <Container fluid>
        <Row>
          <Col md={12}>
            <div id='success-msg'>
              <h2 className='text-center'>Thank you!</h2>
              <p></p>
              <p className='text-center'>Your message has been sent.</p>
              <a class='btn btn-primary' id='error-btn' href='/contact'>
                Back to Form
              </a>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Success;
