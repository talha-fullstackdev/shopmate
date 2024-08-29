import { configureStore } from "@reduxjs/toolkit";
import CartSlice from "../cartSlice/CartSlice";
const store = configureStore({
    reducer:{
    CartSlice,
    }
})
export default store