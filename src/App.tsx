import React, { useState } from 'react';
import { Send, Bot, BarChart2 } from 'lucide-react';
import ChatMessage from './components/ChatMessage';
import Chart from './components/Chart';

function App() {
  const [messages, setMessages] = useState<Array<{type: 'user' | 'bot', content: string}>>([]);
  const [input, setInput] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    // Add user message
    setMessages(prev => [...prev, { type: 'user', content: input }]);

    // Simulate bot response (replace with actual API call)
    setTimeout(() => {
      setMessages(prev => [...prev, { 
        type: 'bot', 
        content: "Based on the telco data analysis:\n\n1. Peak traffic hours: 18:00-22:00\n2. Most active regions: Delhi, Mumbai\n3. Average call duration: 4.2 minutes" 
      }]);
    }, 1000);

    setInput('');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-indigo-600 text-white p-4 shadow-lg">
        <div className="max-w-7xl mx-auto flex items-center space-x-3">
          <Bot className="w-8 h-8" />
          <h1 className="text-2xl font-bold">Comviva Analytics Assistant</h1>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto p-4">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Chat Section */}
          <div className="lg:col-span-2 bg-white rounded-lg shadow-md h-[calc(100vh-12rem)]">
            <div className="h-full flex flex-col">
              {/* Messages */}
              <div className="flex-1 overflow-y-auto p-4 space-y-4">
                {messages.map((message, index) => (
                  <ChatMessage key={index} {...message} />
                ))}
              </div>

              {/* Input Form */}
              <form onSubmit={handleSubmit} className="p-4 border-t">
                <div className="flex space-x-2">
                  <input
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder="Ask about your telco data..."
                    className="flex-1 p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  />
                  <button
                    type="submit"
                    className="bg-indigo-600 text-white p-2 rounded-lg hover:bg-indigo-700 transition-colors"
                  >
                    <Send className="w-5 h-5" />
                  </button>
                </div>
              </form>
            </div>
          </div>

          {/* Visualization Section */}
          <div className="bg-white rounded-lg shadow-md p-4">
            <div className="flex items-center space-x-2 mb-4">
              <BarChart2 className="w-5 h-5 text-indigo-600" />
              <h2 className="text-lg font-semibold">Data Visualization</h2>
            </div>
            <Chart />
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;