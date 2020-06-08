import React, { FunctionComponent } from 'react';
import { Drawer } from 'antd';

interface ProductAddDrawerProps {
  visible?: boolean;
  onProductAddDrawerClose: (visible: boolean) => void;
}

const ProductAddDrawer: FunctionComponent<ProductAddDrawerProps> = ({ visible, onProductAddDrawerClose }) => {
  return (
    <Drawer
      title="商品添加"
      width={640}
      placement="right"
      closable={false}
      onClose={() => onProductAddDrawerClose(false)}
      visible={visible}
    >
      <p>Some ProductAddDrawer contents...</p>
      <p>Some ProductAddDrawer contents...</p>
      <p>Some ProductAddDrawer contents...</p>
    </Drawer>
  );
};

export default ProductAddDrawer;
