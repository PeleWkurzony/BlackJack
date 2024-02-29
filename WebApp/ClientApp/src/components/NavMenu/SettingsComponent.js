/**
 * Represents a component for displaying settings.
 * @returns {JSX.Element} The JSX element representing the SettingsComponent.
 */
export const SettingsComponent = () => {

    /**
     * Renders the component displaying settings.
     * @returns {JSX.Element} The JSX element representing the SettingsComponent.
     */
    return (
        <div id="nav-menu-settings-container">
            {/* Render settings icon */}
            <i id="nav-menu-settings-icon" className="bi bi-gear"></i>
        </div>
    );
}
