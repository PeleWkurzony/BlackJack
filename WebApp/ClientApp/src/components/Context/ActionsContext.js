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
        },
        resetActions: (state) => {
            state.canDouble = true;
            state.canSplit = false;
            state.canInsurance = false;
        }
    }});

export const { 
    setCanDouble,
    setCanSplit,
    setCanInsurance,
    resetActions
} = actionsSlice.actions;




