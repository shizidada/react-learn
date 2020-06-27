import React, { FunctionComponent } from 'react';
import { SortableElement } from 'react-sortable-hoc';

interface SortableSpanProps {
  value: string;
}

const SortableSpan: FunctionComponent<SortableSpanProps> = (value) => {
  return <span className="sortable-item">{value}</span>;
};

const SortableItem = SortableElement(SortableSpan);

export default SortableItem;
