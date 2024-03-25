import { useSelector } from "react-redux";

/*
 * Represents a component displaying the user's current money amount.
 * @returns {JSX.Element} The JSX element representing the MoneyComponent.
 */

export const MoneyComponent = ({ forceToUpdate }) => {
    
    const money = useSelector((state) => state.profile.money);
    
    /**
     * Renders the component displaying the user's money amount.
     * @returns {JSX.Element} The JSX element representing the MoneyComponent.
     */
    return (
        <div id="nav-menu-money-container">
            <i className="bi bi-cash-coin" id="nav-menu-money-icon"></i>
            <p id="nav-menu-money-ammount"> {money} </p>
        </div>
    )
}
