import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: [],
  reducers: {
    addToCart: (state, action) => {
      console.log(state, action)
      const productToAdd = action.payload;
      const index = state.findIndex(item => item.id === productToAdd.id);

      if (index !== -1) {
        return state.map(item =>
          item.id === productToAdd.id ? { ...item, inCart: true } : item
        );
      } else {
        return [...state, { ...productToAdd, inCart: true }];
      }
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
