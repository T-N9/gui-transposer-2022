import { createSlice } from "@reduxjs/toolkit";

export const mainGenSlice = createSlice({
    name : 'mainGen',
    initialState : {
        loading : false,
        detectedChords : [],
        transposedChords : [],
        isFlat : true
    },
    reducers : {
        setStartLoading : (state) => {
            state.loading = true;
        },
        setStopLoading : (state) => {
            state.loading = false;
        },
        sendDetectedChords : (state, action) => {
            state.detectedChords = [...action.payload];
        },
        sendTransposedChords : (state, action) => {
            state.transposedChords = [...action.payload]
        },
        sendFlatType : (state) => {
            state.isFlat = true
        },
        sendSharpType : (state) => {
            state.isFlat = false
        }
    }
});

export const { setStartLoading, setStopLoading, sendDetectedChords, sendTransposedChords, sendFlatType, sendSharpType } = mainGenSlice.actions;
export default mainGenSlice.reducer;