"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GameContext = exports.GameInitializeContextValue = void 0;
const react_1 = require("react");
exports.GameInitializeContextValue = {
    hit: false,
    stand: false,
    lose: false
};
exports.GameContext = (0, react_1.createContext)(exports.GameInitializeContextValue);
