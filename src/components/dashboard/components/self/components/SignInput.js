import React, { memo, useState, useEffect } from 'react';
import {
    ColumnKeyText, ColumnValueText,
    OptionButton, ColumnDesc,
    ColumnSetFlag, ColumnSplitLine,
    InputWarp, OptionTitle, BtnNO, BtnOK
} from '../../../style';

import Mask from './Mask';
import Modify from './Modify';

import Layout from './Layout'
import axios from 'axios'
import { javaApiUrl } from '../../../../../config'
function SignInput() {




    //控制个性签名修改模态框的显示
    const [show, setShow] = useState(false);
    const [selfName, setSelfName] = useState("");
    const [selfSign, setSelfSign] = useState("");
    const [pwd, setSelfPwd] = useState("");
    const [val, setVal] = useState("");

    const _render = () => {
        const userInfo = window.localStorage.getItem("userInfo")
        const { sign, name,password } = JSON.parse(userInfo);

        setSelfName(name)
        setSelfSign(sign)
        setSelfPwd(password)
    }

    useEffect(() => {
        _render()

    }, [selfName, selfSign,pwd])





    return (
        <React.Fragment>
            <Layout
                ColumnKeyText={<ColumnKeyText>个性签名</ColumnKeyText>}
                ColumnValueText={<ColumnValueText>{selfSign}</ColumnValueText>}
                ColumnDesc={<ColumnDesc>留下你的个性签名吧</ColumnDesc>}
                ColumnSetFlag={<ColumnSetFlag><i style={{ color: `${selfSign ? "#6EBC18" : "#EC7373"}` }} className={selfSign ? "iconfont icon-QWcharts-yitongguo" : "iconfont icon-QWcharts-weitongguo"}> </i>&nbsp;{selfSign ? "已设置" : "未设置"} </ColumnSetFlag>}
                ColumnSplitLine={<ColumnSplitLine />}
                OptionButton={
                    <OptionButton
                        style={{ color: "rgb(68, 116, 255)", cursor: "pointer" }}
                        onClick={() => { setShow(true) }}
                    >修改</OptionButton>}
            />


            {show && <Mask />}

            {show &&

                <Modify >

                    <InputWarp>
                        <OptionTitle>个性签名修改</OptionTitle>
                        <p> <input placeholder="请输入新的个性签名"
                            onChange={(e) => setVal(e.target.value)}
                        /></p>
                        {/* 下拉搜索框 */}
                        {/* <p> <input placeholder="请输入新密码" /></p> */}
                        <p>
                            <BtnOK onClick={async () => {
                                try {
                                    await axios.post(`${javaApiUrl}/api/updateSign`, { name: selfName, sign: val })
                                    setShow(false);
                                    const res = await axios.post(`${javaApiUrl}/api/login`, { name: selfName,password:pwd })
                                   
                                    window.localStorage.setItem("userInfo", JSON.stringify(res.data.data));
                                    _render();
                                    setShow(false);
                                    alert("更新成功");
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



export default memo(SignInput);


