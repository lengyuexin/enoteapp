import React, { memo, useState, useEffect } from 'react'

import { Main } from '../style'
import axios from 'axios'

function Joke() {


    const [list, setList] = useState([])

    useEffect(() => {

        axios.get("https://lengyuexin.github.io/json/joke.json").then(res => {
            setList(res.data.jokeList);
        }).catch(err => {
            console.error(err)
        })

    }, [])

    return (
        <Main>

            <div className="header">

                <div className="inner-header flex">
  
                    <p >
                        {
                            list.length>0&&list[parseInt(Math.random()*49)].content
                        }
                    </p>
                </div>


                <div>
                    <svg className="waves" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"
                        viewBox="0 24 150 28" preserveAspectRatio="none" shapeRendering="auto">
                        <defs>
                            <path id="gentle-wave" d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z" />
                        </defs>
                        <g className="parallax">
                            <use xlinkHref="#gentle-wave" x="48" y="0" fill="rgba(255,255,255,0.7" />
                            <use xlinkHref="#gentle-wave" x="48" y="3" fill="rgba(255,255,255,0.5)" />
                            <use xlinkHref="#gentle-wave" x="48" y="5" fill="rgba(255,255,255,0.3)" />
                            <use xlinkHref="#gentle-wave" x="48" y="7" fill="#fff" />
                        </g>
                    </svg>
                </div>


            </div>
        </Main>
    )
}

export default memo(Joke)