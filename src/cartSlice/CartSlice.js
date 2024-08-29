import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cartList: [],
    total: 0,
  },
  reducers: {
    add(state, action) {
      // console.log(action.payload);
      const updatedCartList = state.cartList.concat(action.payload);
      const total =state.total+action.payload.price
      return { ...state, total:total, cartList: updatedCartList };
    },
    remove(state, action) {
  
      const updatedCartList=state.cartList.filter((item)=>item.id!==action.payload.id)
      const total = state.total-action.payload.price
      return { ...state, total:total, cartList: updatedCartList };
    },

  },
});
export const { add, remove } = cartSlice.actions;
export default cartSlice.reducer;
