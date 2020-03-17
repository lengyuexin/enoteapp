import React from 'react';
import Panel from './components/Panel'
import Background from './components/Background'


export default class Login extends React.PureComponent {

    componentDidMount() {
        Background();
        document.body.style = "background: rgb(8, 5, 16);font: 16px/1.4 'Lato', sans-serif;    color: #fefeff;-webkit-font-smoothing: antialiased;"
    }


    render() {
        return (
            <div >
                <div id="container">
                    <h1 id="h1" className="transition-in">enote English Study Source Website</h1>
                    <h2 id="h2" >一个帮助英语爱好者快速成长的网站</h2>
                </div>
                <canvas id="canvas" width="1670" height="629"></canvas>
                <Panel />
            </div>
        )
    }

    componentWillUnmount() {
        var location = window.location.href.split("/");

        var curPage = location[location.length - 1];
        if (curPage === "register" || window.location.href.includes("back")) {
            document.body.style = "background:rgb(241,243,247);"
        } else {
            document.body.style = ""
        }
    }

}


