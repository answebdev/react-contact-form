import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Helmet } from 'react-helmet';
import { SRLWrapper } from 'simple-react-lightbox';
import girlSmall from '../../img/girl-small.jpg';
import childSmall from '../../img/child-small.jpg';
import girl from '../../img/girl.jpg';
import child from '../../img/child.jpg';
import react from '../../img/react.png';
import whitespace from '../../img/whitespace-hack.pdf';
import ModalImage from 'react-modal-image';

import { useSpring, animated } from 'react-spring';

// React-Spring Example: https://codesandbox.io/embed/rj998k4vmm
const calc = (x, y) => [
  -(y - window.innerHeight / 2) / 20,
  (x - window.innerWidth / 2) / 20,
  1.1,
];
const trans = (x, y, s) =>
  `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`;

const About = () => {
  // React-Spring:
  const [props, set] = useSpring(() => ({
    xys: [0, 0, 1],
    config: { mass: 5, tension: 350, friction: 40 },
  }));

  return (
    <div>
      <Helmet>
        <title>React Playground | About</title>
      </Helmet>
      <Container fluid>
        <Row>
          <Col md={12}>
            <h1>About Page</h1>
          </Col>
        </Row>

        <Row>
          <Col md={6}>
            <div class='iframe-container'>
              <iframe
                title='ESL Toolbox'
                src='https://www.youtube.com/embed/-DEUso_aqbo'
                allow='fullscreen'
                allowfullscreen='allowfullscreen'
                mozallowfullscreen='mozallowfullscreen'
                msallowfullscreen='msallowfullscreen'
                oallowfullscreen='oallowfullscreen'
                webkitallowfullscreen='webkitallowfullscreen'
              ></iframe>
            </div>
            <br />
          </Col>

          <Col md={6}>
            {/* React-Spring */}
            <animated.div
              class='react-spring-card'
              onMouseMove={({ clientX: x, clientY: y }) =>
                set({ xys: calc(x, y) })
              }
              onMouseLeave={() => set({ xys: [0, 0, 1] })}
              style={{ transform: props.xys.interpolate(trans) }}
            />

            <br />

            {/* Lightbox2 Lokesh Dhakar */}
            {/* <a
              href={childSmall}
              data-lightbox='Child'
              alt='Child'
              title='Child'
              class='img-fluid mb-3'
            >
              <img src={childSmall} class='img-fluid mb-3' alt='' />
            </a> */}
            <p>
              <strong>This image uses React-Spring.</strong> React-spring is a
              spring-physics based animation library that should cover most of
              your UI related animation needs. It gives you tools flexible
              enough to confidently cast your ideas into moving interfaces.
              Visit the website
              <a
                className='click'
                href='https://www.react-spring.io/'
                rel='noopener noreferrer'
                target='_blank'
              >
                <span style={{ marginLeft: '-10px' }}> here</span>
              </a>
              <span style={{ marginLeft: '-10px' }}> and</span> this 3D Card
              Effect
              <a
                className='click'
                href='https://codesandbox.io/embed/rj998k4vmm'
                rel='noopener noreferrer'
                target='_blank'
              >
                <span style={{ marginLeft: '-10px' }}> here</span>
              </a>
              <span style={{ marginLeft: '-10px' }}>.</span>
            </p>
          </Col>
        </Row>

        <br />
        <br />

        <Row>
          <Col md={12}>
            <div>
              <a
                src={react}
                href={whitespace}
                rel='noopener noreferrer'
                target='_blank'
              >
                <i class='fas fa-file-download' style={{ color: '#3e63bd' }}>
                  &nbsp;&nbsp;
                  <span style={{ fontFamily: 'Oxygen', color: '#3e63bd' }}>
                    Download The Notes Here
                  </span>
                </i>
              </a>
            </div>
          </Col>
        </Row>
        <br />
        <br />

        <Row>
          <Col md={12}>
            <h3>
              <a
                href='https://simple-react-lightbox.dev/'
                rel='noopener noreferrer'
                target='_blank'
                style={{ color: '#000000' }}
              >
                SimpleReactLightbox
              </a>
            </h3>
          </Col>
        </Row>

        <Row>
          <Col md={6}>
            <SRLWrapper>
              <a
                href='https://images.pexels.com/photos/69494/pexels-photo-69494.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
                data-attribute='SRL'
              >
                <img className='about-pic' src={girlSmall} alt='Girl' />
              </a>
            </SRLWrapper>
          </Col>

          <Col md={6}>
            <SRLWrapper>
              <a
                href='https://images.pexels.com/photos/3850036/pexels-photo-3850036.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500'
                data-attribute='SRL'
              >
                <img className='about-pic' src={childSmall} alt='Child' />
              </a>
            </SRLWrapper>
          </Col>
        </Row>

        <br />
        <br />
        <Row>
          <Col md={12}>
            <h3>
              <a
                href='https://github.com/aautio/react-modal-image'
                rel='noopener noreferrer'
                target='_blank'
                style={{ color: '#000000' }}
              >
                React Modal Image
              </a>
            </h3>
          </Col>
        </Row>

        <Row>
          <Col md={6}>
            <ModalImage
              className='about-pic'
              small={girlSmall}
              large={girl}
              alt='Girl'
            />
          </Col>
          <Col md={6}>
            <ModalImage
              className='about-pic'
              small={childSmall}
              large={child}
              alt='Child'
            />
          </Col>
        </Row>

        <br />
        <br />
        <br />
        <br />
      </Container>
    </div>
  );
};

export default About;
