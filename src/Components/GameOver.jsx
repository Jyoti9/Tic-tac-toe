export default function GameOver({ winner, draw, rematch }){
    return <div id="game-over">
        <h2>Game Over!</h2>
        {winner && <p>{winner} Won!</p>}
        {draw && <p>It's Draw.</p>}
        <p><button onClick={rematch}>Rematch!</button></p>
    </div>
}