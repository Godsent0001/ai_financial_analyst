
import { useNavigate } from 'react-router-dom';
import {
  Zap,
  ArrowUpRight,
  ChevronRight,
  Activity,
  Shield,
  Search,
  Filter
} from 'lucide-react';

const agents = [
  { id: 'momentum', name: 'Oracle Momentum', strategy: 'Trend Following', profit: '+42.5%', drawdown: '8.2%', winRate: '68%', risk: 'Medium', color: 'from-blue-500 to-cyan-400', desc: 'Predicts high-velocity breakouts using multi-timeframe volume analysis.' },
  { id: 'value', name: 'Oracle Value', strategy: 'Fundamental', profit: '+18.2%', drawdown: '4.1%', winRate: '74%', risk: 'Low', color: 'from-emerald-500 to-teal-400', desc: 'Identifies undervalued assets with strong cash flow and institutional support.' },
  { id: 'scalper', name: 'Oracle Scalper', strategy: 'HFT / Intraday', profit: '+64.1%', drawdown: '15.4%', winRate: '59%', risk: 'High', color: 'from-orange-500 to-red-400', desc: 'Micro-trend prediction with tight stops and rapid execution signals.' },
  { id: 'macro', name: 'Oracle Macro', strategy: 'Global Macro', profit: '+22.8%', drawdown: '6.5%', winRate: '62%', risk: 'Low', color: 'from-purple-500 to-indigo-400', desc: 'Analyzes yield curves, dollar index, and central bank sentiment.' },
  { id: 'volatility', name: 'Oracle Volatility', strategy: 'VIX / Options', profit: '+31.4%', drawdown: '12.0%', winRate: '55%', risk: 'High', color: 'from-pink-500 to-rose-400', desc: 'Specializes in detecting regime shifts and volatility expansion cycles.' },
  { id: 'crypto', name: 'Oracle Crypto', strategy: 'Digital Assets', profit: '+112.5%', drawdown: '28.4%', winRate: '52%', risk: 'Extreme', color: 'from-yellow-400 to-orange-500', desc: 'High-risk prediction for Bitcoin, Ethereum, and major Altcoins.' },
];

const AgentsPage = () => {
  const navigate = useNavigate();

  return (
    <div className="space-y-8">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold mb-1">AI Agents</h1>
          <p className="text-gray-500">Compare specialized institutional-grade AI strategies.</p>
        </div>
        <div className="flex items-center gap-3">
           <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
              <input type="text" placeholder="Search strategy..." className="bg-card border border-border rounded-xl py-2 pl-10 pr-4 text-sm focus:outline-none focus:border-primary/50 transition-all" />
           </div>
           <button className="p-2 bg-card border border-border rounded-xl text-gray-500 hover:text-white transition-colors">
              <Filter className="w-5 h-5" />
           </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
         {agents.map((agent) => (
           <div
             key={agent.id}
             onClick={() => navigate(`/agents/${agent.id}`)}
             className="bg-card border border-border rounded-3xl p-8 group hover:border-primary/40 transition-all cursor-pointer relative overflow-hidden"
           >
              {/* Background Glow */}
              <div className={`absolute -top-24 -right-24 w-48 h-48 bg-gradient-to-br ${agent.color} blur-[100px] opacity-0 group-hover:opacity-20 transition-opacity`}></div>

              <div className="flex items-start justify-between mb-8">
                 <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${agent.color} flex items-center justify-center shadow-lg transform group-hover:scale-110 transition-transform duration-500`}>
                    <Zap className="text-white w-8 h-8 fill-current" />
                 </div>
                 <div className="text-right">
                    <div className="flex items-center gap-1 text-primary font-black text-2xl group-hover:translate-x-1 transition-transform">
                       {agent.profit} <ArrowUpRight className="w-5 h-5" />
                    </div>
                    <p className="text-[10px] text-gray-500 uppercase tracking-widest font-bold">Total Profit</p>
                 </div>
              </div>

              <div className="mb-8">
                 <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">{agent.name}</h3>
                 <p className="text-sm text-gray-500 leading-relaxed line-clamp-2">
                    {agent.desc}
                 </p>
              </div>

              <div className="grid grid-cols-2 gap-4 mb-8">
                 <div className="p-3 bg-dark/50 border border-border rounded-xl">
                    <p className="text-[10px] text-gray-500 uppercase mb-1">Max Drawdown</p>
                    <p className="font-bold text-red-500">{agent.drawdown}</p>
                 </div>
                 <div className="p-3 bg-dark/50 border border-border rounded-xl">
                    <p className="text-[10px] text-gray-500 uppercase mb-1">Win Rate</p>
                    <p className="font-bold text-emerald-500">{agent.winRate}</p>
                 </div>
              </div>

              <div className="flex items-center justify-between pt-6 border-t border-border">
                 <div className="flex items-center gap-4">
                    <div className="flex items-center gap-1">
                       <Shield className="w-3.5 h-3.5 text-gray-500" />
                       <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">{agent.risk} Risk</span>
                    </div>
                    <div className="flex items-center gap-1">
                       <Activity className="w-3.5 h-3.5 text-gray-500" />
                       <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">{agent.strategy}</span>
                    </div>
                 </div>
                 <ChevronRight className="w-5 h-5 text-gray-600 group-hover:text-primary transition-colors" />
              </div>
           </div>
         ))}
      </div>
    </div>
  );
};

export default AgentsPage;
