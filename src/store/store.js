import { configureStore } from "@reduxjs/toolkit";
import mainGenReducer from './mainGenSlice';
import currentSongInfoReducer from "./currentSongInfoSlice";
import boardListReducer from "./boardListSlice";

export const store = configureStore({
    reducer : {
        mainGen : mainGenReducer,
        currentSongInfo : currentSongInfoReducer,
        boardList : boardListReducer
    }
})