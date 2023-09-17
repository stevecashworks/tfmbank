import { BiSearch ,BiMoon,BiTransferAlt} from 'react-icons/bi';
import avatar from '../../../../../assets/avatar.jpg'
import {AiOutlineSafetyCertificate} from 'react-icons/ai'
import styled from 'styled-components';
import {RiTyphoonLine} from 'react-icons/ri'
const Container=styled.div`
background-color:white;
padding-left:5px;
height:80px;
display:flex;
width:100%;
align-items:center;
justify-content:space-between;
`
const InputContainer=styled.div`
 display:flex;
 padding-left:5px;
 border-radius:5px;
 align-items:center;
 width:200px;
height:30px;
border: 1px solid rgb(123,23,23,0.2);
`
const Input =styled.input`
width:180px;
height:25px;
border:none;
outline:none;
 font-size:13px;
 padding-left:5px;
` 
const  ToolBar= styled.div`
display:flex;
align-items:center;
gap:8px;

`
const TransferButton=styled.button`
display:flex;
gap:5px;
height:35px;
width:150px;
justify-content:center;
align-items:center;
border:0.5px solid rgb(42, 42, 172);
background-color:rgb(42, 42, 172);
background-color:white;
color:rgb(42, 42, 172); 
border-radius:8px;
transition all 0.5s ease;
cursor:pointer;
&:hover{
    color:white;
    background-color:rgb(42, 42, 172);
}

`
const AvatarImage=styled.img` 
width:30px;
height:30px;
border-radius:50%;
margin-left:25px;
`
const Header=()=>{
    return(
        <Container>
            <InputContainer>
            <BiSearch color="gray"/>
            <Input placeholder="Search..."/>
            </InputContainer>
            <ToolBar>
                <AiOutlineSafetyCertificate color="gray"/>
                <BiMoon color="gray"/>
                <RiTyphoonLine color="gray"/>
                <AvatarImage src={avatar}/> 
            </ToolBar>
            <TransferButton>
                Transfer
                <BiTransferAlt/>
            </TransferButton>

        </Container>

    )
}
export default Header 