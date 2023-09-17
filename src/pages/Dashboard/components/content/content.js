import styled from 'styled-components'
import Header from './header/header'
import Stats from "./stats.js"
import Welcome from './header/WelcomeComponent/welcome'
const Container=styled.div`
width: calc(100% - 220px);
height:100%;
background-color:white
padding:20px;
box-sizing:border-box;
`
const Content=()=>{
    return(
        <Container>
            <Header/>
            <Welcome/>
            <Stats/>

        </Container>
    )
}
export default Content 