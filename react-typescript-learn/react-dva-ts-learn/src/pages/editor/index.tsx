import React, { FunctionComponent } from 'react';
import MarkdownEditorView from './components/MarkdownEditorView';
import './index.less';

const EditorPage: FunctionComponent = () => {
  return (
    <div className="editor-page">
      <MarkdownEditorView />
    </div>
  );
};

export default EditorPage;
