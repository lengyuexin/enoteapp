import React, { memo, useState } from 'react';
import {
    ColumnKeyText, ColumnValueText,
    OptionButton, ColumnDesc,
    ColumnSetFlag, ColumnSplitLine,
     InputWarp, OptionTitle
} from '../../../style';

import Mask from './Mask';
import Modify from './Modify';

import Layout from './Layout'


function SignInput() {


    const userInfo = window.localStorage.getItem("userInfo")
    const { sign } = JSON.parse(userInfo);

    //控制个性签名修改模态框的显示
    const [show, setShow] = useState(false);




    return (
        <React.Fragment>
            <Layout
                ColumnKeyText={<ColumnKeyText>个性签名</ColumnKeyText>}
                ColumnValueText={<ColumnValueText>{sign}</ColumnValueText>}
                ColumnDesc={<ColumnDesc>留下你的个性签名吧</ColumnDesc>}
                ColumnSetFlag={<ColumnSetFlag><i  style={{color:`${sign?"#6EBC18":"#EC7373"}`}} className={sign ? "iconfont icon-QWcharts-yitongguo" : "iconfont icon-QWcharts-weitongguo"}> </i>&nbsp;{sign ? "已设置" : "未设置"} </ColumnSetFlag>}
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
                        <OptionTitle>个性签名修改</OptionTitle>
                        <p> <input placeholder="请输入新的格性签名" /></p>
                        {/* 下拉搜索框 */}
                        {/* <p> <input placeholder="请输入新密码" /></p> */}
                        <p> <input onClick={() => { alert("修改成功"); setShow(false) }} type="button" value="确认修改" /></p>
                    </InputWarp>

                </Modify>
            }





        </React.Fragment>
    )
}



export default memo(SignInput);


