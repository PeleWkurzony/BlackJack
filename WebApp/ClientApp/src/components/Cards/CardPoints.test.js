const { calculateCardPoints } = require('./path_to_calculateCardPoints');

describe('calculateCardPoints', () => {
    test('calculates points correctly for a hand without any aces or special cards', () => {
        const cards = [
            { cardValue: '3', cardReversed: false },
            { cardValue: '4', cardReversed: false }
        ];
        expect(calculateCardPoints(cards)).toBe(7);
    });

    test('calculates points correctly for a hand with a face card', () => {
        const cards = [
            { cardValue: '3', cardReversed: false },
            { cardValue: 'K', cardReversed: false }
        ];
        expect(calculateCardPoints(cards)).toBe(13);
    });

    test('calculates points correctly for a hand with an ace', () => {
        const cards = [
            { cardValue: 'A', cardReversed: false },
            { cardValue: '9', cardReversed: false }
        ];
        expect(calculateCardPoints(cards)).toBe(20);
    });

    test('calculates points correctly for a hand with multiple aces', () => {
        const cards = [
            { cardValue: 'A', cardReversed: false },
            { cardValue: 'A', cardReversed: false },
            { cardValue: '8', cardReversed: false }
        ];
        expect(calculateCardPoints(cards)).toBe(20); // One ace counts as 11, the other as 1
    });

    test('adjusts ace value if total points exceed 21', () => {
        const cards = [
            { cardValue: 'A', cardReversed: false },
            { cardValue: '9', cardReversed: false },
            { cardValue: 'K', cardReversed: false }
        ];
        expect(calculateCardPoints(cards)).toBe(20); // Ace adjusts from 11 to 1
    });

    test('does not count reversed cards when withoutReversed is true', () => {
        const cards = [
            { cardValue: '3', cardReversed: false },
            { cardValue: 'K', cardReversed: true }
        ];
        expect(calculateCardPoints(cards, true)).toBe(3);
    });

    test('throws an error for invalid card name', () => {
        const cards = [
            { cardValue: 'Z', cardReversed: false }
        ];
        expect(() => calculateCardPoints(cards)).toThrow('Parameter cardName is not valid value!');
    });

    test('calculates points correctly for a 10 point card', () => {
        const cards = [
            { cardValue: '10', cardReversed: false }
        ];
        expect(calculateCardPoints(cards)).toBe(10);
    });

    test('handles mixed valid card values', () => {
        const cards = [
            { cardValue: '2', cardReversed: false },
            { cardValue: '5', cardReversed: false },
            { cardValue: 'J', cardReversed: false }
        ];
        expect(calculateCardPoints(cards)).toBe(17);
    });
});