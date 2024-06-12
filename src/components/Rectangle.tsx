import React, { useState } from 'react';
import MessageList from './MessageList';
import MessageInput from './MessageInput';

const Rectangle: React.FC = () => {
  const [message, setMessage] = useState<string>('');
  const [messages, setMessages] = useState<string[]>([]);

  const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setMessage(e.target.value);
  };

  const handleSendMessage = () => {
    if (message.trim()) {
      setMessages([...messages, message]);
      setMessage('');
    }
  };

  return (
    <div className="chat-container">
      <div className="chat-box">
        <h1 className="chat-header">Chat</h1>
        <p className="chat-subheader">Lista Messaggi.</p>
        <MessageList messages={messages} />
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
