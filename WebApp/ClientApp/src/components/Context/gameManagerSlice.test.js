import {
    gameManagerSlice,
    setGameFinished,
    setIsStand,
    setWhoWon,
    setGameStarted,
    resetGameManager
} from './path/to/your/gameManagerSlice';

// Pomocnicza funkcja do uzyskania pocz¹tkowego stanu
const initialState = {
    gameFinished: false,
    whoWon: undefined,
    isStand: false,
    gameStarted: false
};

describe('gameManagerSlice reducers', () => {
    it('should handle initial state', () => {
        expect(gameManagerSlice.reducer(undefined, { type: 'unknown' })).toEqual(initialState);
    });

    it('should handle setGameFinished', () => {
        const actual = gameManagerSlice.reducer(initialState, setGameFinished(true));
        expect(actual.gameFinished).toBe(true);
    });

    it('should handle setWhoWon', () => {
        const actual = gameManagerSlice.reducer(initialState, setWhoWon('Player 1'));
        expect(actual.whoWon).toBe('Player 1');
        expect(actual.gameFinished).toBe(true);
    });

    it('should handle setIsStand', () => {
        const actual = gameManagerSlice.reducer(initialState, setIsStand(true));
        expect(actual.isStand).toBe(true);
    });

    it('should handle setGameStarted', () => {
        const actual = gameManagerSlice.reducer(initialState, setGameStarted(true));
        expect(actual.gameStarted).toBe(true);
    });

    it('should handle resetGameManager', () => {
        const modifiedState = {
            gameFinished: true,
            whoWon: 'Player 1',
            isStand: true,
            gameStarted: true
        };
        const actual = gameManagerSlice.reducer(modifiedState, resetGameManager());
        expect(actual).toEqual(initialState);
    });
});
