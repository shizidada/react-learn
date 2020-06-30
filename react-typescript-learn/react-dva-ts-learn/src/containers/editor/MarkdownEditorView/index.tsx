import React, { FunctionComponent, useEffect } from 'react';

const MarkDownEditorView: FunctionComponent = () => {
  useEffect(() => {
    const testEditor = window.editormd('test-editormd', {
      width: '90%',
      height: 640
    });
  });

  return (
    <div id="test-editormd">
      <textarea style={{ display: 'none' }}>###Hello world!</textarea>
    </div>
  );
};

export default MarkDownEditorView;
