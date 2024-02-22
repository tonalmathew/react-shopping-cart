import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: [],
  reducers: {
    addToCart: (state, action) => {
      console.log(state, action)
      const productToAdd = action.payload;
      state.push(productToAdd)
    },
    removeFromCart: (state, action) => {
      console.log(state, action)
      const productIdToRemove = action.payload;
      return state.filter((item) => item.id !== productIdToRemove);
    },
    clearCart: () => {
      return [];
    },
  },
});

export const { addToCart, removeFromCart, clearCart } = cartSlice.actions;

export default cartSlice.reducer;
