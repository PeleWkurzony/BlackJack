import { createSlice, configureStore } from "@reduxjs/toolkit";

const initialState = {
    money: 3000,
    bet: 123
};

export const profileSlice = createSlice({
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


