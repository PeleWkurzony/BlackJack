import { createSlice } from "@reduxjs/toolkit";

// Initial state for the actions slice
const initialState = {
    canDouble: true,    // Indicates whether the player can double down
    canSplit: false,    // Indicates whether the player can split their hand
    canInsurance: false // Indicates whether the player can take insurance
};

/**
 * Redux slice for managing available actions in the game.
 * @type {Slice}
 */
export const actionsSlice = createSlice({
    name: 'actions',    // Name of the slice
    initialState,       // Initial state
    reducers: {
        /**
         * Reducer for setting the availability of doubling down.
         * @param {object} state - The current state of the actions slice.
         * @param {boolean} action.payload - The new value for canDouble.
         */
        setCanDouble: (state, action) => {
            state.canDouble = action.payload;
        },
        /**
         * Reducer for setting the availability of splitting.
         * @param {object} state - The current state of the actions slice.
         * @param {boolean} action.payload - The new value for canSplit.
         */
        setCanSplit: (state, action) => {
            state.canSplit = action.payload;
        },
        /**
         * Reducer for setting the availability of insurance.
         * @param {object} state - The current state of the actions slice.
         * @param {boolean} action.payload - The new value for canInsurance.
         */
        setCanInsurance: (state, action) => {
            state.canInsurance = action.payload;
        },
        /**
         * Reducer for resetting all action availabilities to default values.
         * @param {object} state - The current state of the actions slice.
         */
        resetActions: (state) => {
            state.canDouble = true;
            state.canSplit = false;
            state.canInsurance = false;
        }
    }
});

// Export individual action creators
export const {
    setCanDouble,
    setCanSplit,
    setCanInsurance,
    resetActions
} = actionsSlice.actions;





