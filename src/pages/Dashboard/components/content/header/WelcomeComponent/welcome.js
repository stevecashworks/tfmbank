import styled from 'styled-components'
import avatar from '../../../../../../assets/avatar.jpg'
const Container=styled.div`
color:white;
width:100%;
padding-left:20px;
`
const PersonalDetails=styled.div`
// background-color:rgb(12,12,12,0.2);
margin:20px auto;
width:100%;
color:black; 
height:auto;
display:flex;
padding:10px;
box-sizing:border-box;
border-radius:25px;
display:flex;
justify-content:space-around;
flex-direction:column;
gap:20px;

`
const  GreetingAndPic=styled.div`
display:flex;
gap:10px;
align-items:center;
`
const BalanceCon=styled.div`
font-weight:700;
`
const Balance= styled.span`
color:blueviolet;
margin-left:10px;
&:before{
    content:"$"
}
`
const AvatarImage= styled.img`
height:50px;
width:50px;
border-radius:50%;
object-fit:cover;

`
const WelcomeText=styled.p`
font-size:18px;
fort-weight:600;
font-family:"Poppins", sans-serif;
`
const Charts= styled.div`
display:flex;
align-items:center;
justify-content:space-around;
`
const Welcome=()=>{
    return(
        <Container>
        <PersonalDetails>
        <GreetingAndPic>
        <AvatarImage alt="user image" src={avatar}/>
        <WelcomeText>Welcome Back James</WelcomeText>
        </GreetingAndPic>
        <BalanceCon>Bal:<Balance>2000</Balance></BalanceCon>
        </PersonalDetails>
        <Charts>
        
        </Charts>

        </Container>

    
    )

}
export default Welcome