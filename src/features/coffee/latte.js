import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  numOfLatte: 20
}

const latteSlice = createSlice({
  name: 'latte',
  initialState,
  reducers: {
    ordered: (state, action) => {
      state.numOfLatte -= action.payload
    }
  }
})

export default latteSlice.reducer
export const { ordered } = latteSlice.actions