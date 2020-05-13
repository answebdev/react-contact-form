import React from 'react';
import { Helmet } from 'react-helmet';

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Home</title>
      </Helmet>
      <div className='content'>
        <h1>Home Page</h1>
      </div>
    </div>
  );
};

export default Home;
