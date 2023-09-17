import bg5 from '../../../../assets/assets/backgrounds/bg5.jpg'
import './needs.css'
import styled from 'styled-components';
import {useEffect, useState} from 'react'
import {FaChevronDown,FaArrowRight, FaHandHoldingUsd, FaHandsHelping, FaCreativeCommonsSamplingPlus} from 'react-icons/fa';
const TextCon= styled.div`
 position:relative;
 top:50px;
 left:80px;
 color:rgb(255,255,255);
 width:fit-content;
 transition:all 1s ease;
 @media(max-width:480px){
    left:10px;
 }

`
const Title=styled.h3`
text-transform:capitalize;
font-size:40px;
margin-bottom:5px;

`
const SubTitle=styled.p`
font-weight:500;
font-size:20px;
`
const TilesCon=styled.div`
display:flex;
justify-content:space-around;
width:100%;
margin-top:100px;
@media (max-width:480px){
    flex-direction:column;
    align-items:center;
     gap:20px;

} 

`
const Tile=styled.div` 
width:520px;
height:120px;
padding-left:15px;
background-color:${props=>props.open?"rgb(255,255,255,0.9)":"rgb(255,255,255,0.2)"};
color:${props=>props.open?"rgb(0,0,0,0.8)":"white"};
border:${props=>props.open?"none":"2px solid lightgray"};
transition:all 1s ease;
position:relative;
border-radius:10px;
display:flex;
justify-content:center;
flex-direction:column;
gap:20px;
@media(max-width:480px){
    width:350px
    
}


`
const SmallT=styled.p`
 font-size:18px;
 font-weight:400;
 margin:0;
 padding:0;
`

const BigT=styled.p`
font-weight:600;
font-size:30px;
margin:0;
padding:0;
`

const ChevCon=styled.div`
position:absolute;
 right:20px;
 top:40px;
 width:40px;
 height:40px;
 border:${props=>props.open?"2px solid lightgray":"2px solid white"};
 display:flex;
 align-items:center;
 justify-content:center;
 border-radius:4px;
`
const Cards= styled.div`
display:flex;
justify-content:space-around;
@media (max-width:480px){
    flex-direction:column;
    height:auto;
    gap:20px;
    align-items:center;
}
`
const Card=styled.div`
border:2px solid rgb(255,255,255,0.2);
width:300px;
height:300px;
border-radius:10px;
margin-top:40px;
position:relative;
background-color:rgb(0,0,0,0.4);

`
const IconsCon=styled.div`
 width:100%;
 padding:15px;
 display:flex;
 justify-content:space-between;
 box-sizing:border-box;

` 


const IconCon=styled.div`
width:40px;
height:40px;
border-radius:10px;
display:flex;
align-items:center;
justify-content:center;
border:1px solid gray;
background-color:white;
transition:all 0.5s ease;
color:gray;
&:hover{
    border:none;
    background-color:crimson;
    color:white;
}

`
const CardTitle=styled.p`
font-size:25px;
font-weight:600;
color:rgb(255,255,255,0.8);
`



const Needs=()=>{
    useEffect(()=>{
        const textCon=document.getElementById('text-con')
        const Observer=new IntersectionObserver((entries)=>{
            for(let entry of entries){
                if(entry.isIntersecting){
                    entry.target.style.transform="translateX(0px)"
                }else{
                    entry.target.style.transform="translateX(-400px)"

                }
            }
        })
        Observer.observe(textCon)
    },[])
    const  [Tile1Open,setTile1Open]= useState(false);
    const  [Tile2Open,setTile2Open]= useState(true);
 return(
    <div className='needs-con' style={{backgroundImage:`url(${bg5})`}}>
        <div className= 'needs-mask'>

        <TextCon id='text-con'>
            <Title>Banking for your needs</Title>
            <SubTitle>The bank that builds better relationships</SubTitle>
        </TextCon>
        <TilesCon>
            <Tile onMouseOver={()=>{setTile1Open(true);setTile2Open(false)}} onMouseLeave={()=>{setTile1Open(false);setTile2Open(true)}} open={Tile1Open}>
                <SmallT>

                    Banking For
                </SmallT>
                
                <BigT>
                    Individuals
                </BigT>
                <ChevCon open={Tile1Open}>
                <FaChevronDown/>
            </ChevCon>
            </Tile>
            <Tile onMouseOver={()=>{setTile1Open(false);setTile2Open(true)}} onMouseLeave={()=>{setTile2Open(false);setTile1Open(true)}} open={Tile2Open} >
            <SmallT>

                Banking For
            </SmallT>

            <BigT>
            Companies
            </BigT>
            <ChevCon open={Tile2Open}>
                <FaChevronDown/>
            </ChevCon>
            </Tile>
        </TilesCon>
        <Cards>
            <div className='card'>
                <IconsCon>
                <FaHandsHelping style={{fontSize:"50px"}}/>

            <IconCon>
                <FaArrowRight/>
            </IconCon>
                </IconsCon>
                <CardTitle>Savings & Trading</CardTitle>
                <div className="line"></div>
                <p className='need-card-text'>
                Maximize wealth with smart investments and tailored financial planning
                </p>
                <p className='need-tc'>Terms and conditions Apply </p>

            </div>
            <div className="card">
                <IconsCon>
                <FaCreativeCommonsSamplingPlus style={{fontSize:"50px"}}/>

            <IconCon>
                <FaArrowRight/>
            </IconCon>
                </IconsCon>
                <CardTitle>Online & Mobile</CardTitle>
                <div className="line"></div>
                <p className='need-card-text'>
                Bank anywhere, anytime with our convenient online and mobile banking services
                </p>
                <p className='need-tc'>Terms and conditions Apply </p>

            </div>

            <div className='card'>
                <IconsCon>
                <FaHandHoldingUsd style={{fontSize:"50px"}}/>

            <IconCon>
                <FaArrowRight/>
            </IconCon>
                </IconsCon>
                <CardTitle>Loans</CardTitle>
                <div className="line"></div>
                <p className="need-card-text">
                Realize your goals with flexible financing options and personalized loan solutions
                </p>
                <p className='need-tc'>Terms and conditions Apply </p>
            </div>
        </Cards>
        <button className="need-btn">Get Started</button>
        </div>
    </div>
 )   
}
export default Needs