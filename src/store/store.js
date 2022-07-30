import { configureStore } from "@reduxjs/toolkit";
import mainGenReducer from './mainGenSlice';

export const store = configureStore({
    reducer : {
        mainGen : mainGenReducer
    }
})