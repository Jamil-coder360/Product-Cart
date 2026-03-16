import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItems: []
};

const cartSlice = createSlice({
  name: "addtocart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      state.cartItems.push(action.payload);
    }
  }
});

// Export the action
export const { addToCart } = cartSlice.actions;

// Export the reducer correctly
export default cartSlice.reducer;