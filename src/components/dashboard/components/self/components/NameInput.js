import React, { memo } from 'react';
import {
    ColumnKeyText, ColumnValueText,
    OptionButton, ColumnDesc,
    ColumnSetFlag, ColumnSplitLine, Star
} from '../../../style';


import Layout from './Layout'



function NameInput() {

    const userInfo = window.localStorage.getItem("userInfo")
    const { name } = JSON.parse(userInfo);


    return (
        <Layout
            ColumnKeyText={<ColumnKeyText><Star>*</Star>账号</ColumnKeyText>}
            ColumnValueText={<ColumnValueText>&nbsp;&nbsp;{name}</ColumnValueText>}
            ColumnDesc={<ColumnDesc> 账号唯一且不可修改，可以直接用于登录</ColumnDesc>}
            ColumnSetFlag={<ColumnSetFlag> <i className="iconfont icon-QWcharts-yitongguo"></i>&nbsp;已设置 </ColumnSetFlag>}
            ColumnSplitLine={<ColumnSplitLine />}
            OptionButton={<OptionButton style={{ cursor: "not-allowed" }}>不可修改 </OptionButton>}
        />
    )
}





export default memo(NameInput)
