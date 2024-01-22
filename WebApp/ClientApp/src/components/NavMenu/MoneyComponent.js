import { useState } from 'react';

export const MoneyComponent = ({ money }) => {
    
    const [moneyAmmount, setMoneyAmmount] = useState(money);
    
    return (
        <div id="nav-menu-money">
            <img id="nav-menu-money-icon" src="/Others/cash-coin.svg" alt="$" />
            <p id="nav-menu-money-ammount"> {moneyAmmount} </p>
        </div>
    )
}