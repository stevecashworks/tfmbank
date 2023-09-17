 import styled from "styled-components"
import {MdSavings,MdAccountBalanceWallet} from 'react-icons/md'
import {BiMoneyWithdraw} from 'react-icons/bi' 
import {GrScorecard} from 'react-icons/gr'
import {GiThreePointedShuriken} from 'react-icons/gi'
import  {ResponsiveContainer,ComposedChart,XAxis,YAxis,Tooltip,Legend,CartesianGrid,Area,Bar,Line} from 'recharts'

const  Container=styled.div`
 width:60%;
 height:450px;
 display:flex;
 margin:0 auto;
 gap:15px;
 `
 const Left= styled.div`
 flex:2;
 height:100%;
 background-color:rgb(194, 188, 188,0.2);
 display:flex;
 flex-direction:column;
 `

 const Right=styled.div`
 flex:1;
 height:100%;
 background-color:rgb(194, 188, 188, 0.4);
`
const Top=styled.div`
display:flex;
height:40%;
width:100%;
justify-content:center;
gap:20px;
align-items:center;
`
const  Bottom=styled.div`
height:60%;
width:100%;

`
const CardCon=styled.div`
   display:flex;
   background-color:white;
   width:130px;
   height:130px;
   border-radius:5px;
   flex-direction:column;


`
const Stat_Card_Top_Con= styled.div`
display:flex;
box-sizing:border-box:
padding:15px;
width:100%;
justify-content:space-between;
align-items:center;

`
const  Stat_Card_Top_Icon_Container=styled.div`
display:flex;
height:30px;
width:30px;
align-items:center;
justify-content:center;
border-radius:50%;
background-color:rgb(194, 188, 188,0.4);
background-color:blueviolet;
`
const Card_Title=styled.div`
margin:10px;
font-size:13px;
font-weight:400;
text-transform:capitalize; 
&:after{
   content:" : "
}


`
const  Value_Con= styled.div`
margin:10px;
&:before{
   content:"$"
}

`
const data = [
   {
     "name": "Page A",
     "uv": 4000,
     "pv": 2400,
     "amt": 2400
   },
   {
     "name": "Page B",
     "uv": 3000,
     "pv": 1398,
     "amt": 2210
   },
   {
     "name": "Page C",
     "uv": 2000,
     "pv": 9800,
     "amt": 2290
   },
   {
     "name": "Page D",
     "uv": 2780,
     "pv": 3908,
     "amt": 2000
   },
   {
     "name": "Page E",
     "uv": 1890,
     "pv": 4800,
     "amt": 2181
   },
   {
     "name": "Page F",
     "uv": 2390,
     "pv": 3800,
     "amt": 2500
   },
   {
     "name": "Page G",
     "uv": 3490,
     "pv": 4300,
     "amt": 2100
   }
 ]
 

                            
 
                             
 
const card_details= [{card_title:"total balance",Icon:MdAccountBalanceWallet},{card_title:"Total saved",Icon:MdSavings},{card_title:"Total spent",Icon:BiMoneyWithdraw},{card_title:"Credit Score",Icon:GrScorecard}]
const Card=({card_title,value, Icon})=>{
 return(
    <CardCon>
      <Stat_Card_Top_Con>
         
         <Stat_Card_Top_Icon_Container  style={{marginLeft:"10px",marginTop:"10px"}}>
            
            <Icon color="white" style={{color:"white"}}/>
         
         </Stat_Card_Top_Icon_Container>
            <GiThreePointedShuriken style={{marginRight:"10px",marginTop:"10px"}}/>

      </Stat_Card_Top_Con>
      <Card_Title>
         {card_title} 
         </Card_Title>
         <Value_Con>{value||"0"}</Value_Con>

    </CardCon>
 )
}
 const Stats= ()=>{
 return(
    <Container>
        <Left>
        <Top>
         {card_details.map(card=>{return(
            <Card {...card}>

            </Card>
         )})}
        </Top>
        <Bottom>
        <ResponsiveContainer>
        <ComposedChart width={730} height={250} data={data}>
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <CartesianGrid stroke="#f5f5f5" />
        <Area type="monotone" dataKey="amt" fill="#8884d8" stroke="#8884d8" />
        <Bar dataKey="pv" barSize={20} fill="#413ea0" />
        <Line type="monotone" dataKey="uv" stroke="#ff7300" />
      </ComposedChart>
     </ResponsiveContainer>

        </Bottom>
        </Left>
 
    </Container>
 )
 }
 export default Stats