import { useState } from 'react';

export const MoneyComponent = ({ money }) => {
    
    const [moneyAmmount, setMoneyAmmount] = useState(money ? money : 0)
    
    return (
        <div id="nav-menu-money-container">
            <i className="bi bi-cash-coin" id="nav-menu-money-icon"></i>
            <p id="nav-menu-money-ammount"> { moneyAmmount } </p>
        </div>
    )
}