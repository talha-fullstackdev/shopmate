import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
const cartSlice = createSlice({
  name: "CartSlice",
  initialState: {
    cartList: [],
  },
  reducers: {
    add: (state, action) => {
      state.cartList.push(action.payload);
      toast.success("item added");
    },
    remove: (state, action) => {
      state.cartList = state.cartList.filter(
        (product) => product.id !== action.payload.id
      );
      toast.error("item removed");
    },
  },
});
export const { add, remove } = cartSlice.actions;
export default cartSlice.reducer;
