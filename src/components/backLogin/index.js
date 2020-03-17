import React, { useEffect } from 'react';

import { Container, InputWarp, Title, ResetText } from './style';

export default function (props) {


    const { type } = props.match.params;



    document.body.style = "background:rgb(241,243,247);"
    useEffect(() => {
        return () => {
            if (window.location.href.includes("backLogin")) {
                document.body.style = "background:rgb(241,243,247);"
            } else {
                document.body.style = ""
            }
        }
    }, [])

    return (
        <Container>
            <InputWarp>

                {type==="forget" &&
                    <React.Fragment>
                        <Title>找回密码</Title>
                        <ResetText>请联系管理员重置</ResetText>
                    </React.Fragment>
                }

                {type==="register" &&
                    <React.Fragment>
                        <Title>恭喜你，注册成功！！</Title>
                    </React.Fragment>
                }


                <input
                    type="button"
                    value={type==="register"?"马上登录":"返回登录页面"}
                    onClick={() => {
                        window.location.href = "#/login"
                    }}
                />
            </InputWarp>
        </Container>

    )
}


