import { configureStore } from "@reduxjs/toolkit";
import mainGenReducer from './mainGenSlice';
import currentSongInfoReducer from "./currentSongInfoSlice";

export const store = configureStore({
    reducer : {
        mainGen : mainGenReducer,
        currentSongInfo : currentSongInfoReducer
    }
})