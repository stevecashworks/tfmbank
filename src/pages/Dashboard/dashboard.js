import styled from 'styled-components';
import SideBar from './components/Sidebar/sidebar';
import Content from './components/content/content';
const Container=styled.div`
width:100%;
height:100vh;
display:flex;
font-family: 'Poppins', sans-serif;`
const Dashboard=()=>{
    return(
        <Container>
        <SideBar/>
        <Content/>
        </Container>
    )
}
export default Dashboard