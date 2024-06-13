import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit } from '@fortawesome/free-solid-svg-icons';
import { Messaggio } from './types';

function ListItem(prop: Messaggio) {
  let chId: string;
  if (prop.sender) {
    chId = "flex items-center justify-between p-2 bg-gray-100 rounded-md mb-2"; // Assign appropriate class or ID for sender
  } else {
    chId = "flex items-center justify-between p-2 bg-blue-200 rounded-md mb-2"; // Assign appropriate class or ID for receiver
  }

  return (
    <div className= {chId}>
      <div className="flex-1">{prop.text}</div>
      <button className="bg-gray-400 hover:bg-gray-600 text-white rounded-full h-8 w-8 flex items-center justify-center">
        <FontAwesomeIcon icon={faEdit} />
      </button>
        </div>

    )

    function modifyMessage(){
        
    }
}
export default ListItem