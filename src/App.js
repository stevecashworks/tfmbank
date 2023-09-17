
import './App.css';
import styled from 'styled-components'
// import Header from './components/Header';
import { RouterProvider } from 'react-router-dom';
import router from './router';
const Container = styled.div`
width:100vw;
overflow-x:hidden;
`

export const  developmentApiEntryPoint="http://localhost:3008/api/v3"
function App() {
  return (
    <Container>

   <RouterProvider router={router}/>
    </Container>
  );
}

export default App;
