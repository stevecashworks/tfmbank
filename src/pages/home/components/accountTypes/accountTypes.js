import styled from 'styled-components';
import Card from './Card'
import responsive from '../../../../responsive.ts'
const Con=styled.div`
 width:100%;
 height: 600px;
 ${responsive('mobile',{height:"auto"})}

 `
const Title=styled.h2`
 opacity:0.7;
 text-align:center;
  ${responsive("mobile",{margin:"15px auto", width:"95%"})}
   `
const Sub=styled.h4`
opacity:0.4;
text-align:center;
dipslay:block;
margin:15px  auto;
`
const Cards=styled.div`
width:100%;
flex-wrap:wrap;
display:flex;
justify-content:space-around;
@media(max-width:480px){
    flex-direction:column;
    gap:15px;
    align-items:center;
    margin-bottom:10px;
}

`


const AccountTypes=()=>{
return (
    <Con>
        <Title>
            TFM: Banking Has Never Been  Easier
        </Title>
        <Sub>What's On The  Menu?</Sub>
        <Cards>
            <Card title="Current Account" text="Stay up-to-date with your transactions."/>
            <Card title="Savings Account" text="Secure your future with a savings account "/>
            <Card title="Checking Account" text="Manage your finances with ease."/>
        </Cards>

    </Con>
        
)
}
export  default AccountTypes