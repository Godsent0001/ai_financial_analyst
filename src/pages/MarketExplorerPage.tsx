import { useState } from 'react';
import {
  Search,
  TrendingDown,
  Zap,
  Globe,
  BarChart3,
  ChevronRight,
  Plus,
  Info
} from 'lucide-react';

const MarketExplorerPage = () => {
  const [ticker, setTicker] = useState('TSLA');

  return (
    <div className="space-y-8 pb-12">
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
        <div className="flex-1 max-w-2xl">
           <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
              <input
                type="text"
                placeholder="Search ticker (e.g. NVDA, BTC, AMZN)..."
                className="w-full bg-card border border-border rounded-2xl py-4 pl-12 pr-4 text-lg focus:outline-none focus:border-primary/50 transition-all"
                onKeyDown={(e) => {
                  if (e.key === 'Enter') setTicker((e.target as HTMLInputElement).value.toUpperCase());
                }}
              />
           </div>
        </div>
        <div className="flex items-center gap-4">
           <button className="flex items-center gap-2 px-6 py-4 bg-primary text-dark rounded-2xl font-black hover:bg-secondary transition-all">
              <Plus className="w-5 h-5" /> Add to Watchlist
           </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
         {/* Main Chart & Summary */}
         <div className="lg:col-span-2 space-y-8">
            <div className="bg-card border border-border rounded-[32px] p-8">
               <div className="flex items-start justify-between mb-8">
                  <div className="flex items-center gap-4">
                     <div className="w-16 h-16 bg-dark rounded-[20px] flex items-center justify-center border border-border">
                        <span className="text-2xl font-black text-white">{ticker[0]}</span>
                     </div>
                     <div>
                        <div className="flex items-center gap-2">
                           <h1 className="text-3xl font-black tracking-tighter">{ticker}</h1>
                           <span className="text-[10px] bg-white/5 border border-white/10 px-2 py-0.5 rounded font-bold text-gray-500 uppercase">NASDAQ</span>
                        </div>
                        <p className="text-gray-500 font-medium">Tesla, Inc. • Electric Vehicles</p>
                     </div>
                  </div>
                  <div className="text-right">
                     <p className="text-4xl font-black tracking-tighter">$193.57</p>
                     <div className="flex items-center justify-end gap-1 text-red-500 font-bold">
                        <TrendingDown className="w-4 h-4" /> -2.45%
                     </div>
                  </div>
               </div>

               {/* Mock Chart Area */}
               <div className="aspect-[16/9] w-full bg-dark/50 border border-border rounded-2xl relative overflow-hidden group">
                  <div className="absolute inset-0 flex items-center justify-center">
                     <div className="text-center">
                        <BarChart3 className="w-12 h-12 text-gray-800 mx-auto mb-4" />
                        <p className="text-sm text-gray-600 font-medium uppercase tracking-[0.2em]">TradingView Chart Integration</p>
                        <p className="text-xs text-gray-700 mt-2 italic">Mock Visualization for Demo</p>
                     </div>
                  </div>
                  {/* Fake Chart Lines */}
                  <svg className="absolute inset-0 w-full h-full opacity-30" preserveAspectRatio="none">
                     <path d="M0,100 Q100,80 200,120 T400,90 T600,140 T800,100 T1000,150" fill="none" stroke="#00FF9C" strokeWidth="2" />
                  </svg>
               </div>

               <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-6">
                  {[
                    { label: "Mkt Cap", val: "610.4B" },
                    { label: "P/E Ratio", val: "44.2" },
                    { label: "Vol (24h)", val: "84.2M" },
                    { label: "52W High", val: "$299.29" },
                  ].map((stat, i) => (
                    <div key={i}>
                       <p className="text-[10px] text-gray-500 font-bold uppercase tracking-widest mb-1">{stat.label}</p>
                       <p className="font-bold text-lg">{stat.val}</p>
                    </div>
                  ))}
               </div>
            </div>

            <div className="bg-card border border-border rounded-[32px] p-8">
               <div className="flex items-center gap-3 mb-6">
                  <Globe className="text-primary w-6 h-6" />
                  <h3 className="text-xl font-bold">AI Company Summary</h3>
               </div>
               <p className="text-gray-400 leading-relaxed text-lg">
                  {ticker} is a global leader in electric vehicles and sustainable energy solutions. Current AI sentiment is <span className="text-primary font-bold">Neutral-Bullish</span>. Despite recent margin pressures in the Chinese market, institutional accumulation is showing a slight uptick. AI news analysis detects positive anticipation for the upcoming FSD v12 wider rollout.
               </p>
               <div className="mt-8 pt-8 border-t border-border flex flex-wrap gap-4">
                  <div className="bg-emerald-500/10 border border-emerald-500/20 px-4 py-2 rounded-xl">
                     <p className="text-[10px] text-emerald-500 font-bold uppercase tracking-widest mb-1">Sentiment Score</p>
                     <p className="text-xl font-black text-emerald-500 tracking-tighter">72 / 100</p>
                  </div>
                  <div className="bg-blue-500/10 border border-blue-500/20 px-4 py-2 rounded-xl">
                     <p className="text-[10px] text-blue-500 font-bold uppercase tracking-widest mb-1">Inst. Interest</p>
                     <p className="text-xl font-black text-blue-500 tracking-tighter">High</p>
                  </div>
               </div>
            </div>
         </div>

         {/* Right Sidebar Panels */}
         <div className="space-y-8">
            {/* AI Outlook Panel */}
            <div className="bg-card border border-border rounded-[32px] p-8 relative overflow-hidden">
               <div className="absolute top-0 right-0 p-6">
                  <Zap className="text-primary/20 w-12 h-12 fill-current" />
               </div>
               <h3 className="text-xl font-bold mb-8">AI Outlook (7D)</h3>

               <div className="space-y-8">
                  <div className="space-y-3">
                     <div className="flex items-center justify-between text-sm">
                        <span className="font-bold text-primary">Bullish Probability</span>
                        <span className="font-black">64%</span>
                     </div>
                     <div className="w-full bg-dark h-3 rounded-full overflow-hidden">
                        <div className="bg-primary h-full w-[64%] shadow-[0_0_10px_rgba(0,255,156,0.5)]"></div>
                     </div>
                  </div>

                  <div className="space-y-3">
                     <div className="flex items-center justify-between text-sm">
                        <span className="font-bold text-gray-500">Neutral Probability</span>
                        <span className="font-black text-gray-400">21%</span>
                     </div>
                     <div className="w-full bg-dark h-3 rounded-full overflow-hidden">
                        <div className="bg-gray-600 h-full w-[21%]"></div>
                     </div>
                  </div>

                  <div className="space-y-3">
                     <div className="flex items-center justify-between text-sm">
                        <span className="font-bold text-red-500/80">Bearish Probability</span>
                        <span className="font-black text-red-500">15%</span>
                     </div>
                     <div className="w-full bg-dark h-3 rounded-full overflow-hidden">
                        <div className="bg-red-500/50 h-full w-[15%]"></div>
                     </div>
                  </div>
               </div>

               <div className="mt-12 p-4 bg-primary/5 border border-primary/20 rounded-2xl">
                  <div className="flex items-start gap-3">
                     <Info className="w-5 h-5 text-primary mt-0.5" />
                     <p className="text-xs text-gray-400 leading-relaxed">
                        The Oracle predicts a short-term consolidation between $188 and $198. A breakout above $200 with volume would confirm a trend reversal.
                     </p>
                  </div>
               </div>
            </div>

            {/* Technical Breakdown */}
            <div className="bg-card border border-border rounded-[32px] p-8">
               <h3 className="text-xl font-bold mb-6">Technical Signal</h3>
               <div className="space-y-4">
                  {[
                    { label: "RSI (14)", val: "42.5", status: "Neutral" },
                    { label: "MACD", val: "Bearish Cross", status: "Sell" },
                    { label: "EMA (50)", val: "$201.12", status: "Resistance" },
                    { label: "OBV", val: "Rising", status: "Bullish" },
                  ].map((tech, i) => (
                    <div key={i} className="flex items-center justify-between p-3 bg-dark/50 rounded-xl border border-border">
                       <div>
                          <p className="text-[10px] text-gray-500 font-bold uppercase tracking-widest">{tech.label}</p>
                          <p className="font-bold text-sm">{tech.val}</p>
                       </div>
                       <span className={`text-[10px] font-black px-2 py-1 rounded uppercase ${
                          tech.status === 'Bullish' ? 'text-primary bg-primary/10' :
                          tech.status === 'Sell' ? 'text-red-500 bg-red-500/10' : 'text-gray-500 bg-white/5'
                       }`}>
                          {tech.status}
                       </span>
                    </div>
                  ))}
               </div>
               <button className="mt-8 w-full py-3 text-sm font-bold text-gray-400 hover:text-white transition-colors flex items-center justify-center gap-2 group">
                  Full Technical Analysis <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
               </button>
            </div>
         </div>
      </div>
    </div>
  );
};

export default MarketExplorerPage;
