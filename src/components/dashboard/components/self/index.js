import React, { memo } from 'react'
import { Main, SelfTitle, SplitLine } from '../../style'

import NameInput from './components/NameInput'
import PwdInput from './components/PwdInput'
import SignInput from './components/SignInput'
import PhoneInput from './components/PhoneInput'


function Self() {


    return (
        <Main>
            <SelfTitle>基本信息</SelfTitle>
            <SplitLine />

            <NameInput />
            <SplitLine />

            <PwdInput
            />
            <SplitLine />

            <SignInput
            />
            <SplitLine />


            <SelfTitle>联系方式</SelfTitle>
            <SplitLine />
            <PhoneInput
            />
            <SplitLine />


        </Main>
    )

}

export default memo(Self)