import React, { Component } from 'react';
import { Modal } from 'antd';
import ImportForm from './ImportForm';

interface ImportFileModalProps {
  visible?: boolean;
  onCancel?: () => void;
  onImpoetComplete?: () => void;
}

export default class ImportFileModal extends Component<ImportFileModalProps, {}> {
  private handleCancel = () => {};

  private handleImportComplete = () => {};

  render() {
    const { visible, onCancel } = this.props;
    return (
      <Modal title="文件上传" visible={visible} footer={null} onCancel={onCancel}>
        <ImportForm />
      </Modal>
    );
  }
}
