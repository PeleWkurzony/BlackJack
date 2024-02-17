import {useContext, useState} from 'react';
import { MoneyBet } from "./MoneyBet";
import { BetController } from './BetController';
import './Bet.scss';
import { ProfileContext } from "../Context/ProfileContext";

export const Bet = () => {
    
    const [isBet, setIsBet] = useState(false);
    const profile = useContext(ProfileContext);
    
    if (isBet === true) {
        return (
            <BetController onAction={(action) => {console.log(action, profile.moneyBet);}} />
        )
    }
    else if (isBet === false) {
        return (
            <MoneyBet onBetAccept={() => {
                setIsBet(true);
            }}/>
        )   
    }
    
}