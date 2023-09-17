import styled from 'styled-components';
import logo from '../../assets/center-logo.png'
import {useState,useRef} from 'react'
import {developmentApiEntryPoint} from '../../App.js'
import {useNavigate} from 'react-router-dom'
const Nav=styled.div`
display:flex;
align-items:center;
gap:20px;

`
const CreditCard=styled.div`
background-color: rgba(0, 0, 0, 0.2); /* Set a transparent background color */
  backdrop-filter: blur(10px); /* Apply a blur effect */
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2); /* Add a subtle shadow */
  padding: 20px;
  width:250px;
  height:400px;
`
const Logo=styled.div`
display:flex;
align-items:center;
gap:20px;
`
const LogoImg=styled.img`
width:30px;
`
const Container=styled.div`
display:grid;
place-items:center;
height: calc(100vh - 70px);
position:relative;
overflow:hidden;
`
const Visa=styled.div`
    color: white;
    text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5);
    letter-spacing:3px;
    font-size:20px;
    text-align:center;
  
  
`
const Header=styled.div`
display:flex;
justify-content:space-between;
width:100%;
padding:20px;
box-sizing:border-box;
height:70px;


`
const LogoText=styled.p`
font-size:18px;
color:white;
letter-spacing:2px;
`
const navLinks=[
    {text:"Home", path:"/"},
    {text:"Contact", path:"#"},
    {text:"About us", path:"#"},
    {text:"Support", path:"#"},

]

const Anc=styled.a`
display:block;
color:white;
text-decoration:none;
font-size:14px;
font-weight:400;
`

const BtnsCon=styled.div`
display:flex;
gap:20px;
`
const Btn=styled.button`
color:white;
background-color:rgb(56, 92, 158);
border:none;
border-radius:10px;
opacity:${props=>props.blur?"0.3":"1"};
width:120px;
height:25px;
transition:all 0.5s ease;
cursor:pointer;
&:hover{
    opacity:1;
    
    
}
`
const SubCon=styled.div`
display:flex;
background-color:rgb(0,0,0,0.1);
position:z-index:2;
`

const FormCon=styled.div`
width:500px;
position:relative;
overflow-x:hidden;
`
const FormSubCon=styled.div`
padding-left:30px;
position:absolute;
width:100%;
transition all 1.5s ease;

`

const FormGroup=styled.div`
margin-bottom:20px;
`
const Label=styled.label`
font-size:14px;
margin-bottom:20px;
color:rgb(255,255,255,0.4);


`

const Next=styled.button`
font-weight:bold;
color:white;
border:none;
margin:20px auto;
background-color:rgb(56, 92, 158);
width:200px;
height:30px;
border-radius:10px;
`
const logVals=(email,password,fn)=>{
    fn('Loading ...')
     try{
        fetch(`${developmentApiEntryPoint}/users/login`,{
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify({email,password})
        }
        ).then(res=>res.json()).then(data=>{
            console.log(data);
            fn(data.result)
        })

     }catch(error){
         console.log(error)
     }

    

    
    
}

 
 
 
 const CreditBottom=styled.div`
 background-color:rgb(0,0,0,0.1);
 color:white;
 margin-top:10px;
 font-size:12px;
 text-align:center;
 `



const Login=()=>{
    

const navigate=useNavigate()
const [email,setEmail]=useState()
const [password,setPassword]=useState()
const [message,setMessage]=useState("") 
return(
<div className="register-con">
    <Header>
        <Logo>
 
        <LogoImg src={logo}/>
        <LogoText>TFMBank</LogoText>
        </Logo>
        <Nav>
            {navLinks.map(x=><Anc href={x.path}>{x.text}</Anc>)}

        </Nav> 
        <BtnsCon>
            <Btn onClick={()=>navigate('/register')}>Register</Btn>
            <Btn blur={true} onClick={()=>{navigate("/login")}}>Login</Btn>

        </BtnsCon>
    </Header>
    <Container>
<div className="blob1"></div>
<div className="blob2"></div>
        <SubCon>

        <CreditCard>

            <Visa style={{display:'flex',justifyContent:"center"}}>
              <Logo style={{margin:"10px auto"}}>
                
                <LogoImg src={logo}/>
                <LogoText>TFMBank</LogoText>
            
             </Logo>

            </Visa>
            
            <CreditBottom>
                {message}
            </CreditBottom>
        
        </CreditCard>
        <FormCon>
            <FormSubCon >

            
            <FormGroup>
                <Label htmlFor="firstName">Email:</Label>
                <input className="nameInp" name='firstname' id='firstname' onChange={(e)=>{setEmail(e.target.value)}} />
            </FormGroup>
            <FormGroup>
                <Label htmlFor="last-name">password</Label>
                <input className="nameInp" id="last-name" name="" onChange={(e)=>{setPassword(e.target.value)}} />
            </FormGroup>
            <Next onClick={()=>logVals(email,password,setMessage)}>Login</Next>
            </FormSubCon>
 
               
            
            
       </FormCon>
        </SubCon>
    </Container>
    </div>
)
}
export default Login
