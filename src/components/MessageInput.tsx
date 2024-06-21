import React, { useContext } from "react";

import { ThemeContext } from "./App";

interface MessageInputProps {
  message: string;
  handleInputChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  handleSendMessage: () => void;
}

const MessageInput: React.FC<MessageInputProps> = ({
  message,
  handleInputChange,
  handleSendMessage,
}) => {
  function handleClick(event: React.KeyboardEvent<HTMLTextAreaElement>): void {
    if (event.key === "Enter") {
      event.preventDefault();
      handleSendMessage();
    }
  }
  const themeContext = useContext(ThemeContext);
  if (!themeContext) {
    throw new Error("ThemeContext must be used within a ThemeContext.Provider");
  }
  const { color, setColor } = themeContext;

  return (
    <div className="message-input-container">
      <textarea
        className={`flex-grow bg-${color}-500 text-white rounded-full p-2 focus:outline-none resize-none ml-4 bg-blue-500`}
        placeholder=" Scrivi un messaggio..."
        value={message}
        onChange={handleInputChange}
        onKeyDown={handleClick}
      ></textarea>
      <button
        className={`bg-${color}-700 text-white rounded-full p-2 mr-5`}
        onClick={handleSendMessage}
        onSubmit={handleSendMessage}
      >
        <i className="fas fa-paper-plane"></i>
      </button>
    </div>
  );
};

export default MessageInput;
