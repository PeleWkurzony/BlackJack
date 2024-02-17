import { createContext } from "react";

export interface ActionsInterface {
    canDouble: boolean,
    canSplit: boolean,
    canInsurance: boolean,
}

export const ActionsContext = createContext<ActionsInterface> ({
    canDouble: true,
    canSplit: false,
    canInsurance: false
})