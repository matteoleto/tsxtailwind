import React, { ChangeEvent, useContext, useState } from 'react';
import { ThemeContext } from './App';
import { toTry } from './Sidebar';

interface MessageInputProps {
  message: string;
  handleInputChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  handleSendMessage: () => void;
}



const MessageInput: React.FC<MessageInputProps> = ({ message, handleInputChange, handleSendMessage}) => {
  
  const themeContext = useContext(ThemeContext)
  if (!themeContext) {
    throw new Error('ThemeContext must be used within a ThemeContext.Provider');
  }
  const {color, setColor} = themeContext
  let color2 = color

  return (<div className="message-input-container">
    <textarea
      className={"flex-grow bg-"+color+"-500 text-white rounded-full p-2 focus:outline-none resize-none ml-4 bg-slate-400"}
      placeholder=" Scrivi un messaggio..."
      value={message}
      onChange={handleInputChange}
    ></textarea>
    <button
      className="btn-primary"
      onClick={handleSendMessage}
    >
      <i className="fas fa-paper-plane"></i>
    </button>
  </div>
)};

export default MessageInput;

