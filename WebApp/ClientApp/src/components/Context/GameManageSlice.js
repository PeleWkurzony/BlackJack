import { createSlice } from "@reduxjs/toolkit";

// Initial state for the game manager slice
const initialState = {
    // Indicates whether the game has finished
    gameFinished: false,
    // Indicates the winner of the game (undefined if game is ongoing)
    whoWon: undefined,
    // Indicates whether the player has chosen to stand
    isStand: false
};

/**
 * Redux slice for managing the game state.
 * @type {Slice}
 */
export const gameManagerSlice = createSlice({
    name: 'gameManager',  // Name of the slice
    initialState,         // Initial state
    reducers: {
        /**
         * Reducer for setting the game finished status.
         * @param {object} state - The current state of the game manager slice.
         * @param {boolean} action.payload - The new value for gameFinished.
         */
        setGameFinished: (state, action) => {
            state.gameFinished = action.payload;
        },
        /**
         * Reducer for setting the winner of the game.
         * @param {object} state - The current state of the game manager slice.
         * @param {string|undefined} action.payload - The winner of the game or undefined if game is ongoing.
         */
        setWhoWon: (state, action) => {
            state.whoWon = action.payload;
            state.gameFinished = true;  // Automatically set game as finished when winner is determined
        },
        /**
         * Reducer for setting the stand status.
         * @param {object} state - The current state of the game manager slice.
         * @param {boolean} action.payload - The new value for isStand.
         */
        setIsStand: (state, action) => {
            state.isStand = action.payload;
        },
        /**
         * Reducer for resetting the game manager state to default values.
         * @param {object} state - The current state of the game manager slice.
         */
        resetGameManager: (state) => {
            state.gameFinished = false;
            state.whoWon = undefined;
            state.isStand = false;
        }
    }
});

// Export individual action creators
export const {
    setGameFinished,
    setIsStand,
    setWhoWon,
    resetGameManager
} = gameManagerSlice.actions;
