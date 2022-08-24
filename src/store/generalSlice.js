import { createSlice } from "@reduxjs/toolkit";

export const generalSlice = createSlice({
    name : 'general',
    initialState : {
        loading : false
    },
    reducers : {
        setStartLoading : (state) => {
            state.loading = true
        },
        setStopLoading : (state) => {
            state.loading = false
        }
    }
});

export const { setStartLoading, setStopLoading } = generalSlice.actions;
export default generalSlice.reducer;