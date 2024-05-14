export default function Log({ turnArray }){
    return (
        <ol id="log">
        {turnArray.map((item)=>{
            return <li key={`${item.square.row}${item.square.col}`}>{item.player} selected {item.square.row},{item.square.col}</li>
        })}
        </ol>
    )
}