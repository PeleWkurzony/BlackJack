import { useEffect } from "react";

export const EndGameComponent = ({ beforeRestart, onRestart, whoWon }) => {

    useEffect(() => {
        beforeRestart();
    }, []);
    
    return (
        <div id="end-game">
            {whoWon === 'draw' ?
                <h2> Draw </h2> :
                <h2> {whoWon} won the game! </h2>
            }  
            
            <button id="end-game-restart-button" onClick={() => {onRestart()}}>
                Play new game
            </button>
        </div>
    )
}