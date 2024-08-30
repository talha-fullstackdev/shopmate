import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cartList: [],
    total: 0,
  },
  reducers: {
    add(state, action) {
      const updatedCartList = state.cartList.concat(action.payload);
      const total = state.total + action.payload.price;
      toast.success("Item Added");
      return { ...state, total: total, cartList: updatedCartList };
    },
    remove(state, action) {
      const updatedCartList = state.cartList.filter(
        (item) => item.id !== action.payload.id
      );
      const total = state.total - action.payload.price;
      toast.error("Item Removed");
      return { ...state, total: total, cartList: updatedCartList };
    },
  },
});
export const { add, remove } = cartSlice.actions;
export default cartSlice.reducer;
