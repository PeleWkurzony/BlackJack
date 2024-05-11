import './GameOver.scss'


export const GameOver = () => {
    
    return (
        <>
            <div class="game-container">
                <header>
                    <h1>Blackjack Game</h1>
                </header>
                <section class="game-section">
                    <h2>Game Over</h2>
                    <p>Your score: 18</p>
                    <button id="restart-btn">Start Again</button>
                </section>
                <footer>
                    <p>Blackjack Game</p>
                </footer>
            </div>
        </>
    )
}