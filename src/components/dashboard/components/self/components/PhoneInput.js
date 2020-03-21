import React, { memo, useState, useEffect } from 'react';
import {
    ColumnKeyText, ColumnValueText,
    OptionButton, ColumnDesc,
    ColumnSetFlag, ColumnSplitLine,
    Star, InputWarp, OptionTitle, BtnNO, BtnOK
} from '../../../style';

import Mask from './Mask';
import Modify from './Modify';

import Layout from './Layout'
import axios from 'axios'
import { javaApiUrl } from '../../../../../config'
function PhoneInput() {


    //控制手机号修改模态框的显示
    const [show, setShow] = useState(false);
    const [selfName, setSelfName] = useState("");
    const [selfPhone, setSelfPhone] = useState("");
    const [pwd, setSelfPwd] = useState("");
    const [val, setVal] = useState("");

    const _render = () => {
        const userInfo = window.localStorage.getItem("userInfo")
        const { phone, name, password } = JSON.parse(userInfo);

        setSelfPhone(phone)
        setSelfName(name)
        setSelfPwd(password)
    }

    useEffect(() => {
        _render()

    }, [selfName, selfPhone, pwd])

    return (
        <React.Fragment>
            <Layout
                ColumnKeyText={<ColumnKeyText><Star>*</Star>手机号码</ColumnKeyText>}
                ColumnValueText={<ColumnValueText>{selfPhone}</ColumnValueText>}
                ColumnDesc={<ColumnDesc>手机号码是重要的联系方式</ColumnDesc>}
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
                        <OptionTitle>手机号码修改</OptionTitle>
                        <p> <input placeholder="请输入新的手机号码"  onChange={(e) => setVal(e.target.value)} /></p>
                        {/* 手机归属地查询 */}
                        {/* <p> <input placeholder="请输入新密码" /></p> */}
                        <p>
                            <BtnOK onClick={async () => {
                                try {

                                    if (/^1[3456789]\d{9}$/.test(val)) {
                                        await axios.post(`${javaApiUrl}/api/updatePhone`, { name: selfName, phone: val })
                                        setShow(false);
                                        const res = await axios.post(`${javaApiUrl}/api/login`, { name: selfName, password: pwd })

                                        window.localStorage.setItem("userInfo", JSON.stringify(res.data.data));
                                        _render();
                                        setShow(false);
                                        alert("更新成功");
                                    } else {
                                        alert("手机号码格式错误");
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



export default memo(PhoneInput);


