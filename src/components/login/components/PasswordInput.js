import React, { memo } from 'react';

function PasswordInput({ password, setPWD }) {

    return (
        <label>
            <div className='passwordInput '>
                <svg className="icon" aria-hidden="true">
                    <use xlinkHref="#icon-QWcharts-mima"></use>
                </svg>
                <input
                    type='password'
                    placeholder='Password'
                    value={password}
                    onChange={(e) => { setPWD(e.target.value) }}
                   
                />
            </div>
        </label>
    )
}


export default memo(PasswordInput)