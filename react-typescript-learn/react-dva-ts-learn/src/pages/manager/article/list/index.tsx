import * as React from 'react';
import { Link } from 'dva/router';

import BraftEditorForm from '../../../../containers/home/BraftEditorForm';

import './index.less';

function ArticlePage() {
  return (
    <div className="article-page-container">
      <Link to="/article/create">article create</Link>
      <p>ArticlePage</p>
      <BraftEditorForm />
    </div>
  );
}

export default ArticlePage;
