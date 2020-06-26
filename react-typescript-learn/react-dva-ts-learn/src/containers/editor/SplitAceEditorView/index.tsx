import React, { useEffect, useRef, useState } from 'react';
import AceEditor, { split as SplitAceEditor } from 'react-ace';
import SplitComponent from 'react-ace/lib/split';
import ReactMarkdown from 'react-markdown';

import 'ace-builds/src-noconflict/mode-mysql';
import 'ace-builds/src-noconflict/mode-markdown';
import 'ace-builds/src-noconflict/mode-java';
import 'ace-builds/src-noconflict/mode-javascript';

import 'ace-builds/src-noconflict/theme-github';
import 'ace-builds/src-noconflict/theme-monokai';
import 'ace-builds/src-noconflict/theme-tomorrow_night';
import 'ace-builds/src-noconflict/theme-chrome';
import 'ace-builds/src-noconflict/theme-nord_dark';

import { Button } from 'antd';

import './index.less';

const SplitAceEditorView = () => {
  const splitAceEditorRef = useRef();

  const [showPreview, setShowPreview] = useState(false);

  const [editorWrap, setAceEditorWrap] = useState(true);

  const [markedContent, setMarkedContent] = useState('');

  const handleWindowResize = () => {};

  const onAceEditorChange = (newValue: string, event?: any) => {
    setMarkedContent(newValue);
    console.log('onAceEditorChange :: ', newValue, event);
  };

  const onSplitAceEditorChange = (newValue: string[], event?: any) => {
    console.log('change', newValue);
  };

  const handleShowPreviewClick = () => {
    setShowPreview(!showPreview);

    console.log(splitAceEditorRef);
  };

  useEffect(() => {
    window.addEventListener('resize', handleWindowResize);

    return () => {
      window.removeEventListener('resize', handleWindowResize);
    };
  });
  return (
    <div className="ace-editor-view">
      <div className="ace-editor-box">
        <AceEditor
          name="SplitAceEditor"
          mode="markdown"
          theme="chrome"
          showGutter={false}
          scrollMargin={[0, 80, 0, 0]}
          fontSize={18}
          value={markedContent}
          ref={splitAceEditorRef}
          showPrintMargin={false}
          setOptions={{
            // readOnly: true,
            showGutter: true,
            wrapEnabled: true,
            highlightActiveLine: false,
            enableBasicAutocompletion: true,
            enableSnippets: true,
            enableLiveAutocompletion: true,
            // useSoftTabs: true
            cursorStyle: 'wide',
            wrap: editorWrap
          }}
          onChange={onAceEditorChange}
          // highlightActiveLine
          // enableBasicAutocompletion
          // enableLiveAutocompletion
          // enableSnippets
          // wrapEnabled={false}
          // style={{ width: 'calc(100% - 20px)' }}
          // editorProps={{ $blockScrolling: true }}
          // splits={1}
          // hScrollBarAlwaysVisible
        />
        <div className="ace-footer">
          <Button onClick={handleShowPreviewClick}>hide preview</Button>
        </div>
      </div>

      {showPreview && (
        <div className="content-preview">
          <div className="content-wrapper">
            <div className="content-html">
              <ReactMarkdown source={markedContent} />
            </div>
            <div className="content-footer"></div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SplitAceEditorView;
