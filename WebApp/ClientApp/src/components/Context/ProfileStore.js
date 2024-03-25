import { createSlice, configureStore } from "@reduxjs/toolkit";

const initialState = {
    money: 3000,
    bet: 123
};

const profileSlice = createSlice({
    name: 'profile',
    initialState,
    reducers: {
        changeMoney: (state, action) => {
            state.money = action.payload;
        },
        changeBet: (state, action) => {
            state.bet = action.payload;
        }
    }
});

export const { changeMoney, changeBet } = profileSlice.actions;

export const profile = configureStore({
    reducer: {
        profile: profileSlice.reducer
    }
});


