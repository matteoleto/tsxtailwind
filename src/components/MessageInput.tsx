import React from 'react';

interface MessageInputProps {
  message: string;
  handleInputChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  handleSendMessage: () => void;
}

const MessageInput: React.FC<MessageInputProps> = ({ message, handleInputChange, handleSendMessage }) => (
  <div className="message-input-container">
    <textarea
      className="textarea-primary bg-slate-400"
      placeholder="Scrivi un messaggio..."
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
);

export default MessageInput;

