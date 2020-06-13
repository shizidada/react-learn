import React, { FunctionComponent } from 'react';
import { Link } from 'react-router-dom';

import { EXAMPLE_URL } from '../../config';

import Counter from '../../containers/Counter';

import './index.less';

const HomePage: FunctionComponent = () => {
  return (
    <div className="home-page">
      <Link to="/">home</Link>
      <Link to="/article">article</Link>
      <pre>
        <code>{EXAMPLE_URL}</code>
      </pre>

      <Counter />
    </div>
  );
};
export default HomePage;
