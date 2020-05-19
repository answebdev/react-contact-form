import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Helmet } from 'react-helmet';
import skirt from '../../img/skirt.png';

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Reach Playground</title>
        <style type='text/css'>{`
        * {
          box-sizing: border-box;
          margin: 0;
          padding: 0;
        }

        body {
          background-color: #3e63bd;
        }

        html {
          height: 100%;
          width: 100%;
        }

        .container {
          max-width: 100%;
          height: 100%;
          margin: auto;
          overflow: hidden;
          padding: 0;
        }
        
        .navbar,
        .footer {
          display:none;
        }

        h1 {
          font-family: 'Dancing Script', cursive;
          color: #ffffff;
        }

        header {
          align-items: center;
          display: flex;
          font-size: 18px;
          height: 100vh;
          justify-content: center;
          overflow: hidden;
          position: relative;
          text-align: center;
          transform-style: preserve-3d;
          perspective: 100px;
        }
      
        #welcome-msg {
          // font-size: 50px;
          border: 1px solid #ffffff;
          padding: 10px;
          border-radius: 5px;
        }

        #welcome-msg:hover {
          background: rgba(255,255,255,0.5);
        }

        #welcome:hover {
          color: #3e63bd;
        }
    `}</style>
      </Helmet>
      <Container className='container' fluid>
        <Row>
          <Col md={12}>
            {/* Put background image file in Header: */}
            <header
              style={{
                backgroundImage: `url(${skirt})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            >
              <h1 id='welcome-msg'>
                <a id='welcome' href='/blog'>
                  Welcome
                </a>
              </h1>
            </header>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Home;
