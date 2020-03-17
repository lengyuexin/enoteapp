import React, { memo, useState } from 'react';
import {
    ColumnKeyText, ColumnValueText,
    OptionButton, ColumnDesc,
    ColumnSetFlag, ColumnSplitLine,
    Star, InputWarp, OptionTitle
} from '../../../style';

import Mask from './Mask';
import Modify from './Modify';

import Layout from './Layout'


function PhoneInput() {


    //控制个性签名修改模态框的显示
    const [show, setShow] = useState(false);


    const userInfo = window.localStorage.getItem("userInfo")
    const { phone } = JSON.parse(userInfo);

    return (
        <React.Fragment>
            <Layout
                ColumnKeyText={<ColumnKeyText><Star>*</Star>手机号码</ColumnKeyText>}
                ColumnValueText={<ColumnValueText>{phone}</ColumnValueText>}
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
                        <p> <input placeholder="请输入新的手机号码" /></p>
                        {/* 手机归属地查询 */}
                        {/* <p> <input placeholder="请输入新密码" /></p> */}
                        <p> <input onClick={() => { alert("修改成功"); setShow(false) }} type="button" value="确认修改" /></p>
                    </InputWarp>

                </Modify>
            }





        </React.Fragment>
    )
}



export default memo(PhoneInput);


