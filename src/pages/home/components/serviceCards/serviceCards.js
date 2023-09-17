import currency from '../../../../assets/Currency.jpg'
import pension from '../../../../assets/pension.jpg'
import forex from '../../../../assets/forex.jpg'
import {FaChevronRight} from 'react-icons/fa'
import styled from 'styled-components'
const Container= styled.div`
width:100%;
height:600px;
margin:20px auto;
@media (max-width:480px){
    height:auto;
}
`

export const Title=styled.h2`
text-align:center;
font-size:32px;
opacity:0.8;
`
export const Sub=styled.p`
text-align:center;
opacity:0.5;
`
const Cards=styled.div`
display:flex;
width:100%;
justify-content:space-around;
margin:30px auto;
padding-right:40px;
@media(max-width:480px){
    flex-direction:column;
    align-items:center;
    gap:20px;
}

`
const Card=styled.div`
display:flex;
flex-direction:column;
width:380px;
height:450px;
position:relative;
box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;
@media(max-width:480px){
    width:350px;
}
`
const CardImg=styled.img`
width:100%;
height:240px;

`
const Box=styled.div`
background: #FC5C7D;  /* fallback for old browsers */
background: -webkit-linear-gradient(to right, #6A82FB, #FC5C7D);  /* Chrome 10-25, Safari 5.1-6 */
background: linear-gradient(to right, #6A82FB, #FC5C7D); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
position:absolute;
width:100%;
height:50px;
left:30px;
top:230px;
color:white;
font-weight:bold;
padding-left:20px ;
box-sizing:border-box;
display:flex;
justify-content:space-around;
align-items:center;

`
const Text=styled.p`
color:gray;
position:relative;
top:60px;
padding-left:5px;
`
const cardData=[
    {img:currency, title:"Currency Exchange", text:"A banking service that enables you to convert one currency into another, making it convenient for travel or international transactions by providing competitive exchange rates"},
    {img:forex, title:"Trade FX",text:"A banking service that allows you to engage in foreign exchange trading, giving you the opportunity to buy and sell currencies to potentially profit from fluctuations in exchange rates"},
    {img:pension, title:"Pension Scheme",text:"A banking service that helps you save and invest for your retirement, ensuring financial security and stability in your golden years"},
]
const ServiceCard=()=>{
    return (
        <Container id="services">
            <Title>We help you grow your wealth </Title>
                <Sub>Don't  just make a deposit, make an investment</Sub>
       <Cards>
        {cardData.map(data=>{
            return(
                <Card>
                    <CardImg src={data.img}/>
                    <Box>
                        <p>{data.title}</p>
                        <FaChevronRight/>
                    </Box>
                    <Text>{data.text}</Text>
                </Card>
            )
        })}

       </Cards>
        </Container>
    )
}
export default ServiceCard