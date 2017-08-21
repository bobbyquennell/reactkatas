import React from 'react';
import {Link} from 'react-router-dom';
const Home = function() {
  return (
    <div>
      <h2>this is a home page</h2>
      <Link to="/about">About</Link>
      <br/>
      <br/>
    </div>
  );
};

export default Home;
