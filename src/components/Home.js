import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className='home container flex'>
      <h2>Welcome to the Suya Place</h2>
      <Link to='./base'>
        <button className='btn btn-primary'>Customize Your Suya</button>
      </Link>
    </div>
  );
};

export default Home;
