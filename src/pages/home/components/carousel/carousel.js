import  styled from 'styled-components';
import {useEffect, useState} from 'react'
import './carousel.css'
import bg1 from '../../../../assets/backgrounds/bg1.jpg'
import bg2 from '../../../../assets/backgrounds/bg2.jpg'
import bg3 from '../../../../assets/backgrounds/bg3.jpg'
import bg4 from '../../../../assets/backgrounds/bg4.jpg'
import observe from './observe';
import { BiArrowFromLeft } from 'react-icons/bi';
const carouselData=[
    {img:bg1,pos:"flex-start",hero:"Discover a World of Financial Opportunities Where Your Financial Goals Begin"},
    {img:bg2,pos:"flex-start",hero:"Simplify Your Banking Experience Banking Made Easy"},
    {img:bg3,pos:"flex-end",hero:"Secure Your Future with Us Building Trust Since 2004"},
    {img:bg4,pos:"flex-start", hero:"Experience Innovation in Banking The Future of Financial Services"}
    
 ]

 const Btn=styled.button`
 background-color:rgb(255,255,255);
 display:block;
 width:120px;
 color:blue;
 border:none;
 margin:10px auto;
 height:40px;
 border-radius:5px;
 font-weight:600;
 `
 const  CarouselCon=styled.div`
 width:100%;
 position:relative;
 height:400px;
 overflow-x:hidden;

 `
 const Line=styled.div`
 background-color:brown;
 width:100%;
 height:5px;
 margin:10px auto;

 `

 
 const Carousel=()=>{
    const [activeIndex,setActiveIndex]=useState(0)
    useEffect(()=>{
        setInterval(()=>{
            setActiveIndex((ind)=>{
                if(ind===carouselData.length-1){
                    return 0
                }
                else{
                    return ind+1
                }
            })

        },5000);
       observe(document.querySelectorAll('.captions'))

    },[])
    
    return(
        <CarouselCon>
            {
                carouselData.map((item,index)=><div className={`carousel-item ${activeIndex===index&&'active'}`} style={{backgroundImage:`url(${item.img})`,justifyContent:item.pos}} >
                <div className="captions">
                    <div className='hero'>{item.hero}</div>
                    <Line/>

                    <Btn id='btn'>
                    <a href="/register" style={{textDecoration:'none',color:"black"}}>

                        Get Started <BiArrowFromLeft/> 
                    </a>
                        </Btn>

                </div>
                </div> )
            }


        </CarouselCon>
    )

 }
 export  default Carousel