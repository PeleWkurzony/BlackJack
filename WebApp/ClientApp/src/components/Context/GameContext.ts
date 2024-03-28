import { createContext } from "react";

interface GameContextInterface {
    hit: boolean,
    stand: boolean,
    lose: boolean
}

export const GameInitializeContextValue: GameContextInterface = {
    hit: false,
    stand: false,
    lose: false
}

export const GameContext = createContext<GameContextInterface>(GameInitializeContextValue);

