import React, { memo, useCallback } from 'react';

import { Container, Tip, InputWarp } from '../style';

import FormName from './FormName';
import FormPwd from './FormPwd';
import FormPhone from './FormPhone';
import FormBtn from './FormBtn';
import { connect } from 'react-redux'
import { actionCreators } from '../store'

function Panel({
    name,
    password,
    phone,
    nameCls,
    pwdCls,
    cfmPwdCls,
    phoneCls,
    formRule,
    setName,
    setPWD,
    setPhone,
    setNameCls,
    setPWDCls,
    setCfmPWDCls,
    setPhoneCls,
    setFormRule,

}) {

    //缓存传递给子组件的函数 减少不必要的渲染

    const ucbSetName = useCallback(setName, [name])
    const ucbSetPWD = useCallback(setPWD, [password])
    const ucbSetPhone = useCallback(setPhone, [phone])
    const ucbSetNameCls = useCallback(setNameCls, [nameCls])
    const ucbSetPWDCls = useCallback(setPWDCls, [pwdCls])
    const ucbSetCfmPWDCls = useCallback(setCfmPWDCls, [cfmPwdCls])
    const ucbSetPhoneCls = useCallback(setPhoneCls, [phoneCls])



    return (
        <React.Fragment>
            <Container>
                <InputWarp>
                    <Tip>
                        <span>已有账号,</span>
                        <span onClick={() => { window.location.href = "#/login" }}>立即登录</span>
                    </Tip>

                    <FormName
                        nameCls={nameCls}
                        setFormRule={setFormRule}
                        formRule={formRule}
                        setNameCls={ucbSetNameCls}
                        setName={ucbSetName}
                    />
                    <FormPwd
                        pwdCls={pwdCls}
                        cfmPwdCls={cfmPwdCls}
                        setFormRule={setFormRule}
                        formRule={formRule}
                        setPWDCls={ucbSetPWDCls}
                        setCfmPWDCls={ucbSetCfmPWDCls}
                        setPassword={ucbSetPWD}
                    />
                    <FormPhone
                        phoneCls={phoneCls}
                        setFormRule={setFormRule}
                        formRule={formRule}
                        setPhoneCls={ucbSetPhoneCls}
                        setPhone={ucbSetPhone}
                    />

                    <FormBtn
                        formRule={formRule}
                        name={name}
                        password={password}
                        phone={phone}
                    />
                </InputWarp>
            </Container>
        </React.Fragment>
    )
}


//从全局state中获取数据
const mapStateToProps = (state) => {
    return {
        name: state.get('register').get('name'),
        password: state.getIn(['register', 'password']),
        phone: state.getIn(['register', 'phone']),
        nameCls: state.get('register').get('nameCls'),
        pwdCls: state.getIn(['register', 'pwdCls']),
        cfmPwdCls: state.getIn(['register', 'cfmPwdCls']),
        phoneCls: state.getIn(['register', 'phoneCls']),
        formRule: state.getIn(['register', 'formRule']),
    }

}


//更改状态的调度方法
const mapDispatchToProps = (dispatch) => {
    return {
        setName(name) {
            dispatch(actionCreators.setName(name));
        },
        setPWD(password) {
            dispatch(actionCreators.setPWD(password));
        },
        setPhone(phone) {
            dispatch(actionCreators.setPhone(phone));
        },

        setNameCls(nameCls) {
            dispatch(actionCreators.setNameCls(nameCls));
        },
        setPWDCls(pwdCls) {
            dispatch(actionCreators.setPWDCls(pwdCls));
        },
        setCfmPWDCls(cfmPwdCls) {
            dispatch(actionCreators.setCfmPWDCls(cfmPwdCls));
        },
        setPhoneCls(phoneCls) {
            dispatch(actionCreators.setPhoneCls(phoneCls));
        },
        setFormRule(formRule) {
            dispatch(actionCreators.setFormRule(formRule));
        },

    }

}
export default connect(mapStateToProps, mapDispatchToProps)(memo(Panel));
