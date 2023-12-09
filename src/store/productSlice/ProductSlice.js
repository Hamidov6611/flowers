import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  product: []
}

export const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    increment: (state, action) => {
        state.product = action.payload
        console.log(action)
    },

  },
})

// Action creators are generated for each case reducer function
export const { increment } = productSlice.actions

export default productSlice.reducer