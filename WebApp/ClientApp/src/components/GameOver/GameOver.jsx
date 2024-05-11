import './GameOver.scss'


export const GameOver = () => {
    
    return (
        <>
            <div class="game-container">
                <section class="game-section">
                    <h1>Game Over</h1>
                    <button id="restart-btn">Start Again</button>
                </section>
                <footer>
                    <p>Blackjack Casino</p>
                </footer>
            </div>
        </>
    )
}