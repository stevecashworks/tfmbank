import styled from 'styled-components';
import {FiHome} from'react-icons/fi'
import {MdOutlineContacts,MdOutlinePassword} from 'react-icons/md'
import {BsQuestionDiamond} from "react-icons/bs"
import {AiOutlineLogout,AiOutlineWallet,AiOutlineFullscreen,AiOutlineExpandAlt,AiOutlineDropbox,AiOutlineFall} from "react-icons/ai"
import {BiLogOutCircle} from 'react-icons/bi'
import {SiAboutdotme} from 'react-icons/si'
const Container=styled.div`
width:220px;
height:100%;
box-shadow: 0px 12px rgb(0,0,0, 0.2);
background-color:rgb(3, 15, 41);
color:white;
display:flex;
flex-direction:column;
padding-top:20px;
padding-left:auto;
gap:50px;
align-items:center;



`
const GroupTitle=styled.h3`
 font-weight:600;
 font-size:14px;
 text-align:center;
`
 const Group=styled.div`
 display: flex;
 flex-direction:column;
 padding-left:40px;
 justify-content:center;
 align-items:flex-start;
 width:100%;
 padding-left:50px;
 gap:10px;
`
 const Anc= styled.a`
text-decoration:none;
color:rgb(255,255,255,0.8);
display:flex;
align-items:center;
justify-content:center;
gap:10px;
flex-wrap:wrap;
transition:all 0.5s ease;
font-size:14px;
font-weight:200;
 &:hover{
    transform:scale(1.1);
 }
 `
 const LinkData=[
    {title:"Pages", links:[ {text:"Home", path:"/",Icon:FiHome},{text:"Contact Us",path:"#",Icon:MdOutlineContacts}, {text:"About Us",path:"#",Icon:BsQuestionDiamond}]},
    {title:"Actions", links:[ {text:"Deposit",path:"#",Icon:AiOutlineDropbox},{text:"Query",path:"#",Icon:AiOutlineExpandAlt}, {text:"Withdraw",path:"#",Icon:AiOutlineFall},{text:"Transfer",path:"#",Icon:AiOutlineFullscreen},{text:"Change Pin",path:"#",Icon:MdOutlinePassword },{text:"Create a New Account",path:"#",Icon:AiOutlineWallet}]},
    {title:"Accounts", links:[{text:"Logout",Icon:BiLogOutCircle},{text:"Switch Account",path:"#",Icon:AiOutlineLogout}, {text:"About Us",path:"#",Icon:SiAboutdotme}]},

 ]
const SideBar=()=>{
    return(
        <Container>
            {LinkData.map(item=>{
                return(
                    <Group>
                        <GroupTitle>{item.title}</GroupTitle>
                        {item.links.map(x=>{
                          const  Icon=x.Icon
                            return(

                                <Anc href={x.path||"#"}>{Icon&&<Icon style={{fontSize:"17px"}}/>}<p>{x.text}</p></Anc>
                                )
                            }
                        )}
                    </Group>
                )
            })}

        </Container>
    )
}
export default SideBar