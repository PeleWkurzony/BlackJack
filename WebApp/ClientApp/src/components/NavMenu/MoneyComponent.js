import { useContext } from 'react';
import { ProfileContext } from "../Context/ProfileContext";

/**
 * Represents a component displaying the user's current money amount.
 * @returns {JSX.Element} The JSX element representing the MoneyComponent.
 */
export const MoneyComponent = () => {

    /**
     * User profile data obtained from context.
     * @type {object}
     */
    const profile = useContext(ProfileContext);

    /**
     * Renders the component displaying the user's money amount.
     * @returns {JSX.Element} The JSX element representing the MoneyComponent.
     */
    return (
        <div id="nav-menu-money-container">
            <i className="bi bi-cash-coin" id="nav-menu-money-icon"></i>
            <p id="nav-menu-money-ammount"> {profile.money} </p>
        </div>
    )
}
