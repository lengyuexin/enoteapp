import React, { useState, memo } from 'react';
import axios from 'axios';


import { javaApiUrl } from '../../../config'




//用户名正则校验
function comRule(e, setName) {
    const value = e.target.value;
    setName(value);
    return /^[0-9a-zA-Z_]{1,32}$/.test(value)
}


//双重校验业务逻辑
function service(e, setName, setNameCls, setFormRule, formRule, setMsg) {

    const pass = comRule(e, setName);

    //未通过正则校验--进行提示
    if (!pass) {
        setNameCls("info warn")
        return

    } else {

        //通过正则校验--进行判重校验
        const name = e.target.value;

        axios.post(
            `${javaApiUrl}/api/checkName`,
            { name })
            .then(res => {
                const used = res.data.data;
                if (used) {
                    //用户名可用
                    setMsg("最大32位,不包含中文和特殊字符")
                    setNameCls("info hide")
                    setFormRule({ ...formRule.toJS(), name: true })
                } else {
                    //用户名不可用
                    setNameCls("info warn")
                    setMsg("该用户名已存在，请更换")
                    setFormRule({ ...formRule.toJS(), name: false })
                    return
                }
            })

    }

}



function FormName({
    nameCls,
    setFormRule,
    formRule,
    setNameCls,
    setName,

}) {

    const [msg, setMsg] = useState("最大32位,不包含中文和特殊字符")

    return (<React.Fragment>
        <p>
            <input
                onFocus={() => {
                    setNameCls('info')
                }}
                onBlur={(e) => {
                    service(e, setName, setNameCls, setFormRule, formRule, setMsg)
                }}
                onChange={(e) => {
                    service(e, setName, setNameCls, setFormRule, formRule, setMsg)
                }}
                placeholder="用户名不可以和他人重复哦"

            />

            <span className={nameCls} >{msg}</span>
        </p>
    </React.Fragment>)



}

export default memo(FormName)