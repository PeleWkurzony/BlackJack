import { createSlice, configureStore } from "@reduxjs/toolkit";

// Initial state for the profile slice
const initialState = {
    // The amount of money the player has
    money: 3000,
    // The current bet amount
    bet: 123,
    insuranceMoney: 0,
    playMusic: true
};

/**
 * Redux slice for managing the player's profile.
 * @type {Slice}
 */
export const profileSlice = createSlice({
    name: 'profile',    // Name of the slice
    initialState,       // Initial state
    reducers: {
        /**
         * Reducer for changing the player's money.
         * @param {object} state - The current state of the profile slice.
         * @param {number} action.payload - The new value for money.
         */
        changeMoney: (state, action) => {
            state.money = action.payload;
        },
        /**
         * Reducer for changing the player's current bet.
         * @param {object} state - The current state of the profile slice.
         * @param {number} action.payload - The new value for bet.
         */
        changeBet: (state, action) => {
            state.bet = action.payload;
        },
        /**
         * Reducer for setting the amount of money reserved for insurance.
         * @param {object} state - The current state of the profile slice.
         * @param {number} action.payload - The new value for insuranceMoney.
         */
        setInsuranceMoney: (state, action) => {
            state.insuranceMoney = action.payload;
        },
        setPlayMusic: (state, action) => {
            state.playMusic = action.payload;
        }
    }
});

// Export individual action creators
export const {
    changeMoney,
    changeBet,
    setInsuranceMoney,
    setPlayMusic
} = profileSlice.actions;

// Configure the Redux store with the profile slice
export const store = configureStore({
    reducer: {
        profile: profileSlice.reducer
    }
});
