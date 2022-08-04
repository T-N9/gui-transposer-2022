import { createSlice } from "@reduxjs/toolkit";

export const boardListSlice = createSlice({
    name : 'boardList',
    initialState : {
        boardList : []
    },
    reducers : {
        sendBoardList : (state , action) => {
            state.boardList = [...action.payload];
        }
    }
});

export const { sendBoardList } = boardListSlice.actions;
export default boardListSlice.reducer;