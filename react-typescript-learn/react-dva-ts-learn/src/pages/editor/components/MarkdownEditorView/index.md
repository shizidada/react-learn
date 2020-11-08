```javascript
import hljs from 'highlight.js';
import 'highlight.js/styles/atom-one-light.css';
import MarkdownIt from 'markdown-it';

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
```
