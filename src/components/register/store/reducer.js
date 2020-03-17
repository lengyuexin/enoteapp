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


import { fromJS } from 'immutable'
const defaultState = fromJS({
    name: "",
    password: "",
    phone: "",
    nameCls: "info hide",//用户名输入框类样式
    pwdCls: "info hide",//密码输入框类样式
    cfmPwdCls: "info hide",//确认密码框类样式
    phoneCls: "info hide",//手机号输入框类样式
    formRule: {}//表单校验规则通过情况

})
export default (state = defaultState, action) => {

    switch (action.type) {
        case SET_NAME:
            return state.set("name", action.name);
        case SET_PWD:
            return state.set("password", action.password);
        case SET_PHONE:
            return state.set("phone", action.phone);
        case SET_NAME_CLS:
            return state.set("nameCls", action.nameCls);
        case SET_PWD_CLS:
            return state.set("pwdCls", action.pwdCls);
        case SET_CFM_PWD_CLS:
            return state.set("cfmPwdCls", action.cfmPwdCls);
        case SET_PHONE_CLS:
            return state.set("phoneCls", action.phoneCls);
        case SET_FORM_RULE:
            return state.set("formRule", action.formRule);


        default: return state;
    }

}
