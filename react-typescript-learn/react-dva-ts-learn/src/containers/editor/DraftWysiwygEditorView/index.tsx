import React, { useState } from 'react';
import { convertToRaw } from 'draft-js';
import draftToHtml from 'draftjs-to-html';
import { Editor, EditorState } from 'react-draft-wysiwyg';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';

import './index.less';

const DraftWysiwygEditorView = () => {
  const [editorState, setEditorState] = useState<EditorState>();

  const [editorHtml, setEditorHtml] = useState<string>('');

  const onEditorStateChange = (es: EditorState) => {
    setEditorState(es);
    const html = draftToHtml(convertToRaw(es.getCurrentContent()));
    setEditorHtml(html);
  };

  return (
    <div className="draft-wysiwyg-editor-view">
      <Editor
        editorState={editorState}
        wrapperClassName="moose-editor-wrapper"
        toolbarClassName="moose-editor-toolbar"
        editorClassName="moose-editor-container"
        onEditorStateChange={onEditorStateChange}
      />

      <div className="moose-preview" dangerouslySetInnerHTML={{ __html: editorHtml }}></div>
    </div>
  );
};

export default DraftWysiwygEditorView;
