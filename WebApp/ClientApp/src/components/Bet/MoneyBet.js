import {useContext, useState} from 'react';
import {ProfileContext} from "../Context/ProfileContext";

export const MoneyBet = ({ onBetAccept }) => {
    
    const [bet, setBet] = useState(100);
    const [wrongBet, setWrongBet] = useState(false);
    const profile = useContext(ProfileContext);
    const setupBet = () => {
        const moneyBet = document.querySelector('input#bet-money-input').valueAsNumber;
        if (moneyBet > profile.money) {
            setWrongBet(true);
            return;
        }
        
        setWrongBet(false);
        profile.moneyBet = moneyBet;
        onBetAccept()
    }
    
    return (
        <div id="bet-money-container">
            <p id="bet-money-title"> Ile chcesz postawić? </p>
            
            <input id="bet-money-input" type="number" value={bet} step="1" onChange={(e) => {e.preventDefault(); setBet(e.target.valueAsNumber)}} />
            
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