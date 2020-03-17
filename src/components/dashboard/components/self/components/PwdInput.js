import React, { memo, useState } from 'react';
import {
    ColumnKeyText, ColumnValueText,
    OptionButton, ColumnDesc,
    ColumnSetFlag, ColumnSplitLine,
    Star, InputWarp, OptionTitle
} from '../../../style';

import Mask from './Mask';
import Modify from './Modify';
// import { Encrypt } from '../../../../../common'

import Layout from './Layout'


function PwdInput() {


    //控制密码修改模态框的显示
    const [show, setShow] = useState(false);




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
                        <p> <input placeholder="请输入原密码" /></p>
                        <p> <input placeholder="请输入新密码" /></p>
                        <p> <input onClick={()=>{alert("修改成功"); setShow(false)}} type="button" value="确认修改" /></p>
                    </InputWarp>

                </Modify>
            }





        </React.Fragment>
    )
}



export default memo(PwdInput);


