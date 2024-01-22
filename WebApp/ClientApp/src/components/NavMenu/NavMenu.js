import { MoneyComponent } from "./MoneyComponent";
import { SettingsComponent } from "./SettingsComponent";
import "./NavMenu.scss";

export const NavMenu = () => {
    
    return <>
        <div id="nav-menu">
            <MoneyComponent money={10} />
            <SettingsComponent />
        </div>
    </>
} 