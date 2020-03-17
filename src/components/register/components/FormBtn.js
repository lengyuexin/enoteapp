import React from 'react';
import axios from 'axios'
import { Encrypt } from '../../../common'
import { javaApiUrl } from '../../../config'






export default function ({ formRule, name, password, phone }) {



    let res;
    const arr = Object.values(formRule.toJS());
    if(arr.length===3){
        res= arr.every(item => item === true)
    }


    return (<React.Fragment>
        <p>
            <input
                type="button"
                className={res ? "wall ok" : "wall"}
                value="注册"
                onClick={() => {
                    if (res) {
                        axios.post(`${javaApiUrl}/api/addUser`, {
                            name,
                            password: Encrypt(password),
                            phone: phone,
                        }).then(() => {
                            window.location.href = "#/back/register"
                        }).catch(err => {
                            console.error(err)
                        })

                    }
                }}
            />
        </p>
    </React.Fragment>
    )
}