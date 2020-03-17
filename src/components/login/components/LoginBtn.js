import React, { memo } from 'react';
import { Encrypt } from '../../../common'
import { debounce } from 'light-func'
import axios from 'axios';

import { javaApiUrl, enoteUrl } from '../../../config'


//检验/登录逻辑
const handleLogin = (name, password) => {

    //判空校验
    if (name === "" || password === "") return alert('账号密码不可为空');

    //格式校验
    const checkname = /^[a-zA-Z0-9_]{1,32}$/.test(name);
    const checkpwd = /^[a-zA-Z0-9_!@#$%^&*]{8,32}$/.test(password);


    if (checkname && checkpwd) {

        axios.post(`${javaApiUrl}/api/login`,
            {
                name: name,
                password: Encrypt(password)
            }
        ).then(res=>{
            const userInfo = res.data.data;
            if(userInfo){
                //存储用户信息
                window.localStorage.setItem("userInfo",JSON.stringify(userInfo));
                //跳转到enote首页
                window.location.href = enoteUrl;
            }else{
                alert("用户名或密码错误");
                window.location.href = "#/login";
            }
        }).catch (err=> {
            console.error(err)
        })

    } else {
        return alert('账号或密码格式错误');
    }
}

//防抖
const LimitHandleLogin = debounce(handleLogin, 100)


function LoginBtn({ name, password, }) {


    if (window.location.hash === "#/login" || window.location.hash === "#/") {
        document.onkeydown = (e) => {
            if (e.keyCode === 13) {
                LimitHandleLogin(name, password)
            }
        }
    } else {
        document.onkeydown = (e) => {

        }
    }

    return (
        <div
            className='submit'
            style={{ cursor: 'pointer' }}
            onClick={() => { LimitHandleLogin(name, password) }}>
            <span>登录</span>
        </div>

    )
}

export default memo(LoginBtn)