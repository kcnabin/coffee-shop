import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  numOfCappuccino: 25
}

const cappuccinoSlice = createSlice({
  name: 'cappuccino',
  initialState,
  reducers: {
    ordered: (state, action) => {
      state.numOfCappuccino -= action.payload
    }
  }
})

export default cappuccinoSlice.reducer
export const { ordered } = cappuccinoSlice.actions