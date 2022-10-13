import { configureStore } from '@reduxjs/toolkit'
import expenseReducer from './slice'

export default configureStore({
  reducer: {
    expense: expenseReducer,
  },
})