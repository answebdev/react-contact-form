import React from 'react';
import { Helmet } from 'react-helmet';
import { SRLWrapper } from 'simple-react-lightbox';
import girlSmall from '../../img/girl-small.jpg';
import childSmall from '../../img/child-small.jpg';
import girl from '../../img/girl.jpg';
import child from '../../img/child.jpg';
import ModalImage from 'react-modal-image';

const About = () => {
  return (
    <div>
      <Helmet>
        <title>About</title>
      </Helmet>
      <div className='container'>
        <div className='row'>
          <div className='col-md-12'>
            <h1>About Page</h1>
          </div>
        </div>
        <div className='row'>
          <div className='col-md-6'>
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
          </div>

          <div className='col-md-6'>
            <img id='girl' src={girlSmall} alt='Girl' />
            <p>
              What is Lorem Ipsum? Lorem Ipsum is simply dummy text of the
              printing and typesetting industry. Lorem Ipsum has been the
              industry's standard dummy text ever since the 1500s, when an
              unknown printer took a galley of type and scrambled it to make a
              type specimen book. It has survived not only five centuries, but
              also the leap into electronic typesetting, remaining essentially
              unchanged. It was popularised in the 1960s with the release of
              Letraset sheets containing Lorem Ipsum passages, and more recently
              with desktop publishing software like Aldus PageMaker including
              versions of Lorem Ipsum. Why do we use it? It is a long
              established fact that a reader will be distracted by the readable
              content of a page when looking at its layout. The point of using
              Lorem Ipsum is that it has a more-or-less normal distribution of
              letters, as opposed to using 'Content here, content here', making
              it look like readable English.
            </p>
          </div>
        </div>

        <br />
        <br />

        <div className='row'>
          <div className='col-md-12'>
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
          </div>
        </div>

        <div className='row'>
          <div className='col-md-6'>
            <SRLWrapper>
              <a
                href='https://images.pexels.com/photos/69494/pexels-photo-69494.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
                data-attribute='SRL'
              >
                <img src={girlSmall} alt='Girl' />
              </a>
            </SRLWrapper>
          </div>

          <div className='col-md-6'>
            <SRLWrapper>
              <a
                href='https://images.pexels.com/photos/3850036/pexels-photo-3850036.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500'
                data-attribute='SRL'
              >
                <img src={childSmall} alt='Girl' />
              </a>
            </SRLWrapper>
          </div>
        </div>

        <br />
        <br />
        <div className='row'>
          <div className='col-md-12'>
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
          </div>
        </div>

        <div className='row'>
          <div className='col-md-6'>
            <ModalImage small={girlSmall} large={girl} alt='Girl' />
          </div>
          <div className='col-md-6'>
            <ModalImage small={childSmall} large={child} alt='Child' />
          </div>
        </div>

        <br />
        <br />
        <br />
        <br />
      </div>
    </div>
  );
};

export default About;
