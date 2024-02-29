import { useContext, useState } from 'react';
import { ProfileContext } from "../Context/ProfileContext";

/**
 * Represents a component for placing a bet with a specific amount of money.
 * @param {object} props - The properties passed to the component.
 * @param {Function} props.onBetAccept - Callback function triggered when the bet is accepted.
 * @returns {JSX.Element} The JSX element representing the MoneyBet component.
 */
export const MoneyBet = ({ onBetAccept }) => {

    /**
     * State representing the amount of bet.
     * @type {[number, Function]} Tuple with state value and setter function.
     */
    const [bet, setBet] = useState(100);

    /**
     * State representing whether the bet amount is invalid.
     * @type {[boolean, Function]} Tuple with state value and setter function.
     */
    const [wrongBet, setWrongBet] = useState(false);

    /**
     * User profile data obtained from context.
     * @type {object}
     */
    const profile = useContext(ProfileContext);

    /**
     * Validates the bet amount and triggers the onBetAccept callback.
     */
    const setupBet = () => {
        const moneyBet = document.querySelector('input#bet-money-input').valueAsNumber;
        if (moneyBet > profile.money) {
            setWrongBet(true);
            return;
        }

        setWrongBet(false);
        profile.moneyBet = moneyBet;
        onBetAccept();
    }

    /**
     * Renders the component for placing a bet.
     * @returns {JSX.Element} The JSX element representing the MoneyBet component.
     */
    return (
        <div id="bet-money-container">
            <p id="bet-money-title"> Ile chcesz postawić? </p>

            <input id="bet-money-input" type="number" value={bet} step="1" onChange={(e) => { e.preventDefault(); setBet(e.target.valueAsNumber) }} />

            <button id="bet-money-accept" onClick={(e) => {
                e.preventDefault();
                setupBet();
            }} >
                Akceptuję
            </button>
            {wrongBet ?
                <span id="bet-money-wrong-bet"> Nie masz takiej ilości pieniędzy! </span> :
                <></>
            }
        </div>
    )
}
