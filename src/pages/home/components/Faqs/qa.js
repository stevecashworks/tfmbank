import styled from 'styled-components'
import {FaArrowRight} from 'react-icons/fa'
import {useState} from 'react'
const Container=styled.div`
display:flex;
width:100%;
flex-direction:column;
`
const Question=styled.div`
padding:5px;
border-bottom:1px solid rgb(0,0,0,0.2);
display:flex;
align-items:center;
justify-content:space-between;
color:${props=>props.open?"green":"black"};
@media(max-width:480px){

}

`
const  Ans=styled.div`
padding:5px;


`
const Q=styled.p`
font-weight:500;
@media(max-width:480px){
    width:250px;
    padding-left:7px;
}
`
const Qa=({q,a})=>{
    const [open,setOpen]=useState(false);

    return(
        <Container>
            <Question onClick={()=>{setOpen(!open)}}><Q open={open}>{q}</Q> <FaArrowRight style={{transition:"all  0.5s ease ",position:"relative",opacity:"0.5",right:"20px",transform:open?"rotate(90deg)":"rotate(0deg)"}}/></Question>
            {open&&<Ans style={{color:"rgb(0,0,0,0.7"}} open={open}>{a}</Ans>}
        </Container>
    )

}
export default Qa