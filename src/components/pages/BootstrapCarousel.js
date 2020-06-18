import React, { useState } from 'react';
import { Container, Row, Col, Carousel } from 'react-bootstrap';
import { Helmet } from 'react-helmet';
import classroom from '../../img/1.png';
import girlDog from '../../img/2.png';
import skirt from '../../img/3.png';
import drake from '../../img/4.png';
import woman from '../../img/5.png';

const BootstrapCarousel = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <div>
      <Helmet>
        <title>React Playground | Bootstrap Carousel</title>
      </Helmet>
      <Container fluid>
        <Row>
          <Col md={8}>
            <Carousel
              style={{ marginBottom: '20px' }}
              activeIndex={index}
              onSelect={handleSelect}
            >
              <Carousel.Item>
                <img
                  className='d-block w-100'
                  src={classroom}
                  alt='Classroom'
                />
                <Carousel.Caption>
                  <h3>Classroom</h3>
                  <p>Four girls in a classroom.</p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className='d-block w-100'
                  src={girlDog}
                  alt='Girl with Dog'
                />
                <Carousel.Caption>
                  <h3>Girl with Dog</h3>
                  <p>Girl playing with her dog.</p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img className='d-block w-100' src={skirt} alt='Girl Walking' />
                <Carousel.Caption>
                  <h3>Girl Walking</h3>
                  <p>Girl taking a walk outside.</p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img className='d-block w-100' src={drake} alt='John Drake' />
                <Carousel.Caption>
                  <h3>John Drake</h3>
                  <p>John Drake standing in front of a set of fingerprints.</p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img className='d-block w-100' src={woman} alt='Girl Outside' />
                <Carousel.Caption>
                  <h3>Girl Outside</h3>
                  <p>Girl outside in nature.</p>
                </Carousel.Caption>
              </Carousel.Item>
            </Carousel>
          </Col>
          <Col md={4}>
            <h3>Gallery</h3>
            <p style={{ marginBottom: '80px' }}>Enjoy these pictures</p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default BootstrapCarousel;
