import styled from 'styled-components'
import centerLogo from '../../../../assets/center-logo.png'
const CardCon= styled.div`
box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1), 0 6px 10px rgba(0, 0, 0, 0.1);
width:300px;
height:350px;
border-radius:10px;
display:flex;
flex-direction:column;
`
 const CardTop=styled.div`
 width:100%;
 height:70px;
 border-bottom:0.5px solid rgb(0,0,0,0.3);
 display:flex;
 position:relative;
 
 `
 const ImgCon=styled.div`
 display:flex;
 align-items:center;
 justify-content:center;
 height:100%;
 width:100px;
 border-right:0.5px solid rgb(0,0,0,0.3);

 `
 const Img=styled.img`
  width:40px;
 `
 const Title=styled.h2`
 font-size:14px;
 font-weight:500;
 text-align:center;
 display:flex;
 align-items:center;
 justify-content:center;
 background-color:crimson;
 color:white;
 flex:1;
 height:100%;
 margin:0;
 border-radius:0 10px 0 0; 

 `
 const CardText= styled.div`
 display:flex;
 flex-direction:column;
 align-items:center;
 gap:20px;
 justify-content:center;
 flex:1
 
 `
 const Sub=styled.h4`
 text-align:center;
 color:#282c34;
 width:90%;
 `
 const Btn=styled.button`
 background-color:gray;
 color:white;
 width:120px;
 height:35px;
 border:none;
 border-radius:10px;
 `
const  Card=({title, text})=>{
    return(<CardCon>
        <CardTop>
            <ImgCon>
            <Img src={centerLogo}/>
            </ImgCon>
            <Title>{title}</Title>

        </CardTop>
        <CardText>
            <Sub>
                {text}
            </Sub>
            <Btn>Open Account</Btn>

        </CardText>

    </CardCon>)
}
export default Card