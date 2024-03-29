import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    gameFinished: false,
    whoWon: undefined,
    isStand: false
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
            state.gameFinished = true;
        },
        setIsStand: (state, action) => {
            state.isStand = action.payload;
        }
    }
});

export const { setGameFinished, setIsStand, setWhoWon } = gameManagerSlice.actions;




