import React, { FunctionComponent } from 'react';

import SplitAceEditorView from '../../containers/editor/SplitAceEditorView';
import SimpleMDEditorView from '../../containers/editor/SimpleMDEditorView';
import DraftWysiwygEditorView from '../../containers/editor/DraftWysiwygEditorView';

import './index.less';

const EditorPage: FunctionComponent = () => {
  return (
    <div className="">
      {/* <DraftWysiwygEditorView /> */}
      <SplitAceEditorView />
      {/* <SimpleMDEditorView /> */}
    </div>
  );
};

export default EditorPage;
