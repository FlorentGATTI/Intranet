import collabReducer from './features/collabReducer'
import connexReducer from './features/collabReducer';
import { configureStore } from '@reduxjs/toolkit'

export const store = configureStore({
  reducer: {
    collab : collabReducer,
    connex : connexReducer
  },

})



export default store;