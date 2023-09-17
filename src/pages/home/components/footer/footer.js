import logo from '../../../../assets/logo1.png'
import styled from 'styled-components';
import './footer.css';
const FooterTop=styled.div`
width:100%;
color:white;
display:flex;
justify-content:space-around;
@media(max-width:480px){
    flex-direction:column;
}
`
const A=styled.a`
color:white;
text-decoration:none;
opacity:0.5;
text-transform:capitalize;
`
const Con=styled.div`
display:flex;
flex-direction:column;
gap:20px;

`
const Img=styled.img`
display:block;
margin:30px auto;
@media(max-width:480px){
    width:200px;
}
`
const SubCon=styled.div`
display:flex;
gap:20px;
flex-direction:column;
`
const LinksCon= styled.div`
display:flex;
flex-direction:column;
gap:5px;
@media(max-width:480px){
    flex-direction:row;
    flex-wrap:wrap;
    gap:20px;
    width:90%;
    margin:0 auto;

}
`
const Title=styled.h4`
@media(max-width:480px){
    text-align:center;
    color:green;
}
`
const GroupCon=styled.div`
display:flex;
flex-direction:column;
gap:15px;
`


const footerData=[
    {
        title:'Loans',
        links:["home loan","car loan", "two wheeler loan",'commercial vehicle loan',"personal loan","tractor loan","construction loan"]
    },
    {
        title:"Rates & Charges",
        links:['Interest Rates',"Exchange rate today","Service Charges/fees"],
        title2:"Online",
        links2:["Mobile Banking", "Internet Banking"]
    },
    
        
    
    {
        title:"About us",
        links:["Our Story", "Opportunities"]
    },
    {
        title:"Services",
        links:["Savings Account","Current Account","Exchange Currency"]
        
    }

]
const Footer=()=>{
    return(
        <div className='home-footer'>
            <FooterTop>
                {footerData.map((item,index)=>{
                    if(index===1){
                        return(
                            <Con>
                                <SubCon>
                                <Title>{item.title}</Title>
                                <LinksCon>
                                {item.links.map(x=>{
                                    return<A>{x}</A>
                                })}
                                </LinksCon>
                                </SubCon>
                                <SubCon>
                                <Title>{item.title2}</Title>
                                <LinksCon>
                                {item.links2.map(x=>{
                                    return<A>{x}</A>
                                })}
                                </LinksCon>
                                </SubCon>

                            </Con>
                        )
                    }
                    return(
                        <GroupCon>
                            <Title>{item.title}</Title>
                            <LinksCon>
                            {item.links.map(link=><A>{link}</A>)}
                            </LinksCon>
                        </GroupCon>
                    )
                })}


            </FooterTop>
            
                                <Img src={logo}/>

        </div>
    )
}
export default Footer