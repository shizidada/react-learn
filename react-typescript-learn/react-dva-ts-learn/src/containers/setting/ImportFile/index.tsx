import React, { FunctionComponent, useState } from 'react';
import { Dispatch } from 'redux';
import { connect } from 'dva';
// import { UploadChangeParam } from 'antd/lib/upload';
// import { UploadFile } from 'antd/lib/upload/interface';
import { Button } from 'antd';

import ImportFileModal from './ImportFileModal';

// eslint-disable-next-line import/extensions
import { AppState } from '../../../typings';

interface ImportFileProps {}

const ImportFile: FunctionComponent<ImportFileProps> = () => {
  const [visible, setVisible] = useState(false);

  const handleShowImportModal = () => {
    setVisible(true);
  };

  const handleCancel = () => {
    setVisible(false);
  };

  return (
    <React.Fragment>
      <Button onClick={handleShowImportModal}>导入数据</Button>
      <ImportFileModal visible={visible} onCancel={handleCancel} />
    </React.Fragment>
  );
};

export default connect(
  (state: AppState) => {
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
