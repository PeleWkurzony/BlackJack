import { useContext, useState } from 'react';
import { MoneyBet } from "./MoneyBet";
import { BetController } from './BetController';
import './Bet.scss';
import { ProfileContext } from "../Context/ProfileContext";

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

    /**
     * User profile data obtained from context.
     * @type {object}
     */
    const profile = useContext(ProfileContext);

    /**
     * Conditional rendering of components based on 'isBet' state.
     * @returns {JSX.Element} The JSX element representing the BetController or MoneyBet component.
     */
    if (isBet === true) {
        return (
            <BetController onAction={(action) => { console.log(action, profile.moneyBet); }} />
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
