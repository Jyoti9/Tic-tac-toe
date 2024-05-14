
export default function GameBoard({ data, selectPlayer}){
    return <>
        <ol id="game-board">
            {data.map((row, rowindex)=>
                <ol key={rowindex}>
                    {row.map((col, index) => <li key={index}><button disabled={col != null} onClick={() => selectPlayer(rowindex, index)}>{col}</button></li>)}
            </ol>)}
    </ol>
    </>
}