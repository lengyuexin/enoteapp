import React, { memo } from 'react'

import { Main } from '../style'

function Waterfall() {


    return (
        <Main>
            <div className="grid" data-masonry='{ "itemSelector": ".grid-item", "columnWidth": 200 }'>

                {
                    Array.from(new Array(20).keys()).sort(() => Math.random() - 0.5).map(item => {
                        return (
                            <div className="grid-item" key={item}>
                                <a href={`/img/${item + 1}.jpg`}
                                    download={`${item + 1}.jpg`}
                                    target="_black"
                                ><img src={`/img/${item + 1}.jpg`} className="t" alt={`${item + 1}.jpg`} />
                                    <div className='cover t' />
                                </a>
                            </div>
                        )
                    })
                }
            </div>
        </Main>
    )
}

export default memo(Waterfall)