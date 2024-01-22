import { MoneyComponent } from "./MoneyComponent";
import { SettingsComponent } from "./SettingsComponent";
import "./NavMenu.scss";
import 'bootstrap-icons/font/bootstrap-icons.min.css'

export const NavMenu = () => {
    
    return <>
        <div id="nav-menu">
            <MoneyComponent money={10} />
            <SettingsComponent />
        </div>
    </>
} 