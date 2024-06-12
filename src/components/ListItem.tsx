import { Messaggio } from "./types"

function ListItem(prop:Messaggio){
    let chId:string
    if(prop.sender)
        chId = ""
    else 
        chId = ""
    return(
        <div >
            <div className=""> {prop.text}</div>
            <button className="">±</button>
        </div>

    )
}
export default ListItem