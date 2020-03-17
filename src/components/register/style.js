import styled from 'styled-components';


export const Container = styled.div`

    width:834px;
    height:508px;
    background: #FFFFFF;
    border-radius: 4px;
    margin:0 auto;
    margin-top:40px;
  

`
export const Title = styled.div`

    font-family: PingFangSC-Regular;
    font-size: 48px;
    color: #24272E;
    letter-spacing: 0;
    margin:0 auto;
    text-align:center;
    margin-top:80px;

`

export const Tip = styled.p`

    width:130px;
    height:20px;
    float:right;
    margin-bottom:16px;

   & span{
        font-family: PingFangSC-Regular;
        font-size: 14px;
        letter-spacing: 0;
        &:first-child{
            color: #272260;
        }
        &:last-child{
            color:#9C97D0;
            cursor: pointer;
        }
    }

`



export const InputWarp = styled.div`

    width:353px;
    margin:0 auto;
    padding-top:20px;

    & .info{
        display:inline-block;
        height:17px;
        font-family: PingFangSC-Regular;
        font-size: 12px;
        color: #4F566B;
        letter-spacing: 0;
        margin-bottom:2px;
        visibility: visible;
     &.warn{
        color:red;
     }
     &.hide{
        visibility: hidden;
     }
    }
    & input[type=button]{
        background: #DADCE2;
        border-radius: 4px;
        font-family: PingFangSC-Regular;
        font-size: 18px;
        color: #8F99AE;
        letter-spacing: 10px;
        cursor: pointer;
        outline:none;
        user-select:none !important;

        &.ok{
            background: #272260;
            color: #fff;
        }
    }

    & input{
        width:353px;
        height:40px;
        padding-left:10px;
        border-radius: 4px; 
        background: #FFFFFF;
        border: 1px solid #BCBAD1;
        border-radius: 4px;
        user-select:all !important;
     
        &.wall{
            margin-bottom:20px;
        }
        &.msg{
            width:201px;
        }

    

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