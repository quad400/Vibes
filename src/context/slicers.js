import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  track: null,
};

const slice = createSlice({
  name: "music",
  initialState,
  reducers: {
    track: (state, action) => {
      state.track = action.payload;
    },
  },
});

export const { track } = slice.actions;

export default slice.reducer;
