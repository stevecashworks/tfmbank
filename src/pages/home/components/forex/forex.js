import styled from 'styled-components';
import forexImg from '../../../../assets/leaf.jpg'
import {useState,useEffect} from 'react'; 
const FXKey='i9FKKqtUghIAKwIPp8W7bBHJHkhp4gYHqxpDCjbO'
const Container= styled.div`
width:100%;
height:600px;
position:relative;

`
const CurrencySelectorCon=styled.div`
display:flex;
gap:10px;
color:white;
font-weight:700;
text-transform:capitalize;
align-items:center;
font-size:18px;
@media(max-width:480px){
  flex-direction:column;
}
`
const Rate=styled.p`
margin-top:10px;
background-color:rgb(0,0,0,0.9);
color:white;
font-size:14px;
font-weight:600;
height:60px;
display:flex;
align-items:center;
justify-content:center;
`

const Content=styled.div`
width:100%;
height:100%;
background-image:${props=>props.bg};
flex-direction:column;
gap:20px;
display:flex;
align-items:center;
`
const BigT=styled.p`
font-weight:600;
text-align:center;
color:white;
font-size:55px;

`
const Flag=styled.img`
display:block;
margin:10px auto;
width:60px;
height:60px;
border-radius:50%;
object-fit:cover;
`
const CurrencySelector=styled.select`
cursor:pointer;
width:250px;
height:30px;
background-color:white;
display:block;
margin:10px auto;
`
const Opt= styled.option`
`
const CurrenciesCon=styled.div`
display:flex;
width:80%;
margin:0 auto;
height:400px;
justify-content:space-around;
align-items:center;
@media(max-width:480px){
width:95%;
}
`
const CurrencyCon=styled.div`
display:flex;
background-color:rgb(255,255,255,0.1);
flex-direction:column;
width:150px;
height:180px;
position:relative;

`
const Title=styled.h3`
 margin:5px auto;
 text-align:center;
`
const DetailsCon=styled.div`
background-color:white;
height:50%;
width:100%;
color:rgb(0,0,0,0.8);
position:absolute;
bottom:0;
`
const Forex=()=>{
  const [currencies,setCurrencies]=useState({});
  const [countries,setCountries]=useState([]);
  const [baseCurrency,setBaseCurrency]=useState("USD");
  const flags={
    USD:"data:image/png;base64,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",
    EUR:"data:image/png;base64,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",
    GBP:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlQr8Plb3hgnw1oWxaK1qL1fFHIAc9eQGa5w&usqp=CAU",
    BGN:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMcAAAB3CAMAAACAEaSBAAAAGFBMVEX////WJhIAlm7L39UAjF4AnXOzTzfZIQ05FYcaAAAAgUlEQVR4nO3PwQ2DAAwAsVCg7L8xQ/A5RfYGngEAAAAAAACAD84d5tphfjt4tHi0eLR4tHi0eLR4tHi0eLR4tHi0eLR4tHi0eLR4tHi0eLTMvcP8d5hnhzl28GjxaPFo8WjxaPFo8WjxaPFo8WjxaPFo8WjxaPFo8WjxaPFo2fJ4AcVtaoAIiNiLAAAAAElFTkSuQmCC",
    CHF:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAALoAAAC6CAMAAAAu0KfDAAAAHlBMVEX/AAD/////mJj/X1//+vr/ODj/Y2P/lJT/kZH/x8cN8B2CAAAA6UlEQVR4nO3cy23DUBAEQVH8Kv+EHQFBHmi1H1wVwKLvA+zrBQAAAAAA8N+s23xhW+vGE/u0XJj2uvHEe7r0rhtPSC9IL0gvSC9IL0gvSC9IL0gvSC9IL0gvSC9IL0gvSC9IL0gvDJx+XKcf3y1a9/ctx+c6/XPcu7U/sw1v10XP2x5Jn5fvly+zdOnSpUuXLl26dOnSpUuXLl26dOnSpUuXPnb6wNPAwIPMbX9vBrtt4PFRekF6QXpBekF6QXpBekF6QXpBekF6QXpBekF6QXpBekF6QXph4PSBH4AO/HYVAAAAAADg9/wAXyUgofFJ9pcAAAAASUVORK5CYII="
  }

  useEffect(()=>{
    const getCountries=async()=>{

      try{
        await fetch(`https://api.freecurrencyapi.com/v1/latest?apikey=${FXKey}&base_currency=${baseCurrency}`).then(resp=>resp.json()).then(data=>{setCurrencies(data.data);})
       

      }
      catch(err){
        console.log(err)
      }
    
     
    
    }
     getCountries()
  },[baseCurrency])
  console.log(currencies.CHF)
  console.log(baseCurrency)

  
return(
 <Container>
     <Content  bg={`url(${forexImg})`}>
      <BigT>Our Exchange Rates</BigT>
      <CurrencySelectorCon>
      <label for="base_currency_selector">select base Currency:</label>
      <CurrencySelector id="base_currency_selector" defaultValue={baseCurrency} onChange={(e)=>setBaseCurrency(e.target.value)}>
        {
          Object.keys(flags).map(opt=><Opt value={opt} >{opt}</Opt>)
        }
      </CurrencySelector>
        </CurrencySelectorCon>
      <CurrenciesCon>
        {Object.keys(currencies).filter(x=>(Object.keys(flags).includes(x)&&x!==baseCurrency)).sort(()=>Math.random()-0.5).map(curr=>{
          return(
            <CurrencyCon>
              <Flag src={flags[curr]}/>
              <DetailsCon>
                <Title>{curr}</Title>
                <Rate>We sell: {currencies[curr]}</Rate>
              </DetailsCon>

            </CurrencyCon>
          )
        })}
      </CurrenciesCon>


    </Content>
 </Container>       
    )
}
export default Forex