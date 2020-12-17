import { createSlice } from '@reduxjs/toolkit'

export const tableSelectionsSlice = createSlice({
  name: 'selections',
  initialState: {
    ids: []
  },
  reducers: {
    checkboxChecked: {
      reducer: (state, action) => {
        state.ids.push(action.payload.id)
      }
    },
    checkboxUnchecked: {
      reducer: (state, action) => {
        const index = state.ids.findIndex(item => item === action.payload.id)
        state.ids.splice(index, 1)
      }
    },
    allCheckboxesChecked: (state, action) => {
      state.ids = []
      action.payload.ids.forEach(id => {
        state.ids.push(id)
      })
    },
    allCheckboxesUnchecked: (state,action) => {
      state.ids = []
    }
  }
})

export const { checkboxChecked, checkboxUnchecked, allCheckboxesChecked, allCheckboxesUnchecked } = tableSelectionsSlice.actions
export default tableSelectionsSlice.reducer
