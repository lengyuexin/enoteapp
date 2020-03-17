import styled from 'styled-components';


export const Container = styled.div`

    width:834px;
    height:332px;
    background: #FFFFFF;
    border-radius: 4px;
    margin:124px auto 100px auto;   
 
  

`
export const Title = styled.div`

font-family: PingFangSC-Regular;
font-size: 24px;
color: #24272E;
letter-spacing: 0;
margin:72px auto 23px auto; 
text-align:center;

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

  
    & input{
        border-radius: 4px;
        font-family: PingFangSC-Regular;
        font-size: 18px;
        letter-spacing: 10px;
        cursor: pointer;
        outline:none;
        user-select:none !important;
        background: #272260;
        color:#fff;
        width:353px;
        height:40px;
        padding-left:10px;
        border: 1px solid #BCBAD1;
    }

`


export const ResetText = styled.p`
    font-family: PingFangSC-Regular;
    font-size: 18px;
    color: #24272E;
    letter-spacing: 0;
    margin:-12px 0px 34px 0px;
    text-align:center;
`