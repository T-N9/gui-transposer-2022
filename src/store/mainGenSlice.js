import { createSlice } from "@reduxjs/toolkit";

export const mainGenSlice = createSlice({
    name : 'mainGen',
    initialState : {
        loading : false
    },
    reducers : {
        setStartLoading : (state) => {
            state.loading = true;
        },
        setStopLoading : (state) => {
            state.loading = false;
        }
    }
});

export const { setStartLoading, setStopLoading } = mainGenSlice.actions;
export default mainGenSlice.reducer;