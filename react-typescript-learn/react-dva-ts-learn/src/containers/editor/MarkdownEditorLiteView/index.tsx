// import react, react-markdown-editor-lite, and a markdown parser you like
import React from 'react';
import MarkdownIt from 'markdown-it';
import MarkdownEditorLite from 'react-markdown-editor-lite';
// import style manually
import 'react-markdown-editor-lite/lib/index.css';

import hljs from 'highlight.js';
import 'highlight.js/styles/atom-one-light.css'

// Register plugins if required
// MdEditor.use(YOUR_PLUGINS_HERE);

// Initialize a markdown parser
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

// Finish!
function handleEditorChange({ html, text }) {
  console.log('handleEditorChange', html, text);
}
export default (props) => {
  return (
    <MarkdownEditorLite
      value=""
      config={{
        theme: 'github'
      }}
      // style={{ height: '500px' }}
      renderHTML={(text) => mdParser.render(text)}
      onChange={handleEditorChange}
    />
  );
};
