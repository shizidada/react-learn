import React, { FunctionComponent } from 'react';
// import SplitAceEditorView from '../../containers/editor/SplitAceEditorView';
// import SimpleMDEditorView from '../../containers/editor/SimpleMDEditorView';
// import DraftWysiwygEditorView from '../../containers/editor/DraftWysiwygEditorView';
// import SimpleMDEView from '../../containers/editor/SimpleMDEView';
// import RichMarkdownEditorView from '../../containers/editor/RichMarkdownEditorView';
// import MarkdownEditorLiteView from '../../containers/editor/MarkdownEditorLiteView';
// import CKEditorView from '../../containers/editor/CKEditorView';
import MarkdownEditorView from '../../containers/editor/MarkdownEditorView';
import './index.less';

const EditorPage: FunctionComponent = () => {
  return (
    <div className="editor-page">
      {/* <DraftWysiwygEditorView /> */}
      {/* <SplitAceEditorView /> */}
      {/* <SimpleMDEditorView /> */}
      {/* <SimpleMDEView /> */}
      {/* <RichMarkdownEditorView /> */}
      {/* <MarkdownEditorLiteView /> */}
      {/* <CKEditorView /> */}
      <MarkdownEditorView />
    </div>
  );
};

export default EditorPage;
