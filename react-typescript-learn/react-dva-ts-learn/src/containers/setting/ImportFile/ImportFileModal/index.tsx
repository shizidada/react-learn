import React, { FunctionComponent } from 'react';
import { Modal } from 'antd';
import ImportForm from './ImportForm';

interface ImportFileModalProps {
  visible?: boolean;
  onCancel?: () => void;
  onImpoetComplete?: () => void;
}

const ImportFileModal: FunctionComponent<ImportFileModalProps> = ({ visible, onCancel }) => {
  return (
    <Modal title="文件上传" visible={visible} footer={null} onCancel={onCancel}>
      <ImportForm />
    </Modal>
  );
};
export default ImportFileModal;
