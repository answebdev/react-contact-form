import React from 'react';
import { Helmet } from 'react-helmet';

const Error = () => {
  return (
    <div>
      <Helmet>
        <title>Error</title>
      </Helmet>
      <div className='centered-error'>
        <h1 className='text-center pnf'>404 Page Not Found</h1>
        <br />
        <p className='text-center'>
          <a class='btn btn-primary' id='error-btn' href='/'>
            <i className='fa fa-home'></i> Take Me Home
          </a>
        </p>
      </div>
    </div>
  );
};

export default Error;
