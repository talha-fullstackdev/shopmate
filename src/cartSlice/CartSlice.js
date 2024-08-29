import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cartList: [],
    total: 0,
  },
  reducers: {
    add(state, actions) {
      console.log(state);
    },
    remove(state, actions) {
      console.log(state);
    },
  },
});
export const { add, remove } = cartSlice.actions;
export default cartSlice.reducer;
