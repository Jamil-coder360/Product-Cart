import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './src/features/counter/counterSlice.js';
import cartReducer from './src/features/card/cartSlice.js';
import addtocartReducer from './src/features/card/AddtocartSlice.js';
export const store = configureStore({
  reducer: {
    counter: counterReducer,
    cart: cartReducer,
    addtocart: addtocartReducer,
  },
})