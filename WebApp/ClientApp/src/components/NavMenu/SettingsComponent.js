import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setPlayMusic, setRemoveParticle } from "../Context/ProfileSlice";

/**
 * Represents a component for displaying settings.
 * @returns {JSX.Element} The JSX element representing the SettingsComponent.
 */
export const SettingsComponent = () => {

    const dispatch = useDispatch();
    const playMusic = useSelector((state) => state.profile.playMusic);
    const removeParticles = useSelector((state) => state.profile.removeParticle);
    
    const [collapsed, setCollapsed] = useState(true);
    
    /**
     * Renders the component displaying settings.
     * @returns {JSX.Element} The JSX element representing the SettingsComponent.
     */
    return (
        <div id="nav-menu-settings-container">
            {/* Render settings icon */}
            <a href="" onClick={(e) => {
                e.preventDefault();
                setCollapsed(!collapsed)
            }}> <i id="nav-menu-settings-icon" className="bi bi-gear"></i></a>
            {collapsed ? 
                <></>
            : 
                <div className="nav-menu-settings-details">
                    <label htmlFor="play-audio-settings-options"> Włącz/wyłącz muzykę: </label>
                    <input type="checkbox" id="play-audio-settings-options"
                           checked={playMusic}
                           onChange={() => {dispatch(setPlayMusic(!playMusic))}} />
                    
                    <label htmlFor="nav-settings-remove-particles"> Wyłącz przeszkadzające efekty wizualne: </label>
                    <input id="nav-settings-remove-particles" type="checkbox"
                           checked={removeParticles}
                           onChange={() => { dispatch(setRemoveParticle(!removeParticles)) }} />
                </div>
            }
        </div>
    );
}
