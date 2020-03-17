import React from 'react';
import { Link } from 'react-router-dom'
import { Sidebar, Avatar, UL, LI, } from '../style'

export default function () {


    const hash = window.location.hash;
    const isArticlePage = hash.includes("/dashboard/article");
    const isSelfPage = hash.includes("/dashboard/self");

    const userInfo=window.localStorage.getItem("userInfo")
    const {name,avatar}=JSON.parse(userInfo)

    return (
        <Sidebar>

            <Avatar>
                <img src={avatar} alt="" />
                <br />
                <span>{name}</span>
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

            </UL>
        </Sidebar>
    )

}



