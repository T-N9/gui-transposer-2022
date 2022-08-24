import { configureStore } from "@reduxjs/toolkit";
import mainGenReducer from './mainGenSlice';
import currentSongInfoReducer from "./currentSongInfoSlice";
import boardListReducer from "./boardListSlice";
import generalReducer from "./generalSlice";

export const store = configureStore({
    reducer : {
        mainGen : mainGenReducer,
        currentSongInfo : currentSongInfoReducer,
        boardList : boardListReducer,
        general : generalReducer
    }
})