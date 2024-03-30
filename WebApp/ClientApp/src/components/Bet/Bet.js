import { useState } from 'react';
import { MoneyBet } from "./MoneyBet";
import { BetController } from './BetController';
import './Bet.scss';
import { GameManager } from "../Game/GameManager";
import { useDispatch, useSelector } from "react-redux";
import { addCroupierCard, addPlayerCard, processStandOption, splitPlayerCards } from "../Context/CardSlice";
import { setIsStand } from "../Context/GameManageSlice";
import { changeBet, changeMoney } from "../Context/ProfileSlice";
import { setCanSplit, setCanDouble } from "../Context/ActionsContext";

/**
 * Represents a component managing the betting process.
 * @returns {JSX.Element} The JSX element representing the Bet component.
 */
export const Bet = () => {

    /**
     * State indicating whether a bet has been placed.
     * @type {[boolean, function]} Tuple with state value and setter function.
     */
    const [isBet, setIsBet] = useState(false);
    const dispatch = useDispatch();
    const gameFinished = useSelector((state) => state.gameManager.gameFinished);
    const whoWon = useSelector((state) => state.gameManager.whoWon);
    
    const money = useSelector((state) => state.profile.money);
    const bet = useSelector((state) => state.profile.bet);

    /**
     * Conditional rendering of components based on 'isBet' state.
     * @returns {JSX.Element} The JSX element representing the BetController or MoneyBet component.
     */
    
    if (isBet === true) {
        return (
            <>
                {!gameFinished ? 
                <BetController onAction={(action) => { 
                    if (action === 'hit') {
                        dispatch(addPlayerCard());
                    }
                    else if (action === 'stand') {
                        dispatch(setIsStand(true));
                        dispatch(addCroupierCard());
                        dispatch(processStandOption());
                    }
                    else if (action === 'double') {
                        // Disable double option
                        dispatch(setCanDouble(false));
                        // Set a double money Bet
                        dispatch(changeMoney(money - bet));
                        dispatch(changeBet(bet * 2));
                        // Give player only one card
                        dispatch(addPlayerCard());
                        // Process croupier stand
                        dispatch(setIsStand(true));
                        dispatch(addCroupierCard());
                        dispatch(processStandOption());
                    }
                    else if (action === 'split') {
                        // Disable split option
                        dispatch(setCanSplit(false));
                        // Set a double money Bet
                        dispatch(changeMoney(money - bet));
                        dispatch(changeBet(bet * 2));
                        // Process split option
                        dispatch(splitPlayerCards());
                    }
                    else if (action === 'insurance') {
                        // TODO
                    }
                }} /> :
                    <>
                        <h1> Thanks for playing our game!</h1>
                        <h2> {whoWon} won the game!</h2>
                    </>
                }
                <GameManager />
            </>
        )
    }
    else if (isBet === false) {
        return (
            <MoneyBet onBetAccept={() => {
                setIsBet(true);
            }} />
        )
    }
}
