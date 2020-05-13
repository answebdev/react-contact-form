import React from 'react';
import { Helmet } from 'react-helmet';

const About = () => {
  return (
    <div>
      <Helmet>
        <title>About</title>
      </Helmet>
      <div className='content'>
        <h1>About Page</h1>
      </div>
    </div>
  );
};

export default About;
