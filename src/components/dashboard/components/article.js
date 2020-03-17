import React, { memo } from 'react'
import MarkdownIt from 'markdown-it'
import MdEditor from 'react-markdown-editor-lite'
import hljs  from 'highlight.js';
import 'highlight.js/styles/github.css';

import 'react-markdown-editor-lite/lib/index.css';
import {Submit} from '../style'
const mdParser = new MarkdownIt({
    html:true,
    highlight(str, lang) {

       
      
      if (lang && hljs.getLanguage(lang)) {
    

        try {
          return hljs.highlight(lang, str).value
        } catch (__) {}
      }
      return '' // use external default escaping
      
    },
});

function Article({
    // html,
    // text,
    setHtml,
    setText,
}) {



    const handleChange = ({ html, text }) => {
        setHtml(html)
        setText(text)
    }

    const handleSubmit=()=>{
        alert("发布成功")
    }
    return (
        <React.Fragment>
            <Submit onClick={handleSubmit}>发布</Submit>
            <MdEditor
                value=""
                renderHTML={(textStr) => mdParser.render(textStr)}
                onChange={handleChange}
            />
        </React.Fragment>
    )
}

export default memo(Article)