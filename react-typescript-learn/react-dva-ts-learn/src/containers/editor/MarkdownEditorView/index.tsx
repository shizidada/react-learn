import React, { FunctionComponent, useEffect } from 'react';

const MarkDownEditorView: FunctionComponent = () => {
  useEffect(() => {
    // var testEditor = window.editormd('test-editormd', {
    //   path: '../lib/'
    // });
  });

  return (
    <div id="test-editormd">
      <textarea style={{ display: 'none' }}>###Hello world!</textarea>
    </div>
  );
};

export default MarkDownEditorView;
