import React, { Component } from 'react';
import { Dispatch } from 'redux';
import { connect } from 'dva';
import { UploadChangeParam } from 'antd/lib/upload';
import { UploadFile } from 'antd/lib/upload/interface';
import { Button, Upload } from 'antd';

import { GlobalState } from '../../../typings';
import { NAMESPACE } from '../../../models/file/constants';
import { getFileState } from '../../../models/file';

const mapStateToProps = (state: GlobalState) => getFileState(state);

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    updateFileStore(record: object) {
      dispatch({ type: `${NAMESPACE}/updateFileStore`, payload: record });
    },
  };
};

class ImportFile extends Component {
  private onUploadChange = (info: UploadChangeParam<UploadFile>) => {
    console.log('ImportFile onUploadChange ::', info);
  };

  public render() {
    return (
      <Upload
        accept=".xlsx"
        action="http://local-user.wanshifu.com:8000/api/v1/excel/import"
        showUploadList={false}
        onChange={this.onUploadChange}
      >
        <Button>导入数据</Button>
      </Upload>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ImportFile);
