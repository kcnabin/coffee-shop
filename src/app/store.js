import { configureStore } from '@reduxjs/toolkit'
import latteReducer from '../features/coffee/latte'
import cappuccinoReducer from '../features/coffee/cappuccino'

const store = configureStore({
  reducer: {
    latte: latteReducer,
    cappuccino: cappuccinoReducer
  }
})

export default store