import styled from 'styled-components';


export const Container = styled.div`
    width:420px;
    height:280px;
    background: #FFFFFF;
    box-shadow: 0 2px 5px 0 #000000;
    border-radius: 4px;
    position:relative;
    z-index:4;
    margin:0 auto;
    margin-top:140px; 
    

& .submit{
    position:absolute;
    bottom:0px;
    text-align:center;
    width:353px;
    height:40px;
    background: #272260;
    border-radius: 4px;
    margin:0 34px 34px 33px;
    padding-top:7px;
    & span{
        font-family: PingFangSC-Regular;
        font-size: 18px;
        color: #FFFFFF;
        letter-spacing: 10px;
    }
}


`
export const TabHead = styled('div')`
    position: relative;
    height:20px;

& span{
    font-family: PingFangSC-Regular;
    font-size: 14px;
    color: #9C97D0;
    letter-spacing: 0;
    position: absolute;
    top:0px;
    right:0px;
    margin-top:16px;
    cursor: pointer;
}

& span.login{
    margin-right:81px;
  
    &.curPage{
        color: #272260;
    }
}
& span.splitLine{
    margin-right:70px;
    width:3px;
    height:14px;
}
& span.register{
    margin-right:34px;
}


`


export const Tbody = styled.div`


    & .usernameInput,& .passwordInput{
    
        width:353px;
        height:41px;
        border: 1px solid #BCBAD1;
        padding-left:40px;
        border-radius: 4px; 
        margin-left:33px;
        margin-top:34px;
        position: relative;
      
        & input{

            width: 313px;
            height: 40px;
            border-left:1px solid #fff;
            border-top:none;
            border-right:  1px solid #BCBAD1;
            border-bottom:1px solid #BCBAD1;
            border-radius: 4px; 
            user-select:all !important;
            outline: none;
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
        & svg{
            position: absolute;
            top:10px;
            left:12px;
            font-size:16px;
        }
    }

    & .passwordInput{
        margin-top:16px;
    }

`
export const TFooter = styled.div`

    color:#000;
    padding:0 34px;

& p{
    font-family: PingFangSC-Regular;
    font-size: 12px;
    color: #27364E;
    letter-spacing: 0;
    margin-top:20px;
    cursor:pointer;
}

& p:first-child{
    float: left;

}
& p:last-child{
    float: right;
    color: #BCBAD1;
}

`


