import { createContext } from "react";

export interface ProfileContext {
    money: number,
    moneyBet?: number
}

export const ProfileContext = createContext<ProfileContext>({
    money: 2137
});