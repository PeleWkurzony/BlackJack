export const Croupier = () => {
    
    const token = '/Others/coinFall.png';
    const token2 = '/Others/coinFall2.png'
    
    return (
        <div id="croupier">

            <img id="croupierImg" src="/Others/krupier1.png" alt="croupier" />
            <img id="token-fall" alt="" className="right" src={token}></img>

            <img id="token-fall" alt="" className="right2" src={token}></img>
            <img id="token-fall"  alt="" className="left" src={token}></img>
            <img id="token-fall"  alt="" className="left2" src={token}></img>
            <img id="token-fall"  alt="" className="right" src={token}></img>
            
            <img id="token-fall2" alt="" className="right3" src={token2}></img>
            <img id="token-fall2"  alt="" className="left3" src={token2}></img>
            <img id="token-fall2"  alt="" className="left4" src={token2}></img>
            <img id="token-fall2"  alt="" className="right4" src={token2}></img>
        </div>
    )
}