import { createSlice } from "@reduxjs/toolkit";

export const chordChartSlice = createSlice({
  name: "chordChart",
  initialState: {
    chordToShow: "" /* clicked chord on chord board */,
    chordPositions: [] /* all chord positions array of chordToShow */,
    presentChords : false
  },
  reducers: {
    setChordToShow: (state, action) => {
      state.chordToShow = action.payload;
    },
    setChordPositions: (state, action) => {
      state.chordPositions = [...action.payload];
    },
    togglePresentChords : (state) => {
      state.presentChords = !state.presentChords
    }
  },
});

export const { setChordToShow, setChordPositions, togglePresentChords } = chordChartSlice.actions;
export default chordChartSlice.reducer;
