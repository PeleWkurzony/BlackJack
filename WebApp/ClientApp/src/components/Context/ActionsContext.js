"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ActionsContext = void 0;
const react_1 = require("react");
exports.ActionsContext = (0, react_1.createContext)({
    canDouble: true,
    canSplit: false,
    canInsurance: false
});
