import { Button } from 'antd';
import 'github-markdown-css/github-markdown.css';
import React, { FunctionComponent, useEffect } from 'react';
import './index.less';

const MarkDownEditorView: FunctionComponent = () => {
  let markDownText = null;

  const init = () => {
    markDownText = window.editormd('test-editormd', {
      width: '90%',
      height: 1600,
      emoji: true,
      taskList: true,
      tex: true, // 默认不解析
      flowChart: true, // 默认不解析
      sequenceDiagram: true, // 默认不解析
      markdown: '#### Setting\r\n\r\n    {\n        codeFold : true\n    }\r\n\r\n',
      codeFold: true,
      saveHTMLToTextarea : true,
      // readOnly: true,
      // styleActiveLine: false, // disable active line
      // watch: false, // disable watch
      // lineNumbers: false // hide line numbers
      // theme: 'dark',
      // previewTheme: 'dark',
      // editorTheme: 'pastel-on-dark' //window.editormd.editorThemes['pastel-on-dark']
    });
  };

  useEffect(() => {
    init();
  });

  return (
    <div>
      <div id="test-editormd">
        <article className="markdown-body">
          <textarea style={{ display: 'none' }}>###Hello world!</textarea>
        </article>
      </div>
      <Button
        onClick={() => {
          if (markDownText) {
            //testEditor.getMarkdown();       // 获取 Markdown 源码
            //testEditor.getHTML();           // 获取 Textarea 保存的 HTML 源码
            // console.log(markDownText.getMarkdown());
            console.log(markDownText.getHTML());
          }
        }}
      ></Button>
    </div>
  );
};

export default MarkDownEditorView;
