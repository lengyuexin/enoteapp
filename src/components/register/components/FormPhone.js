import React, { useState, memo } from 'react';
import axios from 'axios'

import { javaApiUrl } from '../../../config'


function FormPhone({ 

    phoneCls,
    setFormRule,
    formRule,
    setPhoneCls,
    setPhone,

 }) {

    const [msg, setMsg] = useState("请确保手机号正确");

    return (<React.Fragment>
        <p> <input

            placeholder="请输入要绑定的手机号"

            onChange={
                (e) => {

                    const value = e.target.value;
                    setPhone(value)
                    const rule = /^1[3456789]\d{9}$/.test(value)

                    if (!rule) {
                        setPhoneCls('info warn')
                        setMsg("号码格式不正确")
                    } else {
                        setPhoneCls('info hide');

                        //查询手机号是否存在--
                        axios.post(`${javaApiUrl}/api/checkPhone`, {
                            phone: value

                        }).then(res => {
                            const used = res.data.data;
                            if (used) {
                                setPhoneCls('info hide');
                                setFormRule({ ...formRule.toJS(), phone: true })
                            } else {
                                setPhoneCls('info warn')
                                setMsg("手机号码已存在")
                                setFormRule({ ...formRule.toJS(), phone: false })
                                return
                            }

                        }).catch(err => {
                            console.error(err)
                        })


                    }
                }
            }


        />
            <span className={phoneCls} >{msg}</span>
        </p>
    </React.Fragment>)



}

export default memo(FormPhone)