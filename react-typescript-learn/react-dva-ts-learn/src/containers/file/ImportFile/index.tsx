import React, { Component } from 'react';
import { Dispatch } from 'redux';
import { connect } from 'dva';
// import { UploadChangeParam } from 'antd/lib/upload';
// import { UploadFile } from 'antd/lib/upload/interface';
import { Button } from 'antd';

import ImportFileModal from './ImportFileModal';

import { ConnectState } from '../../../typings';

interface ImportFileProps {}

interface ImportFileState {
  visible: boolean;
}

class ImportFile extends Component<ImportFileProps, ImportFileState> {
  constructor(props: ImportFileProps) {
    super(props);
    this.state = {
      visible: false,
    };
  }

  private handleShowImportModal = () => {
    this.setState({
      visible: true,
    });
  };

  private handleCancel = () => {
    this.setState({
      visible: false,
    });
  };

  public render() {
    const { visible } = this.state;
    return (
      <React.Fragment>
        <Button onClick={this.handleShowImportModal}>导入数据</Button>
        <ImportFileModal visible={visible} onCancel={this.handleCancel} />
      </React.Fragment>
    );
  }
}

export default connect(
  (state: ConnectState) => {
    return {
      ...state.file,
    };
  },
  (dispatch: Dispatch) => {
    return {
      updateFileStore(record: object) {
        dispatch({ type: 'file/updateFileStore', payload: record });
      },
    };
  },
)(ImportFile);
