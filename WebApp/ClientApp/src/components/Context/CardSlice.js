import { createSlice } from "@reduxjs/toolkit";
import { randomCard } from "../Game/RandomCard";
import { calculateCardPoints } from "../Cards/CardsPoints";

// Initial state for the card slice
const initialState = {
    // Croupier's cards
    croupierCards: [
        {
            cardValue: randomCard(), // Generate random card value
            cardReversed: false      // Indicates whether the card is reversed (face down)
        },
        {
            cardValue: randomCard(), // Generate random card value
            cardReversed: true       // Indicates whether the card is reversed (face down)
        }
    ],
    // Player's cards
    playerCards: [
        {
            cardValue: randomCard(), // Generate random card value
            cardReversed: false      // Indicates whether the card is reversed (face down)
        },
        {
            cardValue: randomCard(), // Generate random card value
            cardReversed: false      // Indicates whether the card is reversed (face down)
        }
    ],
    // Indicates whether the croupier's turn has ended
    croupierEnded: false,
    // Indicates whether the croupier needs additional cards
    croupierNeedCards: true
};

/**
 * Redux slice for managing cards in the game.
 * @type {Slice}
 */
export const cardSlice = createSlice({
    name: 'cards',    // Name of the slice
    initialState,     // Initial state
    reducers: {
        /**
         * Reducer for adding a croupier's card.
         * @param {object} state - The current state of the cards slice.
         */
        addCroupierCard: (state) => {
            // If the second croupier's card is reversed, reveal it
            if (state.croupierCards[1].cardReversed === true) {
                state.croupierCards[1].cardReversed = false;
            }
            // Otherwise, add a new card to the croupier's cards
            else {
                state.croupierCards.push({
                    cardValue: randomCard(), // Generate random card value
                    cardReversed: false      // New card is face up
                });
            }
        },
        /**
         * Reducer for processing the "Stand" option.
         * @param {object} state - The current state of the cards slice.
         */
        processStandOption: (state) => {
            // While croupier's card points are less than 17 and croupier needs cards
            while (calculateCardPoints(state.croupierCards) < 17 && state.croupierNeedCards) {
                // Add a new card to the croupier's cards
                state.croupierCards.push({
                    cardValue: randomCard(), // Generate random card value
                    cardReversed: false      // New card is face up
                });
            }
            // Set croupier's turn to ended
            state.croupierEnded = true;
        },
        /**
         * Reducer for setting whether the croupier needs additional cards.
         * @param {object} state - The current state of the cards slice.
         * @param {boolean} action.payload - The new value for croupierNeedCards.
         */
        setCroupierNeedCards: (state, action) => {
            state.croupierNeedCards = action.payload;
            for (const card of state.croupierCards) {
                card.cardReversed = false;
            }
        },
        /**
         * Reducer for adding a player's card.
         * @param {object} state - The current state of the cards slice.
         */
        addPlayerCard: (state) => {
            // Add a new card to the player's cards
            state.playerCards.push({
                cardValue: randomCard(), // Generate random card value
                cardReversed: false      // New card is face up
            });
        },
        /**
         * Reducer for removing one of the player's cards (for splitting).
         * @param {object} state - The current state of the cards slice.
         */
        splitPlayerCards: (state) => {
            // Remove the last card from the player's cards
            state.playerCards.pop();
        },
        /**
         * Reducer for resetting all cards to default values.
         * @param {object} state - The current state of the cards slice.
         */
        resetCards: (state) => {
            // Reset croupier's cards
            state.croupierCards = [
                {
                    cardValue: randomCard(), // Generate random card value
                    cardReversed: false      // New card is face up
                },
                {
                    cardValue: randomCard(), // Generate random card value
                    cardReversed: true       // Second card is face down
                }
            ];
            // Reset player's cards
            state.playerCards = [
                {
                    cardValue: randomCard(), // Generate random card value
                    cardReversed: false      // New card is face up
                },
                {
                    cardValue: randomCard(), // Generate random card value
                    cardReversed: false      // New card is face up
                }
            ];
            // Reset croupier's turn and need for cards flags
            state.croupierEnded = false;
            state.croupierNeedCards = true;
        }
    }
});

// Export individual action creators
export const {
    addCroupierCard,
    processStandOption,
    setCroupierNeedCards,
    addPlayerCard,
    splitPlayerCards,
    resetCards
} = cardSlice.actions;
