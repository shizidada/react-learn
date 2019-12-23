import * as React from 'react';

import './index.less';

export default class HomePage extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {};
  }

  public render() {
    console.log('HomePage :: ', this.props);
    return <div className="home-page-container">Welcome ...</div>;
  }
}
