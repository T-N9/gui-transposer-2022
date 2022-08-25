import { createSlice } from "@reduxjs/toolkit";

export const alertMessageSlice = createSlice({
  name: "alertMessage",
  initialState: {
    alert: false,
    message: "",
    status: "normal",
  },
  reducers: {
    setStartAlert: (state, action) => {
      console.log(action.payload)
      state.message = action.payload.message;
      state.status = action.payload.status
      state.alert = true;
    },
    setStopAlert: (state) => {
      state.alert = false;
    },
    setAlertMessage: (state, action) => {
      state.message = action.payload;
    },
    setAlertStatus: (state, action) => {
      state.message = action.payload;
    },
  },
});

export const { setStartAlert, setStopAlert, setAlertMessage, setAlertStatus } =
  alertMessageSlice.actions;
export default alertMessageSlice.reducer;
