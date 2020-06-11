import React, { FunctionComponent } from 'react';
import { Link } from 'react-router-dom';

const HomePage: FunctionComponent = () => {
  return (
    <div>
      <Link to="/">home</Link>
      <Link to="/article">article</Link>
    </div>
  );
};
export default HomePage;
