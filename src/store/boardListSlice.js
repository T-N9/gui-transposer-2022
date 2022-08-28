import { createSlice } from "@reduxjs/toolkit";

export const boardListSlice = createSlice({
    name : 'boardList',
    initialState : {
        boardList : [],
        personalBoardList : []
    },
    reducers : {
        sendBoardList : (state , action) => {
            state.boardList = [...action.payload];
        },
        sendPersonalBoardList: (state, action) => {
            state.personalBoardList = [...action.payload]
        },
        clearAllBoardLists : (state) => {
            state.boardList = []
            state.personalBoardList = []
        }
    }
});

export const { sendBoardList, sendPersonalBoardList, clearAllBoardLists } = boardListSlice.actions;
export default boardListSlice.reducer;