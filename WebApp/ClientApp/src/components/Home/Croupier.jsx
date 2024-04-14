/**
 * Component representing the croupier in the game.
 * @returns {JSX.Element} The JSX element representing the Croupier component.
 */
export const Croupier = () => {

    // Token image URLs
    const token = '/Others/coinFall.png';
    const token2 = '/Others/coinFall2.png'

    // Render the croupier component
    return (
        <div id="croupier">
            {/* Croupier image */}
            <img id="croupierImg" src="/Others/krupier1.png" alt="croupier" />

            {/* Falling tokens */}
            <img id="token-fall" alt="" className="right" src={token}></img>
            <img id="token-fall" alt="" className="right2" src={token}></img>
            <img id="token-fall" alt="" className="left" src={token}></img>
            <img id="token-fall" alt="" className="left2" src={token}></img>
            <img id="token-fall" alt="" className="right" src={token}></img>

            <img id="token-fall" alt="" className="right2" src={token2}></img>
            <img id="token-fall" alt="" className="left" src={token2}></img>
            <img id="token-fall" alt="" className="left2" src={token2}></img>
            <img id="token-fall" alt="" className="right" src={token2}></img>
        </div>
    );
}
