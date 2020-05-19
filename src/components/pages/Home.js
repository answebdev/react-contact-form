import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Helmet } from 'react-helmet';

const Success = () => {
  return (
    <div>
      <Helmet>
        <title>React Playground</title>
      </Helmet>
      <Container fluid>
        <Row>
          <Col md={12}>
            <h3 className='text-center'>Landing Page</h3>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Success;
