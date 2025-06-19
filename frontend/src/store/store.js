import { configureStore } from "@reduxjs/toolkit";
import cartSlice from './cartSlice'
import sideBarSlice from "./sideBarSlice";

const store=configureStore({
    reducer:{
        cart:cartSlice,
        sideBar:sideBarSlice
    }
})

export default store