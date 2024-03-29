"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.randomCard = void 0;
const cardNumbers = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
const cardTypes = ['C', 'D', 'H', 'S'];
function randomCard() {
    const number = cardNumbers[Math.floor(Math.random() * cardNumbers.length)];
    const type = cardTypes[Math.floor(Math.random() * cardTypes.length)];
    return number + type;
}
exports.randomCard = randomCard;
