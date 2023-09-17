import {createSlice} from '@reduxjs/toolkit'
const initialState={
    menuOpen:false
}
const appSlice=createSlice({
    name:"app",
    initialState,
    reducers:{
        toggleMenu:(state,action)=>{
            state.menuOpen=!state.menuOpen
        }
    }
})
export const  {toggleMenu}=appSlice.actions;
export const  selectMenuOpen=(state)=>state.app.menuOpen
export default  appSlice.reducer