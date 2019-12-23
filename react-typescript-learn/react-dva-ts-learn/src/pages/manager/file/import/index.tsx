import * as React from 'react';
// import { Location, History } from 'history';
import ImportFile from '../../../../containers/file/ImportFile';

import './index.less';

interface ImportFilePageProps {}

export default class ImportFilePage extends React.Component<ImportFilePageProps, {}> {
  public render() {
    // console.log('ImportFilePage :: ', this.props);
    return (
      <div className="import-file-container-page">
        <ImportFile />
        <p>ImportFilePage</p>
      </div>
    );
  }
}
