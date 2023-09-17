import { createBrowserRouter } from "react-router-dom";
import  Login from './pages/login/login.js';
import  Home from './pages/home/home.js';
import Dashboard from "./pages/Dashboard/dashboard.js";
import Register from "./pages/register/register.js";
import  Three from './pages/three/three.js'
const router=createBrowserRouter([
{path:"/",element:<Home/>},
{path:"/login",element:<Login/>},
{path:"/register",element:<Register/>},
{path:"/dashboard/:id", element:<Dashboard/>},
{path:'/three',element:<Three/>}
]) 
export default router