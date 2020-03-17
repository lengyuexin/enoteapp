import React, { useRef } from 'react';


//密码框正则校验

function comRule(e) {
    const value = e.target.value;
    return /^[0-9a-zA-Z_!@#$%^&*]{8,32}$/.test(value)

}

//top=>bot 密码框比对
function checkPwd(e, setPWDCls, setPassword, setCfmPWDCls, botRef) {
    const pass = comRule(e);
    //未通过正则校验--进行提示
    if (!pass) {
        setPWDCls("info warn")
        return
    } else {
        setPWDCls("info hide")

        

        //获取两个密码框的值，进行比对
        const topValue = e.target.value;
        const botValue = botRef.current.value
        

        setPassword(topValue);

        if (botValue.length>0 &&botValue !== topValue) {
            setCfmPWDCls('info warn')
        } else {
            setCfmPWDCls('info hide')
        }

    }

}


//bot=>top 密码框比对
function confirmCheck(e, setPassword, setCfmPWDCls, setFormRule, formRule, topRef) {

    const botValue = e.target.value;
    setPassword(botValue)
    const topValue = topRef.current.value

    if (!(botValue === topValue)) {
        setCfmPWDCls('info warn')
        setFormRule({ ...formRule.toJS(), againPwd: false })
    } else {
        setCfmPWDCls('info hide')
        setFormRule({ ...formRule.toJS(), againPwd: true })
    }
}


export default function ({
    pwdCls,
    cfmPwdCls,
    setFormRule,
    formRule,
    setPWDCls,
    setCfmPWDCls,
    setPassword,

}) {


    const topRef = useRef();
    const botRef = useRef();

    return (<React.Fragment>
        <p>
            <input
                onFocus={() => { setPWDCls('info') }}
                onBlur={(e) => { checkPwd(e, setPWDCls, setPassword, setCfmPWDCls, botRef) }}
                onChange={(e) => { checkPwd(e, setPWDCls, setPassword, setCfmPWDCls, botRef) }}
                ref={topRef}
                type="password"
                placeholder="请输入登录密码"
            />
            <span className={pwdCls} >8-32位,不含空格</span>
        </p>

        <p>
            <input
                type="password"
                ref={botRef}
                onBlur={(e) => {
                    confirmCheck(e, setPassword, setCfmPWDCls, setFormRule, formRule, topRef)
                }}
                onChange={(e) => {
                    confirmCheck(e, setPassword, setCfmPWDCls, setFormRule, formRule, topRef)
                }}

                placeholder="请确认两次密码保持一致"

            />
            <span className={cfmPwdCls} >两次密码不一致</span>
        </p>
    </React.Fragment>)



}