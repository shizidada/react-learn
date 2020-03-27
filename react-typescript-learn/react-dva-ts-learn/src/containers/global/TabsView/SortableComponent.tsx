import React, { SFC, useState } from 'react';
import { arrayMove, SortEnd, SortEvent } from 'react-sortable-hoc';
import SortableContainer from './SortableContainer';

interface SortableComponentPorps {}

const SortableComponent: SFC<SortableComponentPorps> = () => {
  const defaultItems = ['Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5', 'Item 6'];

  const [items, setItems] = useState(defaultItems);
  const onSortEnd = (sort: SortEnd, event: SortEvent) => {
    let temp = items.slice();
    temp = arrayMove(items, sort.oldIndex, sort.newIndex);
    setItems(temp);
  };

  return <SortableContainer items={items} axis="y" onSortEnd={onSortEnd} />;
};

export default SortableComponent;
