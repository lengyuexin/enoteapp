import React, { useCallback, memo } from 'react';
import { Container, TabHead, Tbody, TFooter } from '../style'
import LoginBtn from './LoginBtn'
import UsernameInput from './UsernameInput'
import PasswordInput from './PasswordInput'

import { connect } from 'react-redux'
import { actionCreators } from '../store'

function Panel({
    name,
    password,
    setName,
    setPWD,
 
}) {


    //公共跳转函数
    const link = href => () => window.location.href = `#/${href}`;

    //缓存传递给子组件的setName，setPWD 减少不必要的渲染

    const ucbSetName = useCallback(setName, [name])
    const ucbSetPWD = useCallback(setPWD, [password])


    return (


        <Container >
            <TabHead>
                <span className="login curPage" onClick={link("login")} >登录</span>
                <span className="splitLine">|</span>
                <span className="register" onClick={link("register")}>注册</span>
            </TabHead>
            <Tbody>
                <UsernameInput
                    name={name}
                    setName={ucbSetName}
                />
                <PasswordInput
                    password={password}
                    setPWD={ucbSetPWD}
                />
            </Tbody>
            <TFooter>
                <p onClick={link("back/forget")}>忘记密码?</p>
            </TFooter>
            <LoginBtn
                name={name}
                password={password}
            />
        </Container>

    )
}



//从全局state中获取数据
const mapStateToProps = (state) => {
    return {
        name: state.get('login').get('name'),
        password: state.getIn(['login', 'password']),
       
    }

}

//更改状态的调度方法
const mapDispatchToProps = (dispatch) => {
    return {
        setName(name) {
            dispatch(actionCreators.setName(name));
        },
        setPWD(password) {
            dispatch(actionCreators.setPWD(password));
        },
      
    }

}
export default connect(mapStateToProps, mapDispatchToProps)(memo(Panel));



