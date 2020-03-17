import React, { useEffect,memo } from 'react';
import { Title } from './style'
import Panel from './components/Panel'


function Register() {

    document.body.style = "background:rgb(241,243,247);"
    useEffect(() => {
        return () => {
            var location = window.location.href.split("/");
            if (location.includes("back")) {
                document.body.style = "background:rgb(241,243,247);"
            } else {
                document.body.style = ""
            }

        }
    }, [])

    return (
        <div>
            <Title>欢迎注册enote账号</Title>
            <Panel />
        </div>
    )
}


export default memo(Register)