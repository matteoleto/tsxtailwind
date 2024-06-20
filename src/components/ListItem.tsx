import React, { useContext, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit } from '@fortawesome/free-solid-svg-icons';
import { Messaggio } from './types';
import { ThemeContext } from './App';


function ListItem(prop: Messaggio) {
    const [message, chgMess] = useState<string>(prop.text)
    
    const themeContext = useContext(ThemeContext)
    if (!themeContext) {
      throw new Error('ThemeContext must be used within a ThemeContext.Provider');
    }
    const {color, setColor} = themeContext

  let chId: string;
  if (prop.sender) {
    chId = "flex items-center justify-between p-2 bg-gray-100 rounded-md mb-2"; // Assign appropriate class or ID for sender
  } else {
    chId = "flex items-center justify-between p-2 bg-"+color+"-200 rounded-md mb-2"; // Assign appropriate class or ID for receiver
  }

  return (
    <div className= {chId}>
      <div className="flex-1">{message}</div>
      <button className="bg-gray-400 hover:bg-gray-600 text-white rounded-full h-8 w-8 flex items-center justify-center" onClick={() =>
        {
            let getValueTextA:string = document.getElementsByClassName("textarea-primary bg-slate-400").item(0)?.value
            if (!getValueTextA)
              alert("Inserisci un valore nella barra sottostante")
            else
              chgMess(getValueTextA)
        }
    }>
        <FontAwesomeIcon icon={faEdit} />
      </button>
        </div>

    )
}
export default ListItem