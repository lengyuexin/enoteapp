import React, { memo } from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom'
import { Container, Nav, NavItem, SelfNavMenu, MenuWarp, PlaceBox } from './style'
import Sidebar from './components/sidebar'
import { connect } from 'react-redux'
import { actionCreators } from './store'
import { enoteUrl } from '../../config'
import Article from './components/article'
import Self from './components/self'
import Waterfall from './components/waterfall'
import MyArticle from './components/myArticle'
import Help from './components/help'
import Preview from './components/preview'
import Joke from './components/joke' 
import Soup from './components/soup' 

function Dashboard({
    show,
    setShow,
    html,
    text,
    setHtml,
    setText,
}) {


    const link = (href = "") => () => { window.location.href = `${enoteUrl}/${href}` }


    return (

        <div>

            <Container>
                <Nav >
                    <NavItem style={{ color: "#fff", marginRight: '100px' }}>
                        <span style={{ fontSize: "42px", lineHeight: "55px" }}>enote</span>
                    </NavItem>
                    <NavItem >
                        <span onClick={link()}>首页</span>
                    </NavItem>
                    <NavItem >
                        <span onClick={link("categories/早安分享/")}>早安分享</span>
                    </NavItem>
                    <NavItem >
                        <span onClick={link("categories/晚安分享/")}>晚安分享</span>
                    </NavItem>
                    <NavItem >
                        <span onClick={link("categories/英语基础/")}>英语基础</span>
                    </NavItem>
                    <NavItem
                        onMouseEnter={() => { setShow(true) }}
                        style={{ cursor: "pointer", color: "#fff", position: 'absolute', right: '0', top: '0', width: "141px" }}>
                        <i className='iconfont icon-QWcharts-yonghuming' style={{ opacity: show ? 1 : 0.7 }} />
                    </NavItem>
                </Nav>

                {

                    show && <MenuWarp onMouseLeave={() => { setShow(false) }}>
                        <PlaceBox />
                        <SelfNavMenu>
                            <p onClick={() => { window.location.href = "#/dashboard/self" }}>
                                <i className="iconfont icon-gerenzhongxin"></i>
                                <span>个人中心</span>
                            </p>
                            <p onClick={exit}>
                                <i className="iconfont icon-QWcharts-tuichu"></i>
                                <span>退出</span>
                            </p>
                        </SelfNavMenu>
                    </MenuWarp>
                }


                <Sidebar />

                <Router>
                    <Switch>
                        <Route path="/dashboard/article" >
                            <Article 
                                html={html}
                                text={text}
                                setHtml={setHtml}
                                setText={setText}
                            />
                        </Route>
                        <Route path="/dashboard/self" component={Self} />
                        <Route path="/dashboard/waterfall" component={Waterfall} />
                        <Route path="/dashboard/myArticle" component={MyArticle} />
                        <Route path="/dashboard/help" component={Help} />
                        <Route path="/dashboard/preview/:id" component={Preview} />
                        <Route path="/dashboard/joke" component={Joke} />
                        <Route path="/dashboard/soup" component={Soup} />
                    </Switch>
                </Router>

            </Container>

        </div>



    )
}

function exit() {
    //清除本地存储的用户信息
    window.localStorage.removeItem("userInfo");
    //跳转到登录页
    window.location.href = "#/login";

}



//从全局state中获取数据
const mapStateToProps = (state) => {
    return {
        show: state.get('dashboard').get('show'),
        html: state.get('dashboard').get('html'),
        text: state.get('dashboard').get('text'),

    }

}


//更改状态的调度方法
const mapDispatchToProps = (dispatch) => {
    return {
        setShow(show) {
            dispatch(actionCreators.setShow(show));
        },
        setHtml(html) {
            dispatch(actionCreators.setHtml(html));
        },
        setText(text) {
            dispatch(actionCreators.setText(text));
        },

    }

}
export default connect(mapStateToProps, mapDispatchToProps)(memo(Dashboard));



