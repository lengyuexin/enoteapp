import React, { memo, useState, useEffect } from 'react'

import { Main } from '../style'
import axios from 'axios'

function Soup() {


    const [list, setList] = useState([])

    useEffect(() => {

        axios.get("https://lengyuexin.github.io/json/text.json").then(res => {

             setList(res.data.list.sort(()=>Math.random()-0.5).slice(0,8));

        }).catch(err => {
            console.error(err)
        })

    }, [])

    return (
        <Main>
            <div className="picture-wall">
                {list.length>0&&list.map(item=>{
                    return <p key={item.id}>{item.text}</p>
                })}
            </div>

        </Main>
    )
}

export default memo(Soup)