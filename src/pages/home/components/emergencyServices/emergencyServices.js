import styled from 'styled-components';
import { Sub, Title } from '../serviceCards/serviceCards';
import {FaRegCreditCard,FaChevronDown,FaArrowRight} from 'react-icons/fa'
import {MdImportantDevices} from 'react-icons/md'
import {AiTwotoneEdit,AiOutlineAccountBook} from 'react-icons/ai'
import animation from '../../../../assets/animation.gif';
import  './emerge.css' 
const Container=styled.div`
width:100%;
height:auto;
background-color:rgb(255,255,255,0.6);
`
const Services=styled.div`
width:80%;
display:flex;
justify-content:space-around;
margin:30px auto;
background:crimson;
@media(max-width:480px){
    display:grid;
    grid-template-columns:1fr 1fr;
    grid-gap:20px;
    width:90%;
    margin:10px ;
    background-color:rgb(0,0,0,0.8);
    
}


`
const IconCon=styled.div`
background-color:white;
width:50px;
height:50px;
border-radius:50%;
display:flex;
align-items:center;
justify-content:center;
font-size:25px;
color:black;
transition:all 0.5s ease;
&:hover{
    color:crimson;
}

`
const Service=styled.div`
    display:flex;
    align-items:center;
    flex-direction:column;
    flex:1;
    gap:15px;
    justify-content:center;
    border-right:3px dashed white; 
    height:160px;
    margin-left:10px;
    background:rgb(226, 218, 218,0.3);
    
`
const ServiceBottom=styled.div`
width:100%;
margin:0 auto;
display:flex;
gap:20px;
padding:20px;
background: #FC5C7D;  /* fallback for old browsers */
background: -webkit-linear-gradient(to right, #6A82FB, #FC5C7D);  /* Chrome 10-25, Safari 5.1-6 */
background: linear-gradient(to right, #6A82FB, #FC5C7D); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
@media(max-width:480px){
    flex-direction:column;
}
`
 const CenterCon= styled.div`
 width:80%;
 margin:20px auto;
 display:flex;
 gap:30px;
 @media (max-width:480px){
 flex-direction:column;
 }
 `
const CardServices=styled.div`
flex:1;
width:80%;
margin:0 auto;
display:flex;
flex-direction:column;
height:280px;
border-colllapse:collapse;
background-color:white;
@media(max-width:480px){
    height:400px;
    width:100%;

`
const Animation=styled.img`
width:600px;
height:300px;
opacity:0.5;
@media(max-width:480px){
    width:100%;

}

`
const CardServiceCon=styled.div`
display:flex;
justify-content:space-between;
width:100%;
flex:1;
align-items:center;
border:1px solid gray;
color:rgb(0,0,0,0.6);
@media(max-width:480px){
    height:70px;
}

`
const ServiceText=styled.div`
padding-left:10px;
`
const ArrowCon=styled.div`
border-left:1px solid rgb(0,0,0,0.3);
font-size:14px;
height:100%;
width:60px;
align-items:center;
justify-content:center;
display:flex;
`
const CardServiceList=[
    "Block card",
    "Generate Card Pin Number",
    "Unblock Card",
    "Reissue lost/stolen card"

]
const serviceList=[
    {text:"Credit-Card related",Icon:FaRegCreditCard,Arrow:FaChevronDown},
    {text:"Mobile/Internet ",Icon:MdImportantDevices},
    {text:"Account-Details Changing",Icon:AiTwotoneEdit},
    {text:"Cheque-book related",Icon:AiOutlineAccountBook}
    
]
const EmergencyService= ()=>{
return(
    <Container >
        <Title>
            Emergency Service Request <span  className="additional-inf"style={{marginLeft:"5px", fontSize:"24px", fontWeight:"400"}}> (for account holders only)   </span>
        </Title>
        <Sub>List of all banking  services all in one place</Sub>
        <Services>
            {serviceList.map(Serv=><Service>
                <IconCon>
                    <Serv.Icon/>
                </IconCon>
                {Serv.text}
                {Serv.Arrow&&<Serv.Arrow/>}
                </Service>)}

        </Services>
        <ServiceBottom>
            <CenterCon>

            <CardServices>
                {CardServiceList.map(serv=><CardServiceCon>
                    <ServiceText>{serv}</ServiceText>
                    <ArrowCon>
                        <FaArrowRight/>
                    </ArrowCon>
                </CardServiceCon>)}
                

            </CardServices>
            <Animation src={animation}/>

            </CenterCon>
        </ServiceBottom>

    </Container>
)
}
export default EmergencyService