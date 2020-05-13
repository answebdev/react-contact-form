import React from 'react';
import { Helmet } from 'react-helmet';

const Success = () => {
  return (
    <div>
      <Helmet>
        <title>Success</title>
      </Helmet>
      <div className='content'>
        <h2>Thank you!</h2>
        <p>Your message has been sent.</p>
      </div>
    </div>
  );
};

export default Success;
