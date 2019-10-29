import * as React from 'react';
import { Location, History } from 'history';
import ImportFile from '../../../containers/file/ImportFile';
import FileTable from '../../../containers/file/FileTable';

import './index.less';

interface ImportFilePageProps {
  localtion: Location<History.LocationState>;
}

export default class ImportFilePage extends React.Component<ImportFilePageProps, {}> {
  public render() {
    console.log('ImportFilePage :: ', this.props);
    return (
      <div className="import-file-page">
        <ImportFile />
        <div className="import-file-table">
          <FileTable />
        </div>
      </div>
    );
  }
}
