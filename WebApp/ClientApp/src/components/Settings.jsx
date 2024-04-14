import React, { useState } from 'react';


function AudioToggle() {
    const [isAudioOn, setIsAudioOn] = useState(false);

    const handleToggle = () => {
        setIsAudioOn(prevState => !prevState);
    };

    return (
        <>
            <div>
                <input
                    type="checkbox"
                    id="audioCheckbox"
                    checked={isAudioOn}
                    onChange={handleToggle}
                />
                <label htmlFor="audioCheckbox">Wlacz / Wylacz muzyke</label>

                {isAudioOn && (
                    <audio id="myAudio" src="Others\onlymp3.app - Bad Piggies Theme-EgAOqt8I5ac-192k-1713108561.mp3" autoPlay loop></audio>
                )}
            </div>
            
        </>
    );
}

export default AudioToggle;