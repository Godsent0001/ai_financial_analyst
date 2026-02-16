
import {


  Zap,
  ChevronRight,
  MessageSquare,
  Lock,
  ArrowUpRight,
  ArrowDownRight
} from 'lucide-react';
import {
  AreaChart,
  Area,
  ResponsiveContainer,
  XAxis,
  YAxis,
  Tooltip
} from 'recharts';

const marketData = [
  { name: 'S&P 500', price: '5,026.61', change: '+0.58%', up: true },
  { name: 'NASDAQ', price: '15,990.66', change: '+1.10%', up: true },
  { name: 'BTC', price: '52,143.00', change: '-1.24%', up: false },
  { name: 'ETH', price: '2,824.15', change: '+2.45%', up: true },
];

const agents = [
  { name: 'Oracle Momentum', strategy: 'Trend Following', profit: '+42.5%', risk: 'Medium', color: 'from-blue-500 to-cyan-400' },
  { name: 'Oracle Value', strategy: 'Fundamental', profit: '+18.2%', risk: 'Low', color: 'from-emerald-500 to-teal-400' },
  { name: 'Oracle Scalper', strategy: 'HFT / Intraday', profit: '+64.1%', risk: 'High', color: 'from-orange-500 to-red-400' },
];

const chartData = [
  { time: '09:30', value: 4800 },
  { time: '10:30', value: 4850 },
  { time: '11:30', value: 4820 },
  { time: '12:30', value: 4900 },
  { time: '13:30', value: 4950 },
  { time: '14:30', value: 5026 },
];

const Dashboard = () => {
  return (
    <div className="space-y-8 animate-in fade-in duration-500">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold mb-1">Command Center</h1>
          <p className="text-gray-500">Welcome back, Alex. Here's what the Oracle sees today.</p>
        </div>
        <div className="flex items-center gap-2 bg-primary/10 border border-primary/20 px-4 py-2 rounded-xl">
          <span className="w-2 h-2 bg-primary rounded-full animate-pulse"></span>
          <span className="text-sm font-bold text-primary">AI Models Live</span>
        </div>
      </div>

      {/* Market Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {marketData.map((item) => (
          <div key={item.name} className="bg-card border border-border p-5 rounded-2xl hover:border-primary/20 transition-all group">
            <div className="flex items-center justify-between mb-4">
              <span className="text-gray-400 font-medium text-sm">{item.name}</span>
              {item.up ? (
                <ArrowUpRight className="w-4 h-4 text-primary" />
              ) : (
                <ArrowDownRight className="w-4 h-4 text-red-500" />
              )}
            </div>
            <div className="flex items-end justify-between">
              <span className="text-2xl font-bold tracking-tight">{item.price}</span>
              <span className={`text-xs font-bold px-2 py-1 rounded-lg ${item.up ? 'bg-primary/10 text-primary' : 'bg-red-500/10 text-red-500'}`}>
                {item.change}
              </span>
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main Chart Panel */}
        <div className="lg:col-span-2 space-y-8">
          <div className="bg-card border border-border rounded-3xl p-6 relative overflow-hidden">
             <div className="flex items-center justify-between mb-8">
                <div>
                  <h3 className="text-xl font-bold mb-1">Market Sentiment</h3>
                  <p className="text-xs text-gray-500 uppercase tracking-widest font-bold">S&P 500 Index</p>
                </div>
                <div className="flex items-center gap-4">
                   <div className="flex items-center gap-2 bg-white/5 border border-border rounded-lg p-1">
                      <button className="px-3 py-1 text-xs font-bold rounded-md bg-dark border border-border">1D</button>
                      <button className="px-3 py-1 text-xs font-medium text-gray-500">1W</button>
                      <button className="px-3 py-1 text-xs font-medium text-gray-500">1M</button>
                   </div>
                </div>
             </div>
             <div className="h-[300px] w-full">
                <ResponsiveContainer width="100%" height="100%">
                   <AreaChart data={chartData}>
                      <defs>
                        <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="5%" stopColor="#00FF9C" stopOpacity={0.3}/>
                          <stop offset="95%" stopColor="#00FF9C" stopOpacity={0}/>
                        </linearGradient>
                      </defs>
                      <XAxis dataKey="time" hide />
                      <YAxis hide domain={['dataMin - 100', 'dataMax + 100']} />
                      <Tooltip
                        contentStyle={{ backgroundColor: '#141414', border: '1px solid #262626', borderRadius: '12px' }}
                        itemStyle={{ color: '#00FF9C' }}
                      />
                      <Area type="monotone" dataKey="value" stroke="#00FF9C" strokeWidth={3} fillOpacity={1} fill="url(#colorValue)" />
                   </AreaChart>
                </ResponsiveContainer>
             </div>
             <div className="mt-6 p-4 bg-primary/5 border border-primary/20 rounded-2xl flex items-center justify-between">
                <div className="flex items-center gap-3">
                   <Zap className="w-5 h-5 text-primary fill-current" />
                   <div>
                      <p className="text-sm font-bold">AI Outlook: Bullish</p>
                      <p className="text-xs text-gray-400">Momentum confirms breakout above 5000 support level.</p>
                   </div>
                </div>
                <button className="text-primary text-sm font-bold flex items-center gap-1 hover:underline">
                   Read Analysis <ChevronRight className="w-4 h-4" />
                </button>
             </div>
          </div>

          {/* AI Agents Leaderboard */}
          <div className="bg-card border border-border rounded-3xl p-6">
             <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-bold">Top AI Agents</h3>
                <button className="text-sm text-gray-500 hover:text-white transition-colors flex items-center gap-1">
                   View All <ChevronRight className="w-4 h-4" />
                </button>
             </div>
             <div className="space-y-4">
                {agents.map((agent) => (
                  <div key={agent.name} className="flex items-center justify-between p-4 bg-dark border border-border rounded-2xl group hover:border-white/10 transition-colors cursor-pointer">
                    <div className="flex items-center gap-4">
                       <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${agent.color} flex items-center justify-center shadow-lg group-hover:scale-105 transition-transform`}>
                          <Zap className="text-white w-6 h-6 fill-current" />
                       </div>
                       <div>
                          <p className="font-bold">{agent.name}</p>
                          <p className="text-xs text-gray-500">{agent.strategy}</p>
                       </div>
                    </div>
                    <div className="text-right">
                       <p className="font-bold text-primary">{agent.profit}</p>
                       <p className={`text-[10px] font-black uppercase tracking-widest ${agent.risk === 'Low' ? 'text-emerald-500' : agent.risk === 'Medium' ? 'text-yellow-500' : 'text-red-500'}`}>
                          {agent.risk} Risk
                       </p>
                    </div>
                  </div>
                ))}
             </div>
          </div>
        </div>

        {/* Right Sidebar Panels */}
        <div className="space-y-8">
           {/* Quick AI Chat */}
           <div className="bg-primary border border-primary/20 rounded-3xl p-6 text-dark flex flex-col h-[300px]">
              <div className="flex items-center gap-2 mb-4">
                 <div className="p-1.5 bg-dark rounded-lg">
                    <MessageSquare className="w-4 h-4 text-primary fill-current" />
                 </div>
                 <h3 className="font-black text-lg">Quick Oracle</h3>
              </div>
              <p className="text-sm font-medium mb-auto leading-relaxed">
                "Tesla is showing high volatility after the earnings call. AI predicts a consolidation period before next leg up."
              </p>
              <div className="mt-4 relative">
                 <input
                   type="text"
                   placeholder="Ask about any stock..."
                   className="w-full bg-dark/20 border border-dark/20 rounded-xl py-3 px-4 text-sm placeholder:text-dark/50 focus:outline-none focus:bg-dark/30 transition-all font-medium"
                 />
                 <button className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 bg-dark rounded-lg flex items-center justify-center">
                    <ArrowUpRight className="w-4 h-4 text-primary" />
                 </button>
              </div>
           </div>

           {/* Latest Predictions (Blurred for free users) */}
           <div className="bg-card border border-border rounded-3xl p-6 relative overflow-hidden">
              <div className="flex items-center justify-between mb-6">
                 <h3 className="text-xl font-bold">Live AI Signals</h3>
                 <span className="text-[10px] bg-primary/10 text-primary font-black px-2 py-0.5 rounded uppercase tracking-widest">Live</span>
              </div>
              <div className="space-y-4 filter blur-[4px] pointer-events-none opacity-50">
                 {[1, 2, 3].map((i) => (
                   <div key={i} className="flex items-center justify-between p-3 bg-dark rounded-xl border border-border">
                      <div className="flex items-center gap-3">
                         <div className="w-8 h-8 bg-white/5 rounded-lg"></div>
                         <div className="space-y-1">
                            <div className="w-12 h-3 bg-white/10 rounded"></div>
                            <div className="w-8 h-2 bg-white/5 rounded"></div>
                         </div>
                      </div>
                      <div className="w-10 h-5 bg-primary/20 rounded"></div>
                   </div>
                 ))}
              </div>
              <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center z-10">
                 <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center mb-4">
                    <Lock className="w-6 h-6 text-gray-400" />
                 </div>
                 <p className="font-bold mb-2">Upgrade to Unlock</p>
                 <p className="text-xs text-gray-500 mb-6 px-4 leading-relaxed">Get real-time AI signals for 500+ stocks and crypto assets.</p>
                 <button className="w-full py-3 bg-primary text-dark rounded-xl font-black text-sm hover:bg-secondary transition-colors">
                    Unlock Now
                 </button>
              </div>
           </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
