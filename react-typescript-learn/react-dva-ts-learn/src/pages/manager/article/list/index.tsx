import * as React from 'react';

import './index.less';
import { Link } from 'dva/router';

function ArticlePage() {
  return (
    <div className="article-page-container">
      <Link to="/article/create">article create</Link>
      <p>ArticlePage</p>
    </div>
  );
}

export default ArticlePage;
