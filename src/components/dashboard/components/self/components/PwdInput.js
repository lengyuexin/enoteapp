import React, { memo, useState, useEffect } from 'react';
import {
    ColumnKeyText, ColumnValueText,
    OptionButton, ColumnDesc,
    ColumnSetFlag, ColumnSplitLine,
    Star, InputWarp, OptionTitle, BtnNO, BtnOK
} from '../../../style';

import Mask from './Mask';
import Modify from './Modify';
import { Encrypt } from '../../../../../common'
import axios from 'axios'
import { javaApiUrl } from '../../../../../config'

import Layout from './Layout'


function PwdInput() {


    //控制密码修改模态框的显示
    const [show, setShow] = useState(false);
    const [selfName, setSelfName] = useState("");
    const [pwd, setSelfPwd] = useState("");
    const [val, setVal] = useState("");
    const [checkPwd, setCheckPwd] = useState(false) //原密码校验是否通过

    const _render = () => {
        const userInfo = window.localStorage.getItem("userInfo")
        const { name, password } = JSON.parse(userInfo);

        setSelfName(name)
        setSelfPwd(password)
    }

    useEffect(() => {
        _render()

    }, [selfName, pwd])





    return (
        <React.Fragment>
            <Layout
                ColumnKeyText={<ColumnKeyText><Star>*</Star>密码</ColumnKeyText>}
                ColumnValueText={<ColumnValueText>********</ColumnValueText>}
                ColumnDesc={<ColumnDesc>建议定期更改密码,8-32位不包含空格</ColumnDesc>}
                ColumnSetFlag={<ColumnSetFlag><i className="iconfont icon-QWcharts-yitongguo"> </i>&nbsp;已设置 </ColumnSetFlag>}
                ColumnSplitLine={<ColumnSplitLine />}
                OptionButton={
                    <OptionButton
                        style={{ color: "rgb(68, 116, 255)", cursor: "pointer" }}
                        onClick={() => { setShow(true) }}
                    >修改</OptionButton>}
            />


            {show && <Mask />}

            {show &&

                <Modify>

                    <InputWarp>
                        <OptionTitle>密码修改</OptionTitle>
                        <p> <input placeholder="请输入原密码" type="password" onBlur={(e) => {
                            if (Encrypt(e.target.value) !== pwd) {
                                setCheckPwd(false)
                                alert("原密码错误")
                                return
                            } else {
                                setCheckPwd(true)
                            }

                        }} /></p>
                        <p> <input type="password" placeholder="请输入新密码" onChange={(e) => setVal(e.target.value)} /></p>
                        <p>
                            <BtnOK onClick={async () => {
                                try {

                                    if (checkPwd && /^[0-9a-zA-Z_!@#$%^&*]{8,32}$/.test(val)) {
                                        await axios.post(`${javaApiUrl}/api/updatePwd`, { name: selfName, password: Encrypt(val) })
                                        setShow(false);
                                        await axios.post(`${javaApiUrl}/api/login`, { name: selfName, password: pwd })

                                        setShow(false);
                                        alert("更新成功,请重新登录");
                                        window.location.href = "#/login"
                                    } else {
                                        alert("密码格式错误");
                                        return
                                    }

                                } catch (error) {
                                    console.error(error)
                                    alert("更新失败");
                                }
                            }}>确认</BtnOK>
                            <BtnNO onClick={() => { setShow(false) }}>取消</BtnNO>


                        </p>
                    </InputWarp>

                </Modify>
            }





        </React.Fragment>
    )
}



export default memo(PwdInput);


