import styled from 'styled-components';
import { BiSearch } from 'react-icons/bi';
import quest from '../../../../assets/quest.gif'
import Qa from './qa.js'
const Container=styled.div`
height:auto;
width:100%;
background:rgb(226, 218, 218,0.4);
margin-top:0;
`
const InpDiv=styled.div`
background-color:white;
width:280px;
height:35px;
display:flex;
align-items:center;
`
const Inp=styled.input`
width:240px;
height:100%;
font-size:18px;
border:none;
outline:none;
&::placeholder{
 font-size:13px;   
}
`
const FaqHeader=styled.div`
width:80%;
display:flex;
margin:30px auto;
justify-content:space-between;
@media(max-width:480px){
  flex-direction:column;
  text-align:center;
}
`
const  FaqHeaderLeft=styled.div`

`
const  FaqHeaderRight=styled.div`

`
const SectionTitle=styled.h2`
font-size:40px;
font-weight:600;
` 
const SectionText=styled.p`
`
const Sub=styled.h5`
font-size:16px;
text-transform:capitalize;
font-weight:500;

`
const FaqBottom=styled.div`
width:80%;
display:flex;
margin:30px auto;
justify-content:space-around;
flex-direction:column;
align-items:center;
gap:30px;
@media(max-width:480px){
width:95%
}
`
const Quest=styled.img`
width:200px;
`
const Questions=styled.div`
width:600px;
height:auto;
background-color:white;
margin-bottom:20px;
@media(max-width:480px){
width:100%;
}
`
var faqs = [
    {
      q: "How do I open a bank account?",
      a: "To open a bank account, you need to visit one of our branches and provide the necessary documents, such as identification and proof of address. Our staff will guide you through the account opening process."
    },
    {
      q: "What are the fees associated with my bank account?",
      a: "The fees associated with your bank account depend on the type of account you have. Common fees may include monthly maintenance fees, transaction fees, ATM fees, and overdraft fees. It's best to refer to the account terms and conditions or contact our customer support for specific fee information."
    },
    {
      q: "How can I access online banking?",
      a: "To access online banking, you can visit our website and click on the 'Login' button. If you haven't registered for online banking, you will need to sign up first by providing your account details and creating login credentials."
    },
    {
      q: "What should I do if my credit card is lost or stolen?",
      a: "If your credit card is lost or stolen, you should immediately contact our customer support or our 24/7 helpline to report it. We will block the card to prevent any unauthorized transactions and guide you through the process of getting a replacement card."
    },
    {
      q: "What is the process for applying for a loan?",
      a: "To apply for a loan, you can fill out an online application form on our website or visit one of our branches. You will need to provide information about your income, employment, and any collateral you may have. Our loan specialists will review your application and guide you through the process."
    },
    {
      q: "How do I set up automatic bill payments?",
      a: "To set up automatic bill payments, you can log in to your online banking account and navigate to the bill payment section. From there, you can add your payees and specify the payment amounts and schedules. Alternatively, you can contact our customer support for assistance in setting up automatic bill payments."
    }
    // Add more FAQs here...
  ];
  

const Faqs=()=>{
return(
    <Container id="faqs">
        <FaqHeader>
            <FaqHeaderLeft>
                <SectionTitle>Questions & Answers</SectionTitle>
                <SectionText>Find answers to all your questions about our services</SectionText>
            </FaqHeaderLeft>
            <FaqHeaderRight>
                <Sub>Help you find?</Sub>
                <InpDiv>
                    <Inp placeholder='Search Keyword'/>
                    <BiSearch />  
                </InpDiv>

            </FaqHeaderRight>

        </FaqHeader>

        {/* end of Faq top */}
        
        <FaqBottom>
            <Quest src={quest}/>
            <Questions>
            {faqs.map(query=><Qa {...query}/>)}

            </Questions>
        </FaqBottom>

    </Container>
)

}
export default Faqs