import React, { FunctionComponent } from 'react';
import MarkdownEditorView from '../../containers/editor/MarkdownEditorView';
import './index.less';

const EditorPage: FunctionComponent = () => {
  return (
    <div className="editor-page">
      <MarkdownEditorView />
    </div>
  );
};

export default EditorPage;
