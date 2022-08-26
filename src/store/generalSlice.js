import { createSlice } from "@reduxjs/toolkit";

export const generalSlice = createSlice({
    name : 'general',
    initialState : {
        loading : false,
        isPersonal : false,
    },
    reducers : {
        setStartLoading : (state) => {
            state.loading = true
        },
        setStopLoading : (state) => {
            state.loading = false
        },
        setIsPublicBoard : (state) => {
            state.isPersonal = false
        },
        setIsPersonalBoard : (state) => {
            state.isPersonal = true
        }
    }
});

export const { setStartLoading, setStopLoading, setIsPersonalBoard, setIsPublicBoard } = generalSlice.actions;
export default generalSlice.reducer;