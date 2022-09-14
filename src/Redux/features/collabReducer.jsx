import { createSlice } from '@reduxjs/toolkit'

const initialState = [];


export const collabSlice = createSlice({
  name: 'collab',
  initialState,
  reducers: {
    setcollab: (state, action) => {
       return state.value += action.payload
    },
    
  },
})

// Action creators are generated for each case reducer function
export const { setcollab } = collabSlice.actions

export default collabSlice.reducer