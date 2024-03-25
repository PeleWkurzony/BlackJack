"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.calculatePoints = void 0;
const calculatePoints = (cardName) => {
    const specialCards = ['J', 'Q', 'K'];
    // If cardName.length is equal to 3 that means that the card is 10 point card
    if (cardName.length === 3) {
        return 10;
    }
    if (cardName.length === 2) {
        // If first char is number
        if (typeof parseInt(cardName[0]) === 'number' && !isNaN(parseInt(cardName[0]))) {
            return parseInt(cardName[0]);
        }
        // If first char is type of string that match ['A', 'J', 'Q', 'K']
        if (typeof cardName[0] === 'string') {
            if (specialCards.includes(cardName[0])) {
                return 10;
            }
            // If card is As that returns 101 that means 1 or 10 which is better for player in game.
            // to implement in game logic
            if (cardName[0] === 'A') {
                return 101;
            }
        }
    }
    throw new Error('Parameter cardName is not valid value!');
};
exports.calculatePoints = calculatePoints;
