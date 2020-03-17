import React,{memo} from 'react';


function UsernameInput({ name, setName }) {


    return (
        <label>
            <div className='usernameInput ' >
                <svg className="icon" aria-hidden="true">
                    <use xlinkHref="#icon-QWcharts-yonghuming"></use>
                </svg>
                <input
                    type='search'
                    value={name}
                    placeholder='Username'
                    onChange={(e) => { setName(e.target.value) }}
                />

            </div>
        </label>
    )
}


export default memo(UsernameInput)