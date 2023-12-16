import { createSlice } from "@reduxjs/toolkit";

const loginSlice = createSlice({
    name: 'login',
    initialState:{isLoggedIn:false},
    reducers:{
        login(state){
            state.isLoggedIn = true;
            localStorage.setItem('isLoggedIn', '1');
        },
        logout(state){
            state.isLoggedIn = false;
            localStorage.removeItem('isLoggedIn');
        },
    }
})

export const loginActions = loginSlice.actions;

export default loginSlice;