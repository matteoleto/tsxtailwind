import React, { useState } from 'react';
import MessageList from './MessageList';
import MessageInput from './MessageInput';
import { Messaggio } from './types';

const Rectangle: React.FC = () => {
  const [message, setMessage] = useState<string>('');
  const [messageArray, setMessageArray] = useState<Messaggio[]>([]);

  const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => { 
    setMessage(e.target.value);
  };

  const handleSendMessage = () => {
    if (message.trim()) {
      let inArray: Messaggio = { text: message, sender: true };
      setMessageArray([...messageArray, inArray]);
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
        <i className="fas fa-comment-alt absolute top-4 right-4 text-blue-500"></i>
      </div>
    </div>
  );
};

export default Rectangle;
