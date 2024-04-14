import { configureStore } from "@reduxjs/toolkit";
import { profileSlice } from "./ProfileSlice";
import { cardSlice } from "./CardSlice";
import { actionsSlice } from "./ActionsContext";
import { gameManagerSlice } from "./GameManageSlice";

/**
 * Redux store configuration.
 * @type {Store}
 */
export const store = configureStore({
    reducer: {
        // Combine reducers for different slices of state
        profile: profileSlice.reducer,         // Reducer for managing player's profile
        card: cardSlice.reducer,               // Reducer for managing cards in the game
        actions: actionsSlice.reducer,         // Reducer for managing available actions in the game
        gameManager: gameManagerSlice.reducer  // Reducer for managing game state
    }
});
