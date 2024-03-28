import { useState } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { changeMoney, changeBet } from "../Context/ProfileSlice";

/**
 * Represents a component for placing a bet with a specific amount of money.
 * @param {object} props - The properties passed to the component.
 * @param {Function} props.onBetAccept - Callback function triggered when the bet is accepted.
 * @returns {JSX.Element} The JSX element representing the MoneyBet component.
 */
export const MoneyBet = ({ onBetAccept }) => {
    
    const money = useSelector((state) => state.profile.money);
    const dispatch = useDispatch();
    
    const [betAmmount, setBetAmmount] = useState(100);

    /**
     * State representing whether the bet amount is invalid.
     * @type {[boolean, Function]} Tuple with state value and setter function.
     */
    const [wrongBet, setWrongBet] = useState(false);

    /**
     * Validates the bet amount and triggers the onBetAccept callback.
     */
    const setupBet = () => {
        if (betAmmount > money) {
            setWrongBet(true);
            return;
        }

        setWrongBet(false);
        
        dispatch(changeMoney(money - betAmmount));
        dispatch(changeBet(betAmmount));
        
        onBetAccept();
    }

    /**
     * Renders the component for placing a bet.
     * @returns {JSX.Element} The JSX element representing the MoneyBet component.
     */
    return (
        <div id="bet-money-container">
            <p id="bet-money-title"> Ile chcesz postawić? </p>

            <input id="bet-money-input" type="number" value={betAmmount} step="1" onChange={(e) => { setBetAmmount(e.target.valueAsNumber) }} />

            <button id="bet-money-accept" onClick={() => { setupBet() }} >
                Akceptuję
            </button>
            {wrongBet ?
                <span id="bet-money-wrong-bet"> Nie masz takiej ilości pieniędzy! </span> :
                <></>
            }
        </div>
    )
}
