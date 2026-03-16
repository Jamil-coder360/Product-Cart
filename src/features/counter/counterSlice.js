import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  expert: 10,
}

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state) => {
      state.expert += 5
    },
    decrement: (state) => {
      state.expert -= 1
    },
    incrementByAmount: (state, action) => {
      state.expert += action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount } = counterSlice.actions

export default counterSlice.reducer