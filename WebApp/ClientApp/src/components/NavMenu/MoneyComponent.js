import {useContext, useState} from 'react';
import {ProfileContext} from "../Context/ProfileContext";

export const MoneyComponent = () => {
    
    const profile = useContext(ProfileContext)
    
    return (
        <div id="nav-menu-money-container">
            <i className="bi bi-cash-coin" id="nav-menu-money-icon"></i>
            <p id="nav-menu-money-ammount"> { profile.money } </p>
        </div>
    )
}