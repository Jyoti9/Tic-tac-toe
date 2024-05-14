import Players from "./Components/Players";
import GameBoard from './Components/GameBoard';
import { useState } from "react";
import Log from "./Components/Log";
import { WINNING_COMBINATIONS } from "./winning";
import GameOver from "./Components/GameOver";
let initData = [
  [null, null, null],
  [null, null, null],
  [null, null, null]
]
const playerObj = { 'X': 'Player1', '0': 'Player2' };
function getlatestSymbol(turns){
  let newSymbol = 'X';
  if (turns.length > 0 && turns[0].player == 'X') {
    newSymbol = '0';
  }
  return newSymbol;
}

function App() {
  const [turns, setTurns] = useState([]);
  const [playerss, setPlayers] = useState(playerObj);
  let winner = false;
  let playerS = getlatestSymbol(turns);
  const gameData = [...initData.map((array)=> [...array])];
  for (let turn of turns) {
    const { square, player } = turn;
    const { row, col } = square;
    gameData[row][col] = player;
  }
  for (let combi of WINNING_COMBINATIONS){
    let firstSymbol = gameData[combi[0].row][combi[0].column];
    let secondSymbol = gameData[combi[1].row][combi[1].column];
    let thirdSymbol = gameData[combi[2].row][combi[2].column];
    if(firstSymbol && firstSymbol == secondSymbol && secondSymbol == thirdSymbol){
      winner = playerss[firstSymbol];
    }
  }
  function handleSymbolChange(rowIndex, colIndex){
    setTurns((prev) => {
      let newSymbol = getlatestSymbol(turns);
      const copy = [{ square: { row: rowIndex, col: colIndex }, player: newSymbol },...prev];
      return copy;
    })
  }
  function rematchHandler(){
    setTurns([]);
  }
  function handlePlayerName(symbol,name){
    setPlayers((prev)=>{
      return {...prev, [symbol]: name}
    })
  }
  let hasDraw = (turns.length >= 9 && !winner) ? true : false;
  return (
<main>
      <div id="game-container">
      <ol id="players" className="highlight-player">
          <Players name={playerObj.X} setPlayerName={handlePlayerName} symbol="X" isActive={playerS == 'X' ? 'active': undefined}></Players>
          <Players name={playerObj[0]} setPlayerName={handlePlayerName} symbol="0" isActive={playerS == '0' ? 'active' : undefined}></Players>
      </ol>
        {(winner || hasDraw) && <GameOver rematch={rematchHandler} draw={hasDraw} winner={winner}></GameOver>}
        <GameBoard data={gameData}  selectPlayer={handleSymbolChange}/>
      </div>
      <Log turnArray={turns}></Log>
   
</main>
  )
}

export default App
