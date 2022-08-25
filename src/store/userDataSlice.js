import { createSlice } from "@reduxjs/toolkit";

export const userDataSlice = createSlice({
    name : 'userData',
    initialState : {
        profile : {}
    },
    reducers : {
        setUserData : (state, action) => {
            state.profile = action.payload;
        }
    }
});

export const { setUserData } = userDataSlice.actions;
export default userDataSlice.reducer;