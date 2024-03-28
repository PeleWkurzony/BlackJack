import { configureStore } from "@reduxjs/toolkit";
import { profileSlice } from "./ProfileSlice";
import { cardSlice } from "./CardSlice";
import { actionsSlice } from "./ActionsContext";
import { gameManagerSlice } from "./GameManageSlice";

export const store = configureStore({
    reducer: {
        profile: profileSlice.reducer,
        card: cardSlice.reducer,
        actions: actionsSlice.reducer,
        gameManager: gameManagerSlice.reducer
    }
});