import { Button, Card } from 'antd';
import React, { FunctionComponent, useState } from 'react';
import ProductAddDrawer from '../../../containers/product/ProductAddDrawer';


const ProductListPage: FunctionComponent = () => {
  const [showAddProduct, setShowAddProduct] = useState(false);
  return (
    <Card>
      <Button onClick={() => setShowAddProduct(true)}>添加</Button>
      <ProductAddDrawer visible={showAddProduct} onProductAddDrawerClose={setShowAddProduct} />
    </Card>
  );
};

export default ProductListPage;
