import React, { useEffect } from 'react';

import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

const CKEditorView = () => {
  useEffect(() => {
    ClassicEditor.create(document.querySelector('#editor')).catch(error => {
      console.error(error);
    });
  });
  return <div id="editor"></div>;
};

export default CKEditorView;
