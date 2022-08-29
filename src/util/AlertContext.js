import React, { createContext } from "react";
import { useDispatch } from "react-redux";

/* Redux actions */
import { setStartAlert, setStopAlert } from "../store/alertMessageSlice";
import { setAlertMessage, setOpenAlert } from '../store/alertBoxSlice';

const AlertContext = createContext();

const AlertContextProvider = (props) => {
  const dispatch = useDispatch();

  const handleCallAlert = (message, status) => {
    dispatch(setStartAlert({ message, status }));

    setTimeout(() => {
      dispatch(setStopAlert());
    }, 3000);
  };

  const handleCallAlertBox = (message) => {
    dispatch(setAlertMessage(message));
    dispatch(setOpenAlert());
  }

  return (
    <AlertContext.Provider
      value={{
        handleCallAlert,
        handleCallAlertBox
      }}
    >
      {props.children}
    </AlertContext.Provider>
  );
};

export { AlertContextProvider, AlertContext };
