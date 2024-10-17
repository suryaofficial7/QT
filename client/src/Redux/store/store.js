import { configureStore } from "@reduxjs/toolkit";
import userRed from "../slice/userSlice"

const store = configureStore({
    reducer:{
        userInfo :  userRed
    }
})

export default store