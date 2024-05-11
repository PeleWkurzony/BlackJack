import './GameOver.scss'


export const GameOver = () => {
    
    return (
        <>
            <div class="game-container">
                <section class="game-section">
                    <h1>Game Over</h1>
                    <p>Your score: 18</p>
                    <button id="restart-btn">Start Again</button>
                </section>
                <footer>
                    <p>&copy; 2024 Blackjack Game</p>
                </footer>
            </div>
        </>
    )
}