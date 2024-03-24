
export const calculatePoints = (cardName: string): number => {
    const specialCards = ['J', 'Q', 'K'];
    
    // If cardName.length is equal to 3 that means that the card is 10 point card
    if (cardName.length === 3) {
        return 10;
    }
    if (cardName.length === 2) {
        if (typeof parseInt(cardName[0]) === 'number' && !isNaN(parseInt(cardName[0]))) {
            return parseInt(cardName[0]);
        }
        if (typeof cardName[0] === 'string') {
            if (specialCards.includes(cardName[0])) {
                return 10;
            }
            if (cardName[0] === 'A') {
                return 101;
            }
        }
    }
    
    throw new Error('Parameter cardName is not valid value!');
}