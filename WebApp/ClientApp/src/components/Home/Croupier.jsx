export const Croupier = () => {
    
    const token = '/Others/coinFall.png';
    
    return (
        <div id="croupier">

            <img id="croupierImg" src="/Others/krupier1.png" alt="croupier" />
            <img id="token-fall" alt="" className="right" src={token}></img>

            <img id="token-fall" alt="" className="right2" src={token}></img>
            <img id="token-fall"  alt="" className="left" src={token}></img>
            <img id="token-fall"  alt="" className="left2" src={token}></img>
            <img id="token-fall"  alt="" className="right" src={token}></img>
        </div>
    )
}