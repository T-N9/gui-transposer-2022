import { configureStore } from "@reduxjs/toolkit";
import mainGenReducer from './mainGenSlice';
import currentSongInfoReducer from "./currentSongInfoSlice";
import boardListReducer from "./boardListSlice";
import generalReducer from "./generalSlice";
import userDataReducer from "./userDataSlice";
import alertMessageReducer from "./alertMessageSlice";
import alertBoxReducer from "./alertBoxSlice";
import chordChartReducer from "./chordChartSlice";

export const store = configureStore({
    reducer : {
        mainGen : mainGenReducer,
        currentSongInfo : currentSongInfoReducer,
        boardList : boardListReducer,
        general : generalReducer,
        userData : userDataReducer,
        alertMessage : alertMessageReducer,
        alertBox: alertBoxReducer,
        chordChart : chordChartReducer
    }
})