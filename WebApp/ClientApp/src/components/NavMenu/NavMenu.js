import { MoneyContainer } from "./MoneyContainer";
import { SettingsContainer } from "./SettingsContainer";
import 'bootstrap-icons/font/bootstrap-icons.min.css';
import './NavMenu.scss';

export const NavMenu = () => {
    
    return <>
        <div id="nav-menu-container">
            <MoneyContainer money={100} />
            <SettingsContainer />
        </div>
    </>
}