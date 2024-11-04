import React from 'react';
import { Bot, User } from 'lucide-react';

interface ChatMessageProps {
  type: 'user' | 'bot';
  content: string;
}

const ChatMessage: React.FC<ChatMessageProps> = ({ type, content }) => {
  const isBot = type === 'bot';

  return (
    <div className={`flex ${isBot ? 'justify-start' : 'justify-end'}`}>
      <div className={`flex space-x-2 max-w-[80%] ${isBot ? 'flex-row' : 'flex-row-reverse'}`}>
        <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
          isBot ? 'bg-indigo-100 text-indigo-600' : 'bg-gray-100 text-gray-600'
        }`}>
          {isBot ? <Bot className="w-5 h-5" /> : <User className="w-5 h-5" />}
        </div>
        <div className={`rounded-lg p-3 ${
          isBot ? 'bg-indigo-50 text-gray-800' : 'bg-indigo-600 text-white'
        }`}>
          <p className="whitespace-pre-wrap">{content}</p>
        </div>
      </div>
    </div>
  );
}

export default ChatMessage;