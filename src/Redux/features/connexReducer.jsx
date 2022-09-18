import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

export const connexSlice = createSlice({
  name: "connex",
  initialState,
  reducers: {
    setconnex: (state = initialState, action) => {
      state.value += action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setconnex } = connexSlice.actions;

export default connexSlice.reducer;
