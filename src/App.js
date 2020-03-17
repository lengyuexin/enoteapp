import React from 'react'
import {
  HashRouter as Router,
  Route,
  Switch,
  Redirect
} from "react-router-dom";

import {
  Login,
  Register,
  BackLogin,
  CheckWrite,
  Dashboard
  // Platform, ,

}
  from './components'






function App() {


  // const ForbidPage = () => <div style={{ fontSize: "24px" }}>403 forbid access!</div>

  // const PrivateRoute = ({ children, ...rest }) => {
  //   let { path } = rest;

  //   let auth;



  //   if (!permUrlList) {
  //     auth = false
  //     window.location.href = "#/"
  //   } else {
  //     let pl = permUrlList.split(",");
  //     auth = pl.some(item => {
  //       return path.startsWith(item)
  //     })
  //   }
  //   return <Route {...rest} render={() => auth ? children : <ForbidPage />} />

  // }


  const RedirectLogin = () => {
    window.location.href = "#/login"
    return null
  }
  return (
    <div>
      <Router>
        <Switch>
          {/* 首页默认为登录 */}
          <Route exact path="/" component={RedirectLogin} />

          {/* 404页面 */}
          <Route path="/error" component={"404 not found"} />

          {/* 登录页+注册页+密码找回页 无需认证 */}

          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
          <Route path="/checkWrite" component={CheckWrite} />
          <Route path="/dashboard" component={Dashboard} />


          <Route path="/back/:type" component={BackLogin} />



          {/* <Route path="/dashboard/proMana"><Dashboard /></Route>
            <Route path="/dashboard/personalCenter"  ><Dashboard /></Route> */}

          {/* 注册成功后返回登录 */}
          {/* <Route path="/returnLogin" > <ReturnLogin /></Route> */}


          {/* 工作台首页-项目看板-新建配置开发页 */}
          {/* <PrivateRoute  path="/platform/index" ><Platform /></PrivateRoute>
            <PrivateRoute  path="/platform/project" ><Platform /></PrivateRoute>
            <PrivateRoute  path="/platform/workbetch" ><Platform /></PrivateRoute> */}

          <Redirect from="/*" to="/error" />
        </Switch>
      </Router>
    </div>
  )
}

export default App
