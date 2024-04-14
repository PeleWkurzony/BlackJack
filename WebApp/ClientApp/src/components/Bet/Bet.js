import { useState } from 'react';
import { MoneyBet } from "./MoneyBet";
import { BetController } from './BetController';
import './Bet.scss';
import { GameManager } from "../Game/GameManager";
import { useDispatch, useSelector } from "react-redux";
import { addCroupierCard, addPlayerCard, processStandOption, resetCards, splitPlayerCards } from "../Context/CardSlice";
import { resetGameManager, setIsStand } from "../Context/GameManageSlice";
import { changeBet, changeMoney } from "../Context/ProfileSlice";
import { setCanSplit, setCanDouble, setCanInsurance, resetActions } from "../Context/ActionsContext";
import { setInsuranceMoney } from "../Context/ProfileSlice";
import { calculateCardPoints } from "../Cards/CardsPoints";
import { EndGameComponent } from "./EndGameComponent";

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
    const croupiersCards = useSelector((state) => state.card.croupierCards);
    
    const money = useSelector((state) => state.profile.money);
    const bet = useSelector((state) => state.profile.bet);
    const insuranceMoney = useSelector((state) => state.profile.insuranceMoney);

    /**
     * Conditional rendering of components based on 'isBet' state.
     * @returns {JSX.Element} The JSX element representing the BetController or MoneyBet component.
     */
    
    if (isBet === true) {
        return (
            <>
                <GameManager /><div id="game-managerbox">
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
                        dispatch(changeBet(bet * 2));
                        // Process split option
                        dispatch(splitPlayerCards());
                    }
                    else if (action === 'insurance') {
                        // Disable insurance option
                        dispatch(setCanInsurance(false));
                        // Remove half of bet money from all player money
                        dispatch(changeMoney(money - (bet / 2)));
                        // Check if second croupier's card is 10 points required for Blackjack
                        // if true set money to be repaid to player
                        if (calculateCardPoints(croupiersCards[1]) === 10) {
                            setInsuranceMoney(bet);
                        }
                    }
                }} /> :
                    <>
                        <EndGameComponent whoWon={whoWon} beforeRestart={() => {
                            if (whoWon === 'player') {
                                dispatch(changeMoney(
                                    (bet * 2) + insuranceMoney
                                ));
                                dispatch(changeBet(0));
                            }
                        }} onRestart={() => {
                            dispatch(resetGameManager());
                            dispatch(resetActions());
                            dispatch(resetCards());
                            setIsBet(false);
                        }} />
                    </>
                }
                </div>
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
