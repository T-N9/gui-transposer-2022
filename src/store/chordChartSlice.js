import { createSlice } from "@reduxjs/toolkit";

export const chordChartSlice = createSlice({
  name: "chordChart",
  initialState: {
    chordToShow: "" /* clicked chord on chord board */,
    chordPositions: [] /* all chord positions array of chordToShow */,
  },
  reducers: {
    setChordToShow: (state, action) => {
      state.chordToShow = action.payload;
    },
    setChordPositions: (state, action) => {
      state.chordPositions = [...action.payload];
    },
  },
});

export const { setChordToShow, setChordPositions } = chordChartSlice.actions;
export default chordChartSlice.reducer;
