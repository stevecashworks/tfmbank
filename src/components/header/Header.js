import  styled from "styled-components"
import logo from '../../assets/logo1.png'
import { Link } from "react-router-dom"
import {BiChevronDown} from 'react-icons/bi';
import {useState} from 'react';
import './header.css';
import { BiRightArrow } from "react-icons/bi";
import { MdOutlineMenu } from "react-icons/md";
import { toggleMenu } from "../../state/slices/appSlice";
import { useDispatch } from "react-redux";

const HeadCon=styled.div`
width:100%;
display:flex;
height:70px;
border-bottom:1px solid gray;
padding:20px auto;
justify-content: space-between;
align-items:center;
position:fixed;
top:0;
z-index:4;
background-color:white;
`
const Logo= styled.img`
width:200px;
margin-left:40px;

`
const Ham=styled .div`
display:none;
margin-right:30px;
@media(max-width:480px){
    display:block;
}
`
const Nav= styled.ul`
display:flex;
gap:10px;
@media (max-width:480px){
    display:none;
}
`
const NavItem=styled.li`
list-style-type:none;


`
const Anc=styled.a`
cursor:pointer;
color:black;
text-decoration:none;
font-weight:500;
font-size:14px;
display:flex;
 align-items:center;
 width:120px;

`
const Btn=styled.button`
width:190px;
border-radius:5px;
height:40px;
background-color:crimson;
color:white;
font-weight:700;
border:none;
margin-right:40px;
display:flex;
align-items:center;
justify-content:center;
gap: 10px;
@media(max-width:480px){
    display:none;
}

`
const Anch=styled.a`
height:30px;
text-decoration:none;
color:rgb(0,0,0,0.8);
display:block;
padding-left:15px;
font-weight:bold;
transition:all 0.5s ease;
position:relative;
&:hover{
    color:white
}
&::before{
    content:"";
    position:absolute;
    background-color:crimson;
    width:100%;
    height:100%;
    top:0;
    left:0;
    z-index:-1;
    transition:all 0.5s ease;
    transform:scaleX(0);
    transform-origin:left;

}
&:hover::before{
    transform:scaleX(1)
}
`
const Title=styled.h3`

`

const Header=()=>{
    const dispatch=useDispatch()
    const [aboutOpen,setAboutOpen]= useState(false)
return(
    <HeadCon>
        <Logo src={logo}/>
        <Nav>

            <NavItem>
                <Anc href="#">Home</Anc>
            </NavItem>

            <NavItem id='about-link' onClick={()=>{setAboutOpen(!aboutOpen)}} onMouseOver={()=>{setAboutOpen(true)}} onMouseLeave={()=>{ setTimeout(()=>{setAboutOpen(false)},5000)}}>

                <Anc  href="#">About
                <BiChevronDown  style={{marginLeft:'7px'}}/>
                </Anc>
                {

                aboutOpen&&  <div className="dropDown"onMouseOver={()=>{setAboutOpen(true)}} onMouseLeave={()=>{ setTimeout(()=>{setAboutOpen(false)},5000)}}>

                <Anch  href="#">About  us
                </Anch>
                <Anch  href="#">Contact Us

                </Anch>
                </div>
                }
                </NavItem>
                <NavItem>
                <Anc href="#faqs">FAQs</Anc>
            </NavItem>
            <NavItem>
                <Anc href="#services">Services</Anc>
            </NavItem>

        </Nav>
        <Link style={{textDecoration:"none"}} to="/register">

        <Btn className="btn">Join Us <BiRightArrow fill="white"/> </Btn>
        </Link>
        <Ham onClick={()=>{dispatch(toggleMenu())}}>

                <MdOutlineMenu style={{fontSize:"30px"}}/>
        </Ham>
    </HeadCon>
)
}
export default Header