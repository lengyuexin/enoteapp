import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'
import { Sidebar, Avatar, UL, LI, } from '../style'
import { nodeApiUrl, javaApiUrl } from '../../../config'
import axios from 'axios'
export default function () {


    const hash = window.location.hash;
    const isArticlePage = hash.includes("/dashboard/article");
    const isSelfPage = hash.includes("/dashboard/self");
    const isWaterfallPage = hash.includes("/dashboard/waterfall");
    const ismyArticlePage = hash.includes("/dashboard/myArticle");
    const isHelpPage = hash.includes("/dashboard/help");
    const isJokePage = hash.includes("/dashboard/joke");
    const isSoupPage = hash.includes("/dashboard/soup");

    const [selfName, setSelfName] = useState("");
    const [selfAvatar, setSelfAvatar] = useState("");
    const [pwd, setSelfPwd] = useState("");

    useEffect(() => {
        _render()
    }, [selfAvatar, selfName, pwd])


    const _render = () => {
        const userInfo = window.localStorage.getItem("userInfo")
        const { name, avatar, password } = JSON.parse(userInfo);

        setSelfName(name)
        setSelfPwd(password)
        setSelfAvatar(avatar)
    }

    return (
        <Sidebar>

            <Avatar>

                <img src={`${nodeApiUrl}${selfAvatar}`} alt="" />
                <form id="avatar-form">
                    <input type="file" name="file" onChange={() => {

                        try {
                            const fd = new FormData(document.getElementById("avatar-form"));
                            const xhr = new XMLHttpRequest();
                            xhr.open("post", `${nodeApiUrl}/api/uploadFiles`);
                            xhr.send(fd);
                            xhr.onload = () => {
                                const src = JSON.parse(xhr.responseText).data;
                                axios.post(`${javaApiUrl}/api/updateAvatar`,
                                    { name: selfName, avatar: `/img/${src}` }).then(() => {
                                        axios.post(`${javaApiUrl}/api/login`,
                                            { name: selfName, password: pwd }).then(res => {
                                                window.localStorage.setItem("userInfo", JSON.stringify(res.data.data));
                                                _render();
                                                alert("上传成功")
                                            })
                                    }).catch(err => {
                                        console.error(err)
                                        alert("上传失败")
                                    })



                            }




                        } catch (error) {
                            console.error(error)
                        }

                    }} />
                </form>

                <br />
                <span>{selfName}</span>
            </Avatar>
            <UL>
                <LI className={isSelfPage && "cur"}>
                    <Link to="/dashboard/self">
                        <i className="iconfont icon-SZDP-caijigongdanxiafa"></i>
                        <span>基本信息</span>
                    </Link>
                </LI>
                <LI className={isArticlePage && "cur"} >
                    <Link to="/dashboard/article">
                        <i className="iconfont icon-QWcharts-zongxiangmushu"></i>
                        <span>文章编写</span>
                    </Link>
                </LI>
                <LI className={isWaterfallPage && "cur"} >
                    <Link to={`/dashboard/waterfall`}>
                        <i className="iconfont icon-buju"></i>
                        <span>签到打卡</span>
                    </Link>
                </LI>
                <LI className={ismyArticlePage && "cur"} >
                    <Link to={`/dashboard/myArticle`}>
                        <i className="iconfont icon-wendang"></i>
                        <span>我的文章</span>
                    </Link>
                </LI>
                <LI className={isHelpPage && "cur"} >
                    <Link to={`/dashboard/help`}>
                        <i className="iconfont icon-ku"></i>
                        <span>使用示例</span>
                    </Link>
                </LI>
                <LI className={isJokePage && "cur"} >
                    <Link to={`/dashboard/joke`}>
                        <i className="iconfont icon-huangguan"></i>
                        <span>开心一刻</span>
                    </Link>
                </LI>
                <LI className={isSoupPage && "cur"} >
                    <Link to={`/dashboard/soup`}>
                        <i className="iconfont icon-SZDP-gongdanjieguofankui"></i>
                        <span>剧毒鸡汤</span>
                    </Link>
                </LI>
 
            </UL>
        </Sidebar>
    )

}



