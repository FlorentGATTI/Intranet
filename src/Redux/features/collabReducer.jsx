import { createSlice } from '@reduxjs/toolkit'

const initialState = [];


export const collabSlice = createSlice({
  name: 'collab',
  initialState,
  reducers: {
    setcollab: (state, action) => {
       return state.value += action.payload
    },
    filterCollab: (state, action) => {
      const searchTerm = action.payload.searchTerm;

      const collabFound = state.value.filter((collab) => {
        collab.data.includes(searchTerm);
      });
      return {...state, filteredCollab : collabFound}
    },
  },
})

// Action creators are generated for each case reducer function
export const { setcollab } = collabSlice.actions

export default collabSlice.reducer