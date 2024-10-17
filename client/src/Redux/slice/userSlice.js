import {createSlice} from "@reduxjs/toolkit"

export const users = createSlice({
    name : "users",
    initialState:{
        users:{}
    },
    reducers:{
        setUser : (state,action)=>{state.users=action.payload},
        getUser: (state,action)=>{state.users=action.payload}
    }
})

export const  {getUser , setUser}  = users.actions;

export default  users.reducer;