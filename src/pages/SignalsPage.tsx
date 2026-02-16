
import {

  Lock,



  Filter,
  History,
  AlertTriangle,
  Info
} from 'lucide-react';

const signals = [
  { ticker: 'AAPL', signal: 'BUY', confidence: '82%', risk: 'Low', time: '10m ago', price: '189.45', target: '195.00' },
  { ticker: 'BTC', signal: 'SELL', confidence: '74%', risk: 'High', time: '24m ago', price: '52,100', target: '49,800' },
  { ticker: 'NVDA', signal: 'BUY', confidence: '89%', risk: 'Medium', time: '45m ago', price: '726.13', target: '780.00' },
  { ticker: 'TSLA', signal: 'HOLD', confidence: '61%', risk: 'Medium', time: '1h ago', price: '193.50', target: 'N/A' },
];

const SignalsPage = () => {
  return (
    <div className="space-y-8 relative">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold mb-1">AI Signal Rooms</h1>
          <p className="text-gray-500">Real-time institutional-grade trading signals powered by the Oracle.</p>
        </div>
        <div className="flex items-center gap-4">
           <button className="flex items-center gap-2 px-4 py-2 bg-dark border border-border rounded-xl text-sm font-bold text-gray-400 hover:text-white transition-colors">
              <History className="w-4 h-4" /> Signal History
           </button>
           <button className="flex items-center gap-2 px-4 py-2 bg-dark border border-border rounded-xl text-sm font-bold text-gray-400 hover:text-white transition-colors">
              <Filter className="w-4 h-4" /> Filter
           </button>
        </div>
      </div>

      {/* Room Tabs */}
      <div className="flex items-center gap-4 border-b border-border pb-px">
         <button className="px-6 py-3 border-b-2 border-primary text-primary font-bold text-sm">Stock Signals</button>
         <button className="px-6 py-3 border-b-2 border-transparent text-gray-500 font-bold text-sm hover:text-gray-300">Crypto Signals</button>
         <button className="px-6 py-3 border-b-2 border-transparent text-gray-500 font-bold text-sm hover:text-gray-300">ETF & Index</button>
      </div>

      {/* Signal Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
         {signals.map((s, i) => (
           <div key={i} className="bg-card border border-border rounded-3xl p-6 relative group overflow-hidden">
              <div className="flex items-center justify-between mb-6">
                 <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-dark rounded-xl flex items-center justify-center font-bold text-gray-400 border border-border">
                       {s.ticker[0]}
                    </div>
                    <div>
                       <h3 className="font-bold">{s.ticker}</h3>
                       <p className="text-[10px] text-gray-500 uppercase tracking-widest">{s.time}</p>
                    </div>
                 </div>
                 <div className={`px-3 py-1 rounded-lg text-xs font-black tracking-tighter ${s.signal === 'BUY' ? 'bg-primary/10 text-primary' : s.signal === 'SELL' ? 'bg-red-500/10 text-red-500' : 'bg-yellow-500/10 text-yellow-500'}`}>
                    {s.signal}
                 </div>
              </div>

              <div className="space-y-4 mb-6">
                 <div className="flex items-center justify-between">
                    <span className="text-xs text-gray-500">Confidence</span>
                    <span className="text-sm font-bold text-white">{s.confidence}</span>
                 </div>
                 <div className="w-full bg-dark h-1.5 rounded-full overflow-hidden">
                    <div className="bg-primary h-full transition-all duration-1000" style={{ width: s.confidence }}></div>
                 </div>
                 <div className="flex items-center justify-between">
                    <span className="text-xs text-gray-500">Risk Level</span>
                    <span className={`text-xs font-bold ${s.risk === 'Low' ? 'text-emerald-500' : s.risk === 'Medium' ? 'text-yellow-500' : 'text-red-500'}`}>{s.risk}</span>
                 </div>
              </div>

              <div className="grid grid-cols-2 gap-4 pt-4 border-t border-border">
                 <div>
                    <p className="text-[10px] text-gray-500 uppercase mb-1">Entry Price</p>
                    <p className="font-bold">${s.price}</p>
                 </div>
                 <div>
                    <p className="text-[10px] text-gray-500 uppercase mb-1">Target Price</p>
                    <p className="font-bold text-primary">${s.target}</p>
                 </div>
              </div>

              <button className="mt-6 w-full py-3 bg-white/5 border border-white/10 rounded-xl text-xs font-bold hover:bg-white/10 transition-colors flex items-center justify-center gap-2">
                 View Decision Logic <Info className="w-3 h-3" />
              </button>
           </div>
         ))}
      </div>

      {/* Blur Overlay & Paywall */}
      <div className="absolute -inset-4 bg-dark/40 backdrop-blur-[8px] z-20 flex items-center justify-center p-8 rounded-[40px] border border-white/5">
         <div className="bg-card border border-border max-w-lg w-full rounded-[32px] p-10 text-center shadow-2xl">
            <div className="w-20 h-20 bg-primary/10 rounded-3xl flex items-center justify-center mx-auto mb-8 border border-primary/20">
               <Lock className="text-primary w-10 h-10" />
            </div>
            <h2 className="text-3xl font-black mb-4">Unlock AI Signal Rooms</h2>
            <p className="text-gray-400 mb-10 leading-relaxed">
               Signal rooms are reserved for Pro and Elite members. Get real-time Buy/Sell/Hold signals with deep AI reasoning and risk management.
            </p>
            <div className="space-y-4">
               <button className="w-full py-4 bg-primary text-dark rounded-2xl font-black text-lg hover:bg-secondary transition-all transform hover:-translate-y-1 shadow-[0_0_30px_rgba(0,255,156,0.2)]">
                  Upgrade to Pro — $20/mo
               </button>
               <button className="w-full py-4 bg-white/5 border border-white/10 rounded-2xl font-bold text-gray-300 hover:bg-white/10 transition-colors">
                  Compare Plans
               </button>
            </div>
            <div className="mt-8 flex items-center justify-center gap-2 text-xs text-gray-500">
               <AlertTriangle className="w-3 h-3 text-yellow-500" />
               Risk Disclosure: Trading involves significant risk of loss.
            </div>
         </div>
      </div>
    </div>
  );
};

export default SignalsPage;
