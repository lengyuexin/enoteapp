import React, { memo, useEffect, useState } from 'react'

import { Main, ColumnSetFlag } from '../style'

import { javaApiUrl } from '../../../config'
import axios from 'axios'


function MyArticle() {


  const [list, setList] = useState([]);

  useEffect(() => {

    _render()

  }, [])


  const _render = () => {
    axios.post(`${javaApiUrl}/api/findArticlesByAuthor`, {
      author: JSON.parse(window.localStorage.getItem("userInfo")).name
    }).then(res => {
      setList(res.data.data)
    }).catch(err => {
      console.log(err)
    })
  }

  return (
    <Main style={{ padding: "20px" }}>
      {
        list.map((item, key) => {
          return (
            <div key={key} style={{ display: "flex", justifyContent: "space-between" }}>
              <div style={{ height: "60px", }} >
                {item.title}
              </div>
              <div style={{ height: "60px" }} >
                <ColumnSetFlag>

                  {
                    item.state === "0" && (
                      <React.Fragment>
                        <i style={{ color: "#ff9933" }} className="iconfont icon-QWcharts-daishenhe" />
                        <span style={{ color: "#000" }} >&nbsp;待审核</span>
                      </React.Fragment>)
                  }
                  {
                    item.state === "1" && (
                      <React.Fragment>
                        <i style={{ color: "red" }} className="iconfont icon-QWcharts-weitongguo" />
                        <span style={{ color: "#000" }} >&nbsp;未通过</span>
                      </React.Fragment>
                    )

                  }
                  {
                    item.state === "2" &&
                    (<React.Fragment>
                      <i className="iconfont icon-QWcharts-yitongguo" />
                      <span style={{ color: "#000", marginRight: "6px" }}>&nbsp;已通过</span>
                    </React.Fragment>
                    )
                  }

                  <i style={{ color: "red" }} className="iconfont  icon-QWcharts-shanchu1" />
                  <span

                    onClick={() => {
                      if (window.confirm("确定删除吗？")) {
                        axios.post(`${javaApiUrl}/api/deleteById`, { id: item.id }).then(() => {
                          _render()
                          alert("删除成功");
                        }).catch(err => {
                          console.error(err)
                          alert("删除失败");
                        })
                      }
                    }}

                    style={{ color: "#000", cursor: "pointer" }}>&nbsp;删除</span>
                </ColumnSetFlag>


              </div>


            </div>
          )
        })
      }


    </Main>
  )
}

export default memo(MyArticle)