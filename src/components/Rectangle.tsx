import React, { useContext, useState } from 'react';
import MessageList from './MessageList';
import MessageInput from './MessageInput';
import { Messaggio } from './types';
import ChatGPT from './MessageChatGPT';
import { ThemeContext } from './App';


const Rectangle: React.FC = () => {
  const [message, setMessage] = useState<string>('');
  const [messageArray, setMessageArray] = useState<Messaggio[]>([]);

  const themeContext = useContext(ThemeContext)
  if (!themeContext) {
    throw new Error('ThemeContext must be used within a ThemeContext.Provider');
  }
  const {color, setColor} = themeContext

  const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => { 
    setMessage(e.target.value)
  };

  const handleSendMessage = async() => {
    if (message.trim()) {
      try{
        const messageFromMeteo : Messaggio|null = await ChatGPT(message)
        const addToArray: Messaggio = { text: message, sender: true }
        setMessageArray((state) => [...state, addToArray])
        setMessageArray((state) => [...state, messageFromMeteo])
        setMessage('');
      }catch(error){
        alert("Città inserita non valida")
      }
    }
  };
  
  return (
    <div className="chat-container flex-1 h-screen p-4 bg-white">
      <div className="chat-box">
        <h1 className={"text-2xl font-bold mb-5 text-"+color+"-700"}>Chat</h1>
        <p className="chat-subheader">Lista Messaggi:</p>
        <MessageList 
          messages={messageArray} 
        />
        <MessageInput 
          message={message}
          handleInputChange={handleInputChange}
          handleSendMessage={handleSendMessage}
        />
        <i className={"fas fa-comment-alt absolute top-4 right-4 text-"+color+"-500"}></i>
      </div>
    </div>
  );
};
export default Rectangle;
