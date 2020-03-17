import {
    SET_NAME,
    SET_PWD,
    SET_PHONE,
    SET_NAME_CLS,
    SET_PWD_CLS,
    SET_CFM_PWD_CLS,
    SET_PHONE_CLS,
    SET_FORM_RULE,

} from './actionTypes';

import {fromJS} from 'immutable'

export const setName = (name) => ({
    type: SET_NAME,
    name
})
export const setPWD = (password) => ({
    type: SET_PWD,
    password
})
export const setPhone = (phone) => ({
    type: SET_PHONE,
    phone
})


export const setNameCls = (nameCls) => ({
    type: SET_NAME_CLS,
    nameCls
})

export const setPWDCls = (pwdCls) => ({
    type: SET_PWD_CLS,
    pwdCls
})

export const setCfmPWDCls = (cfmPwdCls) => ({
    type: SET_CFM_PWD_CLS,
    cfmPwdCls
})


export const setPhoneCls = (phoneCls) => ({
    type: SET_PHONE_CLS,
    phoneCls
})

export const setFormRule = (formRule) => ({
    type: SET_FORM_RULE,
    formRule:fromJS(formRule)
})

