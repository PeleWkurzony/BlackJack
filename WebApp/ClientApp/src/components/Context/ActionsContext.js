import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    canDouble: true,
    canSplit: false,
    canInsurance: false
};

export const actionsSlice = createSlice({
    name: 'actions',
    initialState,
    reducers: {
        setCanDouble: (state, action) => {
            state.canDouble = action.payload;
        },
        setCanSplit: (state, action) => {
            state.canSplit = action.payload;
        },
        setCanInsurance: (state, action) => {
            state.canInsurance = action.payload;
        }
    }});

export const { setCanDouble, setCanSplit, setCanInsurance } = actionsSlice.actions;




