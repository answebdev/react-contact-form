import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Helmet } from 'react-helmet';

const Success = () => {
  return (
    <div>
      <Helmet>
        <title>Success</title>
      </Helmet>
      <Container fluid>
        <Row>
          <Col md={12}>
            <h2 className='text-center'>Thank you!</h2>
            <p className='text-center'>Your message has been sent.</p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Success;
