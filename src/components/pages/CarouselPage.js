import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Helmet } from 'react-helmet';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import woman from '../../img/5.webp';
import girl from '../../img/2.webp';
import skirt from '../../img/3.webp';

const CarouselPage = () => {
  return (
    <div>
      <Helmet>
        <title>React Playground | Carousel</title>
        <style type='text/css'>{`
        //  .navbar,
        //  .footer {
        //    display:none;
        //  }
        .carousel .slide .legend {
          // background-color: red;
          // opacity: 0.5;
        }
        // .carousel .slide {
        //   height: 400px;
        // }
    `}</style>
      </Helmet>
      <Container fluid>
        <Row>
          <Col md={8}>
            <Carousel>
              <div>
                <img alt='Girl' src={woman} />
                <p className='legend'>Girl</p>
              </div>
              <div>
                <img
                  alt='Girl with Dog'
                  src='https://images.pexels.com/photos/1198692/pexels-photo-1198692.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
                />
                <p className='legend'>Girl with Dog</p>
              </div>
              <div>
                <img
                  alt='Classroom'
                  src='https://images.pexels.com/photos/710743/pexels-photo-710743.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
                />
                <p className='legend'>Classroom</p>
              </div>
              <div>
                <img alt='Girl' src={girl} />
                <p className='legend'>Girl</p>
              </div>
              <div>
                <img alt='Girl Walking' src={skirt} />
                <p className='legend'>Girl Walking</p>
              </div>
            </Carousel>
          </Col>
        </Row>
        <br />
      </Container>
    </div>
  );
};

export default CarouselPage;
