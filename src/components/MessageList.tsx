import React, { useRef, useEffect } from 'react';
import { Messaggio } from './types';
import ListItem from './ListItem';
interface MessageListProps {
  messages: Messaggio[];
}

const MessageList: React.FC<MessageListProps> = ({ messages }) => {
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  return (
    <div className="message-list">
      <div className="overflow-y-auto h-full">
        {messages.map((messages) => (
          <ListItem text={messages.text} sender={messages.sender}></ListItem>
        ))}
        <div ref={messagesEndRef} />
      </div>
    </div>
  );
};

export default MessageList;

