import React, { FunctionComponent } from 'react';
import { Link } from 'react-router-dom';

import { EXAMPLE_URL } from '../../config';

const HomePage: FunctionComponent = () => {
  return (
    <div>
      <Link to="/">home</Link>
      <Link to="/article">article</Link>
      <pre>
        <code>{EXAMPLE_URL}</code>
      </pre>
    </div>
  );
};
export default HomePage;
