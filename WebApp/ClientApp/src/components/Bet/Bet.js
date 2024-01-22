import { useState } from 'react';
import { MoneyBet } from "./MoneyBet";
import { BetController } from './BetController';
import './Bet.scss';

export const Bet = () => {
    
    const [isBet, setIsBet] = useState(false);
    const [money, setMoney] = useState(0);
    
    if (isBet === true) {
        return (
            <BetController onAction={(action) => {console.log(action)}}
                           canDouble={true} />
        )
    }
    else if (isBet === false) {
        return (
            <MoneyBet onBetAccept={(bet) => {
                setMoney(bet);
                setIsBet(true);
            }}/>
        )   
    }
    
}