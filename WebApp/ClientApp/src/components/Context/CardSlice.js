import { createSlice } from "@reduxjs/toolkit";
import { randomCard } from "../Game/RandomCard";
import { calculateCardPoints } from "../Cards/CardsPoints";

const initialState = {
    croupierCards: [
        {
            cardValue: randomCard(),
            cardReversed: false
        },
        {
            cardValue: randomCard(),
            cardReversed: true
        }
    ],
    playerCards: [
        {
            cardValue: randomCard(),
            cardReversed: false
        },
        {
            cardValue: randomCard(),
            cardReversed: false
        }
    ],
    croupierEnded: false,
    croupierNeedCards: true
};

export const cardSlice = createSlice({
    name: 'cards',
    initialState,
    reducers: {
        addCroupierCard: (state) => {
            if (state.croupierCards[1].cardReversed === true) {
                state.croupierCards[1].cardReversed = false;
            }
            else {
                state.croupierCards.push({
                    cardValue: randomCard(),
                    cardReversed: false
                })
            }
        },
        processStandOption: (state) => {
            while (calculateCardPoints(state.croupierCards) < 17 && state.croupierNeedCards) {
                state.croupierCards.push({
                    cardValue: randomCard(),
                    cardReversed: false
                })
            }
            state.croupierEnded = true;
        },
        setCroupierNeedCards: (state, action) => {
            state.croupierNeedCards = action.payload;
        },
        addPlayerCard: (state) => {
            state.playerCards.push({
                cardValue: randomCard(),
                cardReversed: false
            })
        }
    }
});

export const { addCroupierCard, processStandOption, setCroupierNeedCards, addPlayerCard } = cardSlice.actions;




