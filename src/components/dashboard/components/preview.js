import React, { memo,useEffect,useState } from 'react'
import MarkdownIt from 'markdown-it'
import MdEditor from 'react-markdown-editor-lite'
import hljs from 'highlight.js';
import 'highlight.js/styles/github.css';
import 'react-markdown-editor-lite/lib/index.css';
import { javaApiUrl } from '../../../config'
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

function Preview(props) {

   
    let { id} = props.match.params;
    const [info, setInfo] = useState('');

    useEffect(() => {
  
       
            axios.post(`${javaApiUrl}/api/findArticlesByAuthor`, {
              author: JSON.parse(window.localStorage.getItem("userInfo")).name
            }).then(res => {
              
              const list=res.data.data;
              const cur=list.filter(item=>item.id===+id)[0]
              setInfo(cur.md)

            
      
            }).catch(err => {
              console.log(err)
            })
      
  
    }, [info,id])
  
  

    

    
    return (
        <React.Fragment>
          
            <MdEditor
                value={info}
                renderHTML={(textStr) => mdParser.render(textStr)}

            />
        </React.Fragment>
    )
}

export default memo(Preview)