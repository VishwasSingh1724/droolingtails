
import React, { useState, useEffect, useRef } from 'react';
import { MessageCircle, X, Send, ChefHat } from 'lucide-react';
import { generateChefResponse } from '../services/geminiService';
import { ChatMessage } from '../types';

const ChefChat: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      role: 'model',
      text: "Woof! I'm Chef Barney. Looking for a yummy treat recipe or pet care tip?",
      timestamp: new Date(),
    },
  ]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMsg: ChatMessage = {
      role: 'user',
      text: input,
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMsg]);
    setInput('');
    setLoading(true);

    const responseText = await generateChefResponse(input);

    const botMsg: ChatMessage = {
      role: 'model',
      text: responseText,
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, botMsg]);
    setLoading(false);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') handleSend();
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      {isOpen && (
        <div className="mb-4 w-80 md:w-96 bg-white rounded-2xl shadow-2xl overflow-hidden border border-[#ffe7a6] flex flex-col animate-in slide-in-from-bottom-10 fade-in duration-300">
          
          <div className="bg-[#dba135] p-4 flex items-center justify-between text-white">
            <div className="flex items-center gap-2">
              <div className="bg-white/20 p-2 rounded-full">
                <ChefHat size={20} />
              </div>
              <div>
                <h4 className="font-bold brand-font">Chef Barney</h4>
                <p className="text-xs text-white/80">AI Kitchen Assistant</p>
              </div>
            </div>
            <button onClick={() => setIsOpen(false)} className="hover:bg-[#dba135]/80 rounded-full p-1 transition">
              <X size={20} />
            </button>
          </div>

          <div 
            ref={scrollRef}
            className="h-80 overflow-y-auto p-4 bg-[#fffcf0] space-y-3"
          >
            {messages.map((msg, idx) => (
              <div
                key={idx}
                className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-[80%] p-3 rounded-2xl text-sm ${
                    msg.role === 'user'
                      ? 'bg-[#dba135] text-white rounded-tr-none'
                      : 'bg-white border border-gray-100 text-gray-700 shadow-sm rounded-tl-none'
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}
            {loading && (
               <div className="flex justify-start">
                 <div className="bg-white border border-gray-100 p-3 rounded-2xl rounded-tl-none shadow-sm flex gap-1">
                    <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></span>
                    <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce delay-100"></span>
                    <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce delay-200"></span>
                 </div>
               </div>
            )}
          </div>

          <div className="p-3 bg-white border-t border-gray-100 flex gap-2">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyPress}
              placeholder="Ask about dog treats..."
              className="flex-1 bg-gray-50 rounded-full px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#dba135]/20"
            />
            <button 
              onClick={handleSend}
              disabled={loading || !input.trim()}
              className="bg-[#0d5f73] hover:bg-[#ff5454] text-white p-2 rounded-full transition disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <Send size={18} />
            </button>
          </div>
        </div>
      )}

      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`${
          isOpen ? 'bg-[#0d5f73]' : 'bg-[#dba135] hover:bg-[#ff5454]'
        } text-white p-4 rounded-full shadow-lg shadow-[#dba135]/30 transition-all duration-300 transform hover:scale-105 flex items-center gap-2 font-bold`}
      >
        {isOpen ? <X size={24} /> : <MessageCircle size={24} />}
        {!isOpen && <span className="hidden md:inline">Ask Chef Barney</span>}
      </button>
    </div>
  );
};

export default ChefChat;
