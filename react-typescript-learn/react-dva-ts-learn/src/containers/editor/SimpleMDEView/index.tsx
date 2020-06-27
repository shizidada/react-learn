import hljs from 'highlight.js';
import 'highlight.js/styles/github.css';
import MarkdownIt from 'markdown-it';
import React, { useEffect } from 'react';
import SimpleMDE from 'simplemde';
import 'simplemde/dist/simplemde.min.css';
import './index.less';





const mdParser = new MarkdownIt({
  html: true,
  linkify: true,
  typographer: true,
  highlight: (str, lang) => {
    if (lang && hljs.getLanguage(lang)) {
      try {
        return hljs.highlight(lang, str).value;
      } catch (error) {
        console.log(error);
      }
    }
    return str;
  }
});

const SimpleMDEView = () => {
  useEffect(() => {
    const simpleMDE = new SimpleMDE({
      element: document.querySelector('#editor'),
      placeholder: 'Trying ...',
      renderingConfig: {
        codeSyntaxHighlighting: true
      },
      previewRender: (markdownPlaintext: string, previewElement?: HTMLElement) => {
        return mdParser.render(markdownPlaintext);
      }
    });
  }, []);

  return (
    <div className="SimpleMDE-view-container">
      <textarea id="editor"></textarea>
    </div>
  );
};

export default SimpleMDEView;
