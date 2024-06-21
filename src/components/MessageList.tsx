import React, { useRef, useEffect } from "react";

import ListItem from "./ListItem";
import { Messaggio } from "./types";

interface MessageListProps {
  messages: Messaggio[];
}

const MessageList: React.FC<MessageListProps> = ({ messages }) => {
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = (): void => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  return (
    <div className="message-list">
      <div className="overflow-y-auto h-full">
        {messages.map((message, index) => (
          <ListItem
            key={index}
            text={message.text}
            sender={message.sender}
          ></ListItem>
        ))}
        <div ref={messagesEndRef} />
      </div>
    </div>
  );
};

export default MessageList;
