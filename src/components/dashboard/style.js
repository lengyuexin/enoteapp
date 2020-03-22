import styled from 'styled-components';

//dashboard-顶部导航外行包裹
export const Container = styled.div`
  background: rgba(241,243,247,1);
  width: 100%;
  height: 100vh;
  padding:60px 0 0 0;
  overflow: auto;
  line-height: 1;
  min-width: 1366px;
  box-sizing:border-box;
`

//dashboard-顶部导航Nav
export const Nav = styled.div`
  width: 100%;
  height:60px;
  display: flex;
  background:rgba(77,86,109,1);
  box-shadow:0px 1px 2px 0px rgba(222,224,229,1);
  position: fixed;
  top:0;
  left:0;
  overflow: hidden;
  z-index: 4;
  box-sizing:border-box;
`
//dashboard-顶部导航NavItem
export const NavItem = styled.div`
  min-width: 72px;
  height:60px;
  font-size:14px;
  padding: 0 22px;
  display: inline-block;
  text-align: center;
  line-height: 60px;
  transition: all 0.2s ease-out;
  box-sizing:border-box;
  color: rgb(179,183,194);

  & span{
    cursor:pointer ;
    &:hover{
      color:#fff;
    }
  }





  i.icon-QWcharts-yonghuming{
    opacity:0.7;
    font-family: "iconfont" !important;
    font-size: 20px;
    font-style: normal;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    &:hover{
      opacity:1;
    }
  }
`
//dashboard-侧边栏
export const Sidebar = styled.div`
float:left;
 width:180px;
 background: #FFFFFF;
 box-shadow: 0 1px 2px 0 #DEE0E5;
 margin-right:16px;
 position:relative;
 box-sizing:border-box;
 height:100%;


`
//dashboard-侧边栏UL
export const UL = styled.ul`
  list-style:none;
  padding:0;
  margin:0;
  margin-top:84px;
  box-sizing:border-box;
  
`
//dashboard-侧边栏LI
export const LI = styled.li`

border-left:2px  solid  #fff;
& a{
  text-decoration:none;
}
box-sizing:border-box;
cursor:pointer;
  width:180px;
  height:34px;
  padding-left:16px;
  
  &.cur{
    border-left:2px  solid  #4474FF;
    & span{
      color: #4474FF;
    }
    & i{
    color:#4474FF;
  }
    background-image: linear-gradient(-45deg, rgba(7,47,222,.1) 0%, rgba(60,157,236,.1) 100%);
  }

 
  & i{
    font-size:14px;
    color:#B5BFCE;
  }
  & span{
    font-family: PingFangSC-Regular;
    font-size: 14px;
    color: #120000;
    line-height: 34px;
    height:34px;
    margin-left:4px;
    display:inline-block;
  }
  
`
//dashboard-侧边栏Avatar
export const Avatar = styled.div`
  text-align: center;
  box-sizing:border-box;
  margin-top:16px;
  position:relative;

  input[type=file]{
    position: absolute;
    width: 100px;
    height: 100px;
    left: 44px;
    top: 10px;
    opacity: 0;
  }
  img{
    width:100px;
    height:100px;
    margin-bottom:10px;
    &:hover{
      transform: rotate(666turn);
      transition-delay: 1s;
      transition-property: all;
      transition-duration: 59s;
      transition-timing-function: cubic-bezier(.34,0,.84,1);
    }
  }
  span {
    font-family: PingFangSC-Regular;
    font-size: 14px;
    color: #4F566B;
  }


`
//右侧主体内容区
export const Main = styled.div`
 float:left;
 width:calc(100% - 206px);
 min-width:1154px;
 height:calc(100% - 32px);
 background: #FFFFFF;
 box-shadow: 0 1px 2px 0 #DEE0E5;
 margin-top:16px;
 overflow-y:auto;
 padding-top:30px;
 box-sizing:border-box;
 /* padding-left:24px; */
 padding-right:-18px;

 &::-webkit-scrollbar {
    width: 6px;
    height: 6px;
}

&::-webkit-scrollbar-thumb {
    background: #333;
    border-radius: 10px;
}

&::-webkit-scrollbar-track {
    background: #fff;
    border-radius: 10px;
}

`
//dashboard-顶部导航右侧个人中心菜单
export const SelfNavMenu = styled.div`
  width:141px;
  height:87px;
  position:absolute;
  right:0;
  top:60px;
  box-shadow: 0 1px 4px 0 #AEB3BE;
  border-radius: 2px; 
  z-index:4; 
  background: #F6F7FB;
  cursor:pointer;
  padding-top:12px;  

  & p{
    width:141px;
    height:30px;
    margin:0;
    padding:0;
 
    font-family: PingFangSC-Regular;
    font-size: 14px;
    letter-spacing: 0;
    line-height: 30px;
    color: #003F00;

    & i{
      font-size: 16px;
      margin: 0 16px;
    }
    
    &:hover{
      color: #4474FF;
      background-image: linear-gradient(-45deg, rgba(7,47,222,.1) 0%, rgba(60,157,236,.1) 100%);
    }
  
  }
`

//dashboard-顶部导航右侧个人中心菜单感应包裹
export const MenuWarp = styled.div`
    width: 141px;
    height: 147px;
    position: absolute;
    box-sizing: border-box;
    right: 0px;
    top: 0px;
    border-radius: 2px;
    z-index: 4;
    cursor: pointer;
`

//dashboard-顶部导航右侧个人中心菜单感应占位
export const PlaceBox = styled.div`
    height: 60px;
    width: 141px;
    color:transparent;
    background-color:transparent;
`

//dashboard-article文章发布按钮
export const Submit = styled.button`
    position: absolute;
    left: 50%;
    top:62px;
    z-index: 4;
    display: inline-block;
    padding: 6px 12px;
    margin-bottom: 0;
    font-size: 14px;
    font-weight: 400;
    line-height: 1.42857143;
    text-align: center;
    white-space: nowrap;
    vertical-align: middle;
    -ms-touch-action: manipulation;
    touch-action: manipulation;
    cursor: pointer;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    background-image: none;
    border: 1px solid transparent;
    border-radius: 4px;
    color: #fff;
    background-color: #337ab7;
    border-color: #2e6da4;
    &:hover{
      background-color: #286090;
      border-color: #204d74;
    }
`

//dashboard-self 个人信息显示标题
export const SelfTitle = styled.span`
    font-family: PingFangSC-Regular;
    font-size: 14px;
    color: #24272E;
    display: inline-block;
    line-height: 22px;
    height: 22px;
    margin:10px 0 20px 20px;
`

//dashboard-self 个人信息显示标题左侧分割线
export const SplitLine = styled.div`
    box-sizing:border-box;
    width: 100%;
    height: 1px;
    background-image: linear-gradient(to right, #DADCE2 0%, #DADCE2 50%, transparent 50%);
    background-size: 10px 1px;
    background-repeat: repeat-x;
`


//dashboard-self 个人信息显示 字段文本键 用户名/密码/个签...
export const ColumnKeyText = styled.div`
    font-family: PingFangSC-Regular;
    font-size: 14px;
    color: #24272E;
    letter-spacing: 0;
    padding-right:22px;
    margin-top:2px;
 
`
//dashboard-self 个人信息显示 字段文本值 tom/+kg/HBHW/ziz9cnz+oy9pQ==/说点什么吧...
export const ColumnValueText = styled.div`
    font-family: PingFangSC-Medium;
    font-size: 14px;
    color: #24272E;
    letter-spacing: 0;
 
`
//dashboard-self 个人信息显示 操作按钮
export const OptionButton = styled.span`
  font-family: PingFangSC-Regular;
  font-size: 14px;
  color: #B5BFCE;
  letter-spacing: 0;
  margin-left: 12px;
  margin-top:2px;
  display:inline-block;

`

//dashboard-self 个人信息显示 字段描述
export const ColumnDesc = styled.span`
    font-family: PingFangSC-Regular;
    font-size: 14px;
    color: #8F99AE;
    letter-spacing: 0;

`

//dashboard-self 个人信息显示 该字段是否设置标识
export const ColumnSetFlag = styled.span`
    font-family: PingFangSC-Regular;
    font-size: 14px;
    color: #6EBC18;
    letter-spacing: 0;
    i {
        color: "#6EBC18";
        font-size: "14px";
        border-radius: "50%";
    }
`
//dashboard-self 个人信息显示 字段是否设置标识与操作按钮之间的分割线
export const ColumnSplitLine = styled.span`
    border: 1px solid #B5BFCE;
    margin-left: 12px;
    height:14px;
    display: inline-block;
`

//dashboard-self 个人信息显示 分割线自适应布局

export const FlexLayout = styled.div`
    display:flex;
    justify-content: center;
    align-items:center;
    height:42px;
    padding:0 40px 0 120px;
`

//dashboard-self 个人信息显示 分割线自适应布局-子项

export const FlexLayoutItem = styled.div`
    width:${props => props.width};
   
`
//dashboard-self 个人信息显示 必添项标识*

export const Star = styled.span`
    font-family: PingFangSC-Regular;
    font-size: 14px;
    color: #EC7373;
    letter-spacing: 0;
    margin-right:4px;
`


//dashboard-self 个人信息显示 密码修改title
export const OptionTitle = styled.div`

    font-family: PingFangSC-Regular;
    font-size: 20px;
    color: #24272E;
    letter-spacing: 0;
    margin:0 auto;
    text-align:center;

`


//dashboard-self 个人信息显示 密码修改输入框包裹
export const InputWarp = styled.div`

    width:320px;
    margin:0 auto;
    padding-top:20px;

 
    & input[type=button]{
        border-radius: 4px;
        font-family: PingFangSC-Regular;
        font-size: 18px;
        letter-spacing: 10px;
        cursor: pointer;
        outline:none;
        user-select:none !important;
        background: #272260;
        color: #fff;
    }

    & input{
        width:320px;
        height:40px;
        padding-left:10px;
        border-radius: 4px; 
        background: #FFFFFF;
        border: 1px solid #BCBAD1;
        border-radius: 4px;
        user-select:all !important;
        margin:16px 0;

        &::-webkit-input-placeholder{
            font-family: PingFangSC-Regular;
            font-size: 14px;
            color: #D7DFEC;
            letter-spacing: 0;
        }
        &::-moz-input-placeholder{
            font-family: PingFangSC-Regular;
            font-size: 14px;
            color: #D7DFEC;
            letter-spacing: 0;
        }
        &::-ms-input-placeholder{
            font-family: PingFangSC-Regular;
            font-size: 14px;
            color: #D7DFEC;
            letter-spacing: 0;
        }
    }





`







//dashboard-self 个人信息显示 修改确认按钮

export const BtnOK = styled.span`
  position:absolute;
  left:40%;
  bottom:30px;
  display:inline-block;
  width:120px;
  height:40px;
  line-height:40px;
  text-align:center;
  background:skyblue;
  margin-left:-80px;
  cursor:pointer;

`

//dashboard-self 个人信息显示 修改取消按钮
export const BtnNO = styled.span`
  position:absolute;
  left:60%;
  bottom:30px;
  display:inline-block;
  width:120px;
  height:40px;
  line-height:40px;
  text-align:center;
  background:#ddd;
  margin-left:-20px;
  cursor:pointer;
`