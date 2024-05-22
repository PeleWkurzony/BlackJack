import { cardSlice, addCroupierCard, processStandOption, setCroupierNeedCards, addPlayerCard, splitPlayerCards, resetCards } from '../cardSlice';
import { randomCard } from '../Game/RandomCard';
import { calculateCardPoints } from '../Cards/CardsPoints';

// Mockowanie randomCard i calculateCardPoints
jest.mock('../Game/RandomCard', () => ({
    randomCard: jest.fn()
}));
jest.mock('../Cards/CardsPoints', () => ({
    calculateCardPoints: jest.fn()
}));

describe('cardSlice', () => {
    const initialState = {
        croupierCards: [
            { cardValue: 10, cardReversed: false },
            { cardValue: 5, cardReversed: true }
        ],
        playerCards: [
            { cardValue: 2, cardReversed: false },
            { cardValue: 3, cardReversed: false }
        ],
        croupierEnded: false,
        croupierNeedCards: true
    };

    beforeEach(() => {
        randomCard.mockReturnValue(1);
        calculateCardPoints.mockReturnValue(15);
    });

    it('should return the initial state', () => {
        expect(cardSlice.reducer(undefined, {})).toEqual(initialState);
    });

    it('should handle addCroupierCard when the second card is reversed', () => {
        const previousState = { ...initialState };
        const expectedState = {
            ...initialState,
            croupierCards: [
                { cardValue: 10, cardReversed: false },
                { cardValue: 5, cardReversed: false }
            ]
        };
        expect(cardSlice.reducer(previousState, addCroupierCard())).toEqual(expectedState);
    });

    it('should handle addCroupierCard when the second card is not reversed', () => {
        const previousState = { ...initialState, croupierCards: [{ cardValue: 10, cardReversed: false }, { cardValue: 5, cardReversed: false }] };
        const expectedState = {
            ...initialState,
            croupierCards: [
                { cardValue: 10, cardReversed: false },
                { cardValue: 5, cardReversed: false },
                { cardValue: 1, cardReversed: false }
            ]
        };
        expect(cardSlice.reducer(previousState, addCroupierCard())).toEqual(expectedState);
    });

    it('should handle processStandOption', () => {
        calculateCardPoints.mockReturnValueOnce(15).mockReturnValueOnce(18);
        const previousState = { ...initialState };
        const expectedState = {
            ...initialState,
            croupierCards: [
                { cardValue: 10, cardReversed: false },
                { cardValue: 5, cardReversed: true },
                { cardValue: 1, cardReversed: false }
            ],
            croupierEnded: true
        };
        expect(cardSlice.reducer(previousState, processStandOption())).toEqual(expectedState);
    });

    it('should handle setCroupierNeedCards', () => {
        const previousState = { ...initialState };
        const expectedState = {
            ...initialState,
            croupierNeedCards: false,
            croupierCards: [
                { cardValue: 10, cardReversed: false },
                { cardValue: 5, cardReversed: false }
            ]
        };
        expect(cardSlice.reducer(previousState, setCroupierNeedCards(false))).toEqual(expectedState);
    });

    it('should handle addPlayerCard', () => {
        const previousState = { ...initialState };
        const expectedState = {
            ...initialState,
            playerCards: [
                { cardValue: 2, cardReversed: false },
                { cardValue: 3, cardReversed: false },
                { cardValue: 1, cardReversed: false }
            ]
        };
        expect(cardSlice.reducer(previousState, addPlayerCard())).toEqual(expectedState);
    });

    it('should handle splitPlayerCards', () => {
        const previousState = { ...initialState };
        const expectedState = {
            ...initialState,
            playerCards: [
                { cardValue: 2, cardReversed: false }
            ]
        };
        expect(cardSlice.reducer(previousState, splitPlayerCards())).toEqual(expectedState);
    });

    it('should handle resetCards', () => {
        const previousState = {
            croupierCards: [{ cardValue: 10, cardReversed: false }, { cardValue: 5, cardReversed: true }, { cardValue: 1, cardReversed: false }],
            playerCards: [{ cardValue: 2, cardReversed: false }, { cardValue: 3, cardReversed: false }, { cardValue: 4, cardReversed: false }],
            croupierEnded: true,
            croupierNeedCards: false
        };
        const expectedState = initialState;

        expect(cardSlice.reducer(previousState, resetCards())).toEqual(expectedState);
    });
});
