import { useState } from 'react';

export const MoneyBet = ({ onBetAccept }) => {
    
    const [bet, setBet] = useState(0);
    
    return (
        <div id="bet-money-container">
            <p> Ile chcesz postawić? </p>
            
            <input id="bet-money-input" type="number" value={bet} onChange={() => {
                setBet(document.querySelector('#bet-money-input').value)
            }} step="1" />
            
            <button id="bet-money-accept" onClick={(e) => {e.preventDefault(); onBetAccept(bet)}}>
                Akceptuję
            </button>
        </div>
    )
}