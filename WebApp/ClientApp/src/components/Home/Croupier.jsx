import { useSelector } from "react-redux";

/**
 * Component representing the croupier in the game.
 * @returns {JSX.Element} The JSX element representing the Croupier component.
 */
export const Croupier = () => {

    // Token image URLs
    const token = '/Others/coinFall.png';
    const token2 = '/Others/coinFall2.png'
    const gameStarted = useSelector((state) => state.gameManager.gameStarted);
    const removeParticle = useSelector((state) => state.profile.removeParticle);

    // Render the croupier component
    return (
        <div id="croupier">
            {/* Croupier image */}
            <img id="croupierImg" src="/Others/krupier1.png" alt="croupier" />

            {/* Falling tokens */}
            {(!gameStarted || !removeParticle) ? 
                <>
                    <img id="token-fall" alt="" className="right" src={token}></img>
                    <img id="token-fall" alt="" className="right2" src={token}></img>
                    <img id="token-fall"  alt="" className="left" src={token}></img>
                    <img id="token-fall"  alt="" className="left2" src={token}></img>
                    <img id="token-fall"  alt="" className="right" src={token}></img>
                    
                    <img id="token-fall2" alt="" className="right3" src={token2}></img>
                    <img id="token-fall2"  alt="" className="left3" src={token2}></img>
                    <img id="token-fall2"  alt="" className="left4" src={token2}></img>
                    <img id="token-fall2"  alt="" className="right4" src={token2}></img>
                </>
            : <></> }
        </div>
    );
}
