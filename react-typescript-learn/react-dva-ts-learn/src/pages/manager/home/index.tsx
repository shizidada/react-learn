import * as React from 'react';

import './index.less';
import BraftEditorForm from '../../../containers/home/BraftEditorForm';

export default class HomePage extends React.Component {
  public render() {
    return (
      <div className="home-page-container">
        <BraftEditorForm />
      </div>
    );
  }
}
