// import { createSlice } from "@reduxjs/toolkit";
// import { toast } from "react-toastify";
// const cartSlice = createSlice({
//   name: "cart",
//   initialState: {
//     cartList: [],
//     total: 0,
//   },
//   reducers: {
//     add(state, action) {
//       const updatedCartList = state.cartList.concat(action.payload);
//       const total = state.total + action.payload.price;
//       toast.success("Item Added");
//       return { ...state, total: total, cartList: updatedCartList };
//     },
//     remove(state, action) {
//       const updatedCartList = state.cartList.filter(
//         (item) => item.id !== action.payload.id
//       );
//       const total = state.total - action.payload.price;
//       toast.error("Item Removed");
//       return { ...state, total: total, cartList: updatedCartList };
//     },
//   },
// });
// export const { add, remove } = cartSlice.actions;
// export default cartSlice.reducer;
// updated for color
// import { createSlice } from '@reduxjs/toolkit';

// const cartSlice = createSlice({
//   name: 'CartSlice',
//   initialState: {
//     cartList: [],
//   },
//   reducers: {
//     add: (state, action) => {
//       const product = action.payload;
//       state.cartList.push(product);
//     },
//     remove: (state, action) => {
//       const productToRemove = action.payload;
//       state.cartList = state.cartList.filter(
//         (product) => product.id !== productToRemove.id || product.selectedColor !== productToRemove.selectedColor
//       );
//     },
//   },
// });

// export const { add, remove } = cartSlice.actions;
// export default cartSlice.reducer;
///////////////////////// update for price
// import { createSlice } from '@reduxjs/toolkit';
// import { toast } from 'react-toastify';

// const cartSlice = createSlice({
//   name: 'CartSlice',
//   initialState: {
//     cartList: [],
//   },
//   reducers: {
//     add: (state, action) => {
//       state.cartList.push(action.payload);
//       toast.success("item added")
//     },
//     remove: (state, action) => {
//       state.cartList = state.cartList.filter(
//         (product) => product.id !== action.payload.id
//       );
//       toast.error("item removed")
//     },
//   },
//   selectors: {
//     selectTotal: (state) => {
//       return state.CartSlice.cartList.reduce((total, product) => total + product.price);
//     },
//   },
// });

// export const { add, remove } = cartSlice.actions;
// export const selectTotal = cartSlice.selectors

// export default cartSlice.reducer;
////////////////////updating total   like previous
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
      // state.total += action.payload.price;
      toast.success("item added");
    },
    remove: (state, action) => {
      state.cartList = state.cartList.filter(
        (product) => product.id !== action.payload.id
      );
      // state.total -= action.payload.price;
      toast.error("item removed");
    },
  },

});

export const { add, remove } = cartSlice.actions;
export default cartSlice.reducer;
