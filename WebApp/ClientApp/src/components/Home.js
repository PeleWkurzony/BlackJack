import { Bet } from './Bet/Bet';
import { store } from "./Context/Store";
import "./home.scss";
import croupierImage from './krupier1.png'; // Importujesz obrazek
import token from './coinFall.png'; // Importujesz obrazek

export const Home = () => {
    return (
        <>

            <br></br>
            <div id="croupier">
                
                <img id="croupierImg" src={croupierImage} alt="croupier" /> {/* Używasz importowanego obrazka */}

                <img id="token-fall" class="right" src={token}></img>

                <img id="token-fall" class="right2" src={token}></img>
                <img id="token-fall" class="left" src={token}></img>
                <img id="token-fall" class="left2" src={token}></img>
                <img id="token-fall" class="right" src={token}></img>
            </div>
            <Bet />
        </>
    )
};