import React from 'react';
import { Helmet } from 'react-helmet';

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
              it look like readable English. Many desktop publishing packages
              and web page editors now use Lorem Ipsum as their default model
              text, and a search for 'lorem ipsum' will uncover many web sites
              still in their infancy. Various versions have evolved over the
              years, sometimes by accident, sometimes on purpose (injected
              humour and the like).
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
