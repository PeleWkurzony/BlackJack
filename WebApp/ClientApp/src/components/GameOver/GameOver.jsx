import './GameOver.scss'
import { useDispatch } from "react-redux";
import { changeMoney } from "../Context/ProfileSlice";


export const GameOver = () => {
    
    const dispatch = useDispatch();
    
    return (
        <>
            <div className="game-container">
                <section className="game-section">
                    <h1>Game Over</h1>
                    <button id="restart-btn" onClick={() => {
                        dispatch(changeMoney(100));
                    }}>Start Again</button>
                </section>

            </div>
        </>
    )
}