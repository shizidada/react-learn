import React, { FunctionComponent } from 'react';
import './index.less';

export interface EditorLayoutProps {
  view: React.ReactNode;
}

const EditorLayout: FunctionComponent<EditorLayoutProps> = ({ view }) => {
  return <div className="editor-layout-container">{view}</div>;
};

export default EditorLayout;
