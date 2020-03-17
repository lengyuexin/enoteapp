import React, { useEffect } from 'react';

import { Container, InputWarp, Title, ResetText } from './style';
import {nodeApiUrl} from '../../config'
export default function () {

    const userInfo=window.localStorage.getItem("userInfo");

    if(userInfo){
        window.location.href=`${nodeApiUrl}/write`;
        return
    } 



    document.body.style = "background:rgb(241,243,247);"
    useEffect(() => {
        return () => {
            if (window.location.href.includes("checkWrite")) {
                document.body.style = "background:rgb(241,243,247);"
            } else {
                document.body.style = ""
            }
        }
    }, [])

    return (
        <Container>
            <InputWarp>

                <React.Fragment>
                    <Title>写文章</Title>
                    <ResetText>登录后才可写文章</ResetText>
                </React.Fragment>

                <input
                    type="button"
                    value={"马上登录"}
                    onClick={() => {
                        window.location.href = "#/login"
                    }}
                />
            </InputWarp>
        </Container>

    )
}


