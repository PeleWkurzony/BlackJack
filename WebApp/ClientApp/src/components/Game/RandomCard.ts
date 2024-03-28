const cardNumbers: string[] = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
const cardTypes: string[] = ['C', 'D', 'H', 'S'];

export function randomCard(): string {
    const number = cardNumbers[Math.floor(Math.random() * cardNumbers.length)];
    const type = cardTypes[Math.floor(Math.random() * cardTypes.length)];
    
    return number + type; 
}