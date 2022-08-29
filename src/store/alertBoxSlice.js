import { createSlice } from "@reduxjs/toolkit";

export const alertBoxSlice = createSlice({
    name : 'alertBox',
    initialState : {
        message : '',
        alert : false
    },
    reducers : {
        setAlertMessage : (state, action) => {
            state.message = action.payload;
        },
        setOpenAlert : (state) => {
            state.alert = true;
        },
        setCloseAlert : (state) => {
            state.alert = false;
        }
    }
});

export const { setAlertMessage, setOpenAlert, setCloseAlert } = alertBoxSlice.actions;
export default alertBoxSlice.reducer;