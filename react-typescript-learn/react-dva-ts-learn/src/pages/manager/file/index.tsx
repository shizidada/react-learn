import * as React from 'react';
// import { Location, History } from 'history';
import FileTable from '../../../containers/file/FileTable';

import './index.less';

interface FileListPageProps {}

export default class FileListPage extends React.Component<FileListPageProps, {}> {
  public render() {
    // console.log('FileListPageProps :: ', this.props);
    return (
      <div className="file-list-page">
        <div className="file-list-table">
          <FileTable />
        </div>
      </div>
    );
  }
}
