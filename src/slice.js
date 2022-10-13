import { createSlice } from '@reduxjs/toolkit'

export const expenseSlice = createSlice({
  name: 'expense',
  initialState: {
    value: [],
  },
  reducers: {
    add: (state, action) => {
      state.value.push(action.payload)
    },
    set: (state, action) => {
      state.value = action.payload
    },
  },
})

export const { add, set } = expenseSlice.actions

export default expenseSlice.reducer