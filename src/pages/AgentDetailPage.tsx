
import { useParams, Link } from 'react-router-dom';
import {
  ArrowLeft,
  TrendingUp,
  Activity,
  BrainCircuit,
  PieChart,
  History
} from 'lucide-react';
import {
  AreaChart,
  Area,
  ResponsiveContainer,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid
} from 'recharts';

const chartData = [
  { day: 'Jan 01', equity: 10000 },
  { day: 'Jan 05', equity: 10500 },
  { day: 'Jan 10', equity: 10300 },
  { day: 'Jan 15', equity: 11200 },
  { day: 'Jan 20', equity: 11800 },
  { day: 'Jan 25', equity: 12500 },
  { day: 'Feb 01', equity: 13200 },
  { day: 'Feb 05', equity: 14250 },
];

const signalHistory = [
  { id: 1, ticker: 'AAPL', type: 'BUY', entry: '185.20', exit: '194.50', profit: '+5.02%', date: 'Feb 02, 2025' },
  { id: 2, ticker: 'TSLA', type: 'SELL', entry: '198.40', exit: '182.10', profit: '+8.21%', date: 'Jan 28, 2025' },
  { id: 3, ticker: 'MSFT', type: 'BUY', entry: '402.15', exit: '408.30', profit: '+1.53%', date: 'Jan 22, 2025' },
  { id: 4, ticker: 'NVDA', type: 'BUY', entry: '595.00', exit: '720.00', profit: '+21.0%', date: 'Jan 15, 2025' },
];

const AgentDetailPage = () => {
  const { id } = useParams();

  // In a real app, we'd fetch agent data based on ID.
  const agentName = id ? id.charAt(0).toUpperCase() + id.slice(1) : 'Momentum';

  return (
    <div className="space-y-8 pb-12">
      <div className="flex items-center gap-4">
         <Link to="/agents" className="p-2 bg-card border border-border rounded-xl text-gray-500 hover:text-white transition-colors">
            <ArrowLeft className="w-5 h-5" />
         </Link>
         <div>
            <div className="flex items-center gap-2 mb-1">
               <span className="text-xs text-gray-500 font-bold uppercase tracking-widest">AI Agent Profile</span>
            </div>
            <h1 className="text-3xl font-bold">Oracle {agentName}</h1>
         </div>
         <div className="ml-auto flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/20 rounded-xl">
            <span className="w-2 h-2 bg-primary rounded-full animate-pulse"></span>
            <span className="text-sm font-bold text-primary tracking-tight">Strategy Active</span>
         </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
         {/* Equity Curve Chart */}
         <div className="lg:col-span-2 bg-card border border-border rounded-[32px] p-8">
            <div className="flex items-center justify-between mb-8">
               <div>
                  <h3 className="text-xl font-bold mb-1">Performance Overview</h3>
                  <p className="text-xs text-gray-500 uppercase tracking-widest font-bold">Total Equity (USD)</p>
               </div>
               <div className="text-right">
                  <p className="text-2xl font-black text-primary tracking-tighter">+42.50%</p>
                  <p className="text-[10px] text-gray-500 uppercase tracking-widest font-bold">Total Return</p>
               </div>
            </div>

            <div className="h-[400px] w-full">
               <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={chartData}>
                     <defs>
                        <linearGradient id="colorEquity" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="5%" stopColor="#00FF9C" stopOpacity={0.2}/>
                          <stop offset="95%" stopColor="#00FF9C" stopOpacity={0}/>
                        </linearGradient>
                     </defs>
                     <CartesianGrid strokeDasharray="3 3" stroke="#262626" vertical={false} />
                     <XAxis
                       dataKey="day"
                       axisLine={false}
                       tickLine={false}
                       tick={{ fill: '#666', fontSize: 12 }}
                       dy={10}
                     />
                     <YAxis
                       hide
                       domain={['dataMin - 1000', 'dataMax + 1000']}
                     />
                     <Tooltip
                        contentStyle={{ backgroundColor: '#141414', border: '1px solid #262626', borderRadius: '16px' }}
                        itemStyle={{ color: '#00FF9C' }}
                     />
                     <Area type="monotone" dataKey="equity" stroke="#00FF9C" strokeWidth={4} fillOpacity={1} fill="url(#colorEquity)" />
                  </AreaChart>
               </ResponsiveContainer>
            </div>
         </div>

         {/* Decision Explanation Panel */}
         <div className="space-y-8">
            <div className="bg-primary text-dark rounded-[32px] p-8 h-full flex flex-col">
               <div className="flex items-center gap-3 mb-6">
                  <BrainCircuit className="w-8 h-8 fill-current" />
                  <h3 className="text-xl font-black italic">Oracle Logic</h3>
               </div>
               <div className="flex-1 space-y-6">
                  <div className="space-y-2">
                     <p className="text-[10px] font-black uppercase tracking-widest opacity-60">Current Model Bias</p>
                     <p className="text-lg font-bold leading-tight">Bullish Breakout Confirmation</p>
                  </div>
                  <div className="space-y-2">
                     <p className="text-[10px] font-black uppercase tracking-widest opacity-60">Decision Reasoning</p>
                     <p className="text-sm leading-relaxed font-medium">
                        The AI issued a BUY signal on NVIDIA due to a bullish MACD crossover on the daily timeframe, rising institutional volume (up 22% vs 30D avg), and positive earnings sentiment detected from 4,500 financial news sources analyzed in the last 24 hours.
                     </p>
                  </div>
                  <div className="p-4 bg-dark/10 rounded-2xl border border-dark/10">
                     <p className="text-[10px] font-black uppercase tracking-widest opacity-60 mb-2">Primary Indicators</p>
                     <div className="flex flex-wrap gap-2">
                        <span className="px-2 py-1 bg-dark/20 rounded-md text-[10px] font-bold">Volume Delta</span>
                        <span className="px-2 py-1 bg-dark/20 rounded-md text-[10px] font-bold">RSI Divergence</span>
                        <span className="px-2 py-1 bg-dark/20 rounded-md text-[10px] font-bold">Order Flow</span>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
         {/* Signal History Table */}
         <div className="lg:col-span-2 bg-card border border-border rounded-[32px] p-8">
            <div className="flex items-center justify-between mb-8">
               <div className="flex items-center gap-3">
                  <History className="text-primary w-6 h-6" />
                  <h3 className="text-xl font-bold">Signal History</h3>
               </div>
               <button className="text-sm text-gray-500 hover:text-white transition-colors">Export CSV</button>
            </div>

            <div className="overflow-x-auto">
               <table className="w-full text-left">
                  <thead>
                     <tr className="text-[10px] text-gray-500 uppercase tracking-widest border-b border-border">
                        <th className="pb-4 font-bold">Asset</th>
                        <th className="pb-4 font-bold">Type</th>
                        <th className="pb-4 font-bold">Entry / Exit</th>
                        <th className="pb-4 font-bold">Profit</th>
                        <th className="pb-4 font-bold">Date</th>
                     </tr>
                  </thead>
                  <tbody className="divide-y divide-border">
                     {signalHistory.map((s) => (
                        <tr key={s.id} className="group hover:bg-white/[0.02] transition-colors">
                           <td className="py-4">
                              <span className="font-bold text-white">{s.ticker}</span>
                           </td>
                           <td className="py-4">
                              <span className={`text-[10px] font-black px-2 py-0.5 rounded uppercase tracking-tighter ${s.type === 'BUY' ? 'bg-primary/10 text-primary' : 'bg-red-500/10 text-red-500'}`}>
                                 {s.type}
                              </span>
                           </td>
                           <td className="py-4 text-sm text-gray-400">
                              ${s.entry} → ${s.exit}
                           </td>
                           <td className="py-4 font-bold text-primary">
                              {s.profit}
                           </td>
                           <td className="py-4 text-xs text-gray-600">
                              {s.date}
                           </td>
                        </tr>
                     ))}
                  </tbody>
               </table>
            </div>
         </div>

         {/* Stats Cards */}
         <div className="space-y-6">
            <div className="bg-card border border-border rounded-3xl p-6">
               <div className="flex items-center justify-between mb-4">
                  <PieChart className="w-5 h-5 text-primary" />
                  <span className="text-[10px] text-gray-500 uppercase font-bold tracking-widest">Efficiency</span>
               </div>
               <div className="flex items-end justify-between">
                  <div>
                     <p className="text-3xl font-black tracking-tighter">74%</p>
                     <p className="text-xs text-gray-500">Historical Win Rate</p>
                  </div>
                  <div className="w-16 h-1 bg-dark rounded-full overflow-hidden">
                     <div className="bg-primary h-full w-[74%]"></div>
                  </div>
               </div>
            </div>

            <div className="bg-card border border-border rounded-3xl p-6">
               <div className="flex items-center justify-between mb-4">
                  <Activity className="w-5 h-5 text-primary" />
                  <span className="text-[10px] text-gray-500 uppercase font-bold tracking-widest">Risk Factor</span>
               </div>
               <div className="flex items-end justify-between">
                  <div>
                     <p className="text-3xl font-black tracking-tighter">1.84</p>
                     <p className="text-xs text-gray-500">Profit Factor</p>
                  </div>
                  <div className="flex items-center gap-1">
                     <TrendingUp className="w-4 h-4 text-primary" />
                     <span className="text-xs font-bold text-primary">+0.12</span>
                  </div>
               </div>
            </div>

            <div className="bg-card border border-border rounded-3xl p-6 border-dashed border-gray-700">
               <p className="text-xs text-gray-500 leading-relaxed italic">
                  "This agent is currently optimized for NASDAQ-100 components. Performance may vary during extreme macroeconomic shifts."
               </p>
            </div>
         </div>
      </div>
    </div>
  );
};

export default AgentDetailPage;
