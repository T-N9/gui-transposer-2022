import React, { createContext } from "react";
import { useDispatch } from "react-redux";

/* Redux actions */
import { setStartAlert, setStopAlert } from "../store/alertMessageSlice";

const AlertContext = createContext();

const AlertContextProvider = (props) => {
  const dispatch = useDispatch();

  const handleCallAlert = (message, status) => {
    dispatch(setStartAlert({ message, status }));

    setTimeout(() => {
      dispatch(setStopAlert());
    }, 3000);
  };

  return (
    <AlertContext.Provider
      value={{
        handleCallAlert,
      }}
    >
      {props.children}
    </AlertContext.Provider>
  );
};

export { AlertContextProvider, AlertContext };
