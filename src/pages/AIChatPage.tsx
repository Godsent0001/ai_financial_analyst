import { useState } from 'react';
import {
  Zap,
  Send,
  Plus,
  MessageSquare,

  Bookmark,
  Share2,
  Trash2,
  Sparkles
} from 'lucide-react';

const agents = [
  { id: 'momentum', name: 'Oracle Momentum', desc: 'Focuses on trend following and volume breakouts.' },
  { id: 'value', name: 'Oracle Value', desc: 'Analyzes fundamental metrics and intrinsic value.' },
  { id: 'macro', name: 'Oracle Macro', desc: 'Global economic trends and cross-asset correlation.' },
];

const initialMessages = [
  { role: 'assistant', content: "Hello Alex. I am Market Oracle's AI assistant. How can I help you analyze the markets today? You can ask me about specific stocks, market trends, or my recent predictions." }
];

const AIChatPage = () => {
  const [messages, setMessages] = useState(initialMessages);
  const [input, setInput] = useState('');
  const [selectedAgent, setSelectedAgent] = useState(agents[0]);

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userMessage = { role: 'user', content: input };
    setMessages(prev => [...prev, userMessage]);
    setInput('');

    // Simulate AI response
    setTimeout(() => {
      const assistantMessage = {
        role: 'assistant',
        content: `Analyzing ${input}... Based on ${selectedAgent.name}'s strategy, the current setup looks favorable. Institutional volume is rising and we see a positive RSI divergence on the 4H chart. However, wait for a confirmed close above the previous swing high before entering.`
      };
      setMessages(prev => [...prev, assistantMessage]);
    }, 1000);
  };

  return (
    <div className="h-[calc(100vh-120px)] flex gap-8">
      {/* Left: Agent Sidebar */}
      <div className="w-80 flex flex-col gap-6">
        <div className="bg-card border border-border rounded-3xl p-6 flex flex-col h-full">
           <div className="flex items-center justify-between mb-8">
              <h2 className="text-xl font-bold">Chat History</h2>
              <button className="p-2 bg-primary/10 text-primary rounded-xl hover:bg-primary/20 transition-colors">
                 <Plus className="w-4 h-4" />
              </button>
           </div>

           <div className="flex-1 overflow-y-auto space-y-2">
              <div className="p-3 bg-dark border border-primary/20 rounded-xl flex items-center gap-3">
                 <MessageSquare className="w-4 h-4 text-primary" />
                 <span className="text-sm font-medium truncate">Should I buy Apple?</span>
              </div>
              <div className="p-3 hover:bg-white/5 rounded-xl flex items-center gap-3 text-gray-500 cursor-pointer transition-colors">
                 <MessageSquare className="w-4 h-4" />
                 <span className="text-sm font-medium truncate">Tesla Earnings Analysis</span>
              </div>
              <div className="p-3 hover:bg-white/5 rounded-xl flex items-center gap-3 text-gray-500 cursor-pointer transition-colors">
                 <MessageSquare className="w-4 h-4" />
                 <span className="text-sm font-medium truncate">Crypto Outlook 2025</span>
              </div>
           </div>

           <div className="mt-8 pt-6 border-t border-border">
              <p className="text-[10px] font-black uppercase tracking-widest text-gray-500 mb-4">Select AI Agent</p>
              <div className="space-y-3">
                 {agents.map((agent) => (
                   <button
                     key={agent.id}
                     onClick={() => setSelectedAgent(agent)}
                     className={`w-full p-3 rounded-2xl border text-left transition-all ${selectedAgent.id === agent.id ? 'bg-primary/5 border-primary/30' : 'bg-dark border-border hover:border-white/10'}`}
                   >
                     <div className="flex items-center justify-between mb-1">
                        <p className={`text-sm font-bold ${selectedAgent.id === agent.id ? 'text-primary' : 'text-white'}`}>{agent.name}</p>
                        {selectedAgent.id === agent.id && <Sparkles className="w-3 h-3 text-primary fill-current" />}
                     </div>
                     <p className="text-[10px] text-gray-500 leading-relaxed line-clamp-2">{agent.desc}</p>
                   </button>
                 ))}
              </div>
           </div>
        </div>
      </div>

      {/* Center: Chat Window */}
      <div className="flex-1 flex flex-col bg-card border border-border rounded-3xl overflow-hidden">
         {/* Chat Header */}
         <div className="p-6 border-b border-border flex items-center justify-between bg-dark/20">
            <div className="flex items-center gap-4">
               <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center border border-primary/20">
                  <Zap className="text-primary w-5 h-5 fill-current" />
               </div>
               <div>
                  <h3 className="font-bold">{selectedAgent.name}</h3>
                  <div className="flex items-center gap-2">
                     <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full"></span>
                     <span className="text-[10px] text-emerald-500 font-bold uppercase tracking-widest">Active Intelligence</span>
                  </div>
               </div>
            </div>
            <div className="flex items-center gap-2">
               <button className="p-2 text-gray-500 hover:text-white hover:bg-white/5 rounded-lg transition-colors"><Bookmark className="w-4 h-4" /></button>
               <button className="p-2 text-gray-500 hover:text-white hover:bg-white/5 rounded-lg transition-colors"><Share2 className="w-4 h-4" /></button>
               <button className="p-2 text-gray-500 hover:text-red-500 hover:bg-red-500/5 rounded-lg transition-colors"><Trash2 className="w-4 h-4" /></button>
            </div>
         </div>

         {/* Chat Messages */}
         <div className="flex-1 overflow-y-auto p-8 space-y-8">
            {messages.map((m, i) => (
              <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                 <div className={`max-w-[80%] p-5 rounded-2xl ${m.role === 'user' ? 'bg-primary text-dark font-medium shadow-lg' : 'bg-dark border border-border text-gray-300 leading-relaxed'}`}>
                    {m.content}
                 </div>
              </div>
            ))}
         </div>

         {/* Chat Input */}
         <div className="p-6 border-t border-border bg-dark/20">
            <form onSubmit={handleSend} className="relative">
               <input
                 type="text"
                 value={input}
                 onChange={(e) => setInput(e.target.value)}
                 placeholder={`Ask ${selectedAgent.name} anything...`}
                 className="w-full bg-dark border border-border rounded-2xl py-4 pl-6 pr-16 focus:outline-none focus:border-primary/50 transition-all shadow-inner"
               />
               <button
                 type="submit"
                 disabled={!input.trim()}
                 className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 bg-primary text-dark rounded-xl flex items-center justify-center hover:bg-secondary transition-all disabled:opacity-50 disabled:hover:bg-primary"
               >
                  <Send className="w-5 h-5" />
               </button>
            </form>
            <p className="text-center text-[10px] text-gray-600 mt-4 uppercase tracking-[0.2em] font-bold">
               Market Oracle AI can make mistakes. Always verify with your own research.
            </p>
         </div>
      </div>
    </div>
  );
};

export default AIChatPage;
