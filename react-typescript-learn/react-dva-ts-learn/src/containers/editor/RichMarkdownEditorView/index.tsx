import React, { FunctionComponent, useState } from 'react';
import RichMarkdownEditor from 'rich-markdown-editor';

import './index.less';

const RichMarkdownEditorView: FunctionComponent = () => {
  const [markedContent, setMarkedContent] = useState('');

  return (
    <div className="rich-markdown-editor-container">
      <RichMarkdownEditor
        onChange={(value) => {
          console.log(value());
          setMarkedContent(value());
        }}
      />
    </div>
  );
};

export default RichMarkdownEditorView;
