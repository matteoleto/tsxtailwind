import React, { useState } from 'react';
import MessageList from './MessageList';
import MessageInput from './MessageInput';
import { InputType } from 'zlib';                                   //libreria inutile
import { Messaggio } from './types';
import ChatGPT from './MessageChatGPT';
import { cambiaColore } from './Sidebar';
import { colorePrincipale } from './Sidebar';

const Rectangle: React.FC = () => {
  const [message, setMessage] = useState<string>('');
  const [messageArray, setMessageArray] = useState<Messaggio[]>([]);
  let colorModify = colorePrincipale
  let stringColor:string=cambiaColore(colorModify)

  const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => { 
    setMessage(e.target.value);
  };

  const handleSendMessage = async() => {
    if (message.trim()) {
      let inArray: Messaggio = { text: message, sender: true };
      setMessageArray((state) => [...state, inArray]);
      let x : Messaggio|null = await ChatGPT(message)
      if(x != null)
        setMessageArray((state) => [...state, x])
      
      setMessage('');
    }
  };
  
  return (
    <div className="chat-container flex-1 h-screen p-4 bg-white">
      <div className="chat-box">
        <h1 className="chat-header">Chat</h1>
        <p className="chat-subheader">Lista Messaggi.</p>
        <MessageList 
          messages={messageArray} 
        />
        <MessageInput 
          message={message}
          handleInputChange={handleInputChange}
          handleSendMessage={handleSendMessage}
        />
        <i className="fas fa-comment-alt absolute top-4 right-4 text-blue -500"></i>
      </div>
    </div>
  );
};

export default Rectangle;
