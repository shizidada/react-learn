import React, { SFC } from 'react';
import { SortableContainer, SortableContainerProps } from 'react-sortable-hoc';

import SortableItem from './SortableItem';

interface SortableListBoxProps extends SortableContainerProps {
  items: string[];
}

const SortableListBox: SFC<SortableListBoxProps> = ({ items }) => {
  return (
    <ul>
      {items.map((value: string, index: number) => (
        <SortableItem key={`item-${value}`} index={index} value={value} />
      ))}
    </ul>
  );
};

const SortableList = SortableContainer(SortableListBox);

export default SortableList;
