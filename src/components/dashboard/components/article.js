import React, { memo } from 'react'
import MarkdownIt from 'markdown-it'
import MdEditor from 'react-markdown-editor-lite'
import hljs from 'highlight.js';
import 'highlight.js/styles/github.css';
import { javaApiUrl } from '../../../config'
import 'react-markdown-editor-lite/lib/index.css';
import { Submit } from '../style'
import axios from 'axios'
const mdParser = new MarkdownIt({
    html: true,
    highlight(str, lang) {

        if (lang && hljs.getLanguage(lang)) {
            try {
                return hljs.highlight(lang, str).value
            } catch (__) { }
        }
        return '' // use external default escaping

    },
});

function Article({ html, text, setHtml, setText }) {


  


    const handleChange = ({ html, text }) => {
        setHtml(html)
        setText(text)
    }

    const handleSubmit = () => {

        const h1 = html.slice(html.indexOf("<h1>"), html.indexOf("</h1>")).replace("<h1>", "")
        const h2 = html.slice(html.indexOf("<h2>"), html.indexOf("</h2>")).replace("<h2>", "")
        const h3 = html.slice(html.indexOf("<h3>"), html.indexOf("</h3>")).replace("<h3>", "")
        let title = "";
        if (h1) {
            title = h1
        } else if (h2) {
            title = h2
        } else if (h3) {
            title = h3
        }
        axios.post(`${javaApiUrl}/api/addArticle`, {
            title: title,
            author: JSON.parse(window.localStorage.getItem('userInfo')).name,
            md: text,
            html: html
        }).then(() => {
            setHtml("")
            setText("")
            alert("发布成功")
            window.location.href = "#/dashboard/myArticle"
        }).catch(err => {
            console.error(err)
            alert("发布失败")
        })

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