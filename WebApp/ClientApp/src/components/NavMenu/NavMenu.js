import { MoneyComponent } from "./MoneyComponent";
import { SettingsComponent } from "./SettingsComponent";
import "./NavMenu.scss";
import 'bootstrap-icons/font/bootstrap-icons.min.css';

/**
 * Represents a navigation menu component.
 * @returns {JSX.Element} The JSX element representing the NavMenu component.
 */
export const NavMenu = () => {

    /**
     * Renders the navigation menu component.
     * @returns {JSX.Element} The JSX element representing the NavMenu component.
     */
    return (
        <>
            <div id="nav-menu">
                {/* Render MoneyComponent to display user money */}
                <MoneyComponent money={10} />
                <div class="logo glowing-text">Blackjack Casino</div>
                {/* Render SettingsComponent for user settings */}
                        <SettingsComponent />
            </div>
        </>
    );
}
