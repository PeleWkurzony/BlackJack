import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    gameFinished: false,
    whoWon: undefined
};

export const gameManagerSlice = createSlice({
    name: 'gameManager',
    initialState,
    reducers: {
        setGameFinished: (state, action) => {
            state.gameFinished = action.payload;
        },
        setWhoWon: (state, action) => {
            state.whoWon = action.payload;
        }
    }
});

export const { setGameFinished, setWhoWon } = gameManagerSlice.actions;




