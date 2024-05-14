import { useState } from "react"

export default function Players({ name, symbol, isActive, setPlayerName}){
    const [edit, MakeEdit] = useState(false);
    const [playerName, changeName] = useState(name);
    function handleEdit(){
        MakeEdit((prevState)=>{
            return !prevState
        })
        if(edit){
            setPlayerName(symbol, playerName)
        }
    } 
    function handleChange(event){
        changeName(event.target.value)
    }
    return (
        <>
            <li className={isActive? 'active': undefined}> 
                {!edit && <span className="player-name">{playerName}</span>}
                {edit && <input type="text" value={playerName} onChange={handleChange}></input>}
                <span className="player-symbol">{symbol}</span>
                <button onClick={handleEdit}>{edit? 'Save' : 'Edit'}</button>
            </li>
        </>
    )
}