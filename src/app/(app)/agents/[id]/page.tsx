import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/Card"
import { Button } from "@/components/ui/Button"
import {
  Zap,
  TrendingUp,
  BarChart3,
  Shield,
  PieChart,
  ArrowLeft,
  Info,
  BrainCircuit,
  Target
} from "lucide-react"
import Link from "next/link"

export default async function AgentDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  const agentName = id.charAt(0).toUpperCase() + id.slice(1)

  return (
    <div className="space-y-8">
      <div className="flex items-center gap-4">
        <Button variant="ghost" size="sm" asChild>
          <Link href="/agents"><ArrowLeft className="mr-2 h-4 w-4" /> Back to Agents</Link>
        </Button>
      </div>

      <div className="flex flex-col lg:flex-row justify-between items-start gap-8">
        <div className="flex gap-6 items-center">
           <div className="h-16 w-16 rounded-2xl bg-primary flex items-center justify-center text-primary-foreground shadow-lg shadow-primary/20">
             <Zap className="h-8 w-8" />
           </div>
           <div>
              <h1 className="text-4xl font-extrabold tracking-tight">Oracle {agentName}</h1>
              <div className="flex items-center gap-4 mt-1">
                 <span className="text-primary font-bold">Trend Following Strategy</span>
                 <span className="text-muted-foreground text-sm">• Active for 14 months</span>
              </div>
           </div>
        </div>
        <div className="flex gap-4">
           <Button variant="outline">Download Report</Button>
           <Button variant="primary">Follow Agent</Button>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-4">
         {[
           { label: "Total Profit", value: "+42.5%", color: "text-primary" },
           { label: "Win Rate", value: "68%", color: "text-foreground" },
           { label: "Profit Factor", value: "2.4", color: "text-foreground" },
           { label: "Risk Score", value: "3/10", color: "text-primary" },
         ].map((stat, i) => (
           <Card key={i} className="border-white/5 bg-secondary/50">
              <CardContent className="pt-6">
                 <div className="text-xs text-muted-foreground uppercase mb-1 font-bold">{stat.label}</div>
                 <div className={`text-2xl font-bold ${stat.color}`}>{stat.value}</div>
              </CardContent>
           </Card>
         ))}
      </div>

      <div className="grid gap-8 lg:grid-cols-3">
         {/* Performance Chart Placeholder */}
         <Card className="lg:col-span-2 border-white/5 bg-secondary/50">
            <CardHeader>
               <CardTitle>Equity Curve</CardTitle>
               <CardDescription>Performance of AI signals over time.</CardDescription>
            </CardHeader>
            <CardContent>
               <div className="h-[300px] w-full bg-white/5 rounded-lg flex items-end p-4 gap-2">
                  {/* Mock Chart Bars */}
                  {[40, 60, 45, 70, 85, 65, 90, 100, 95, 110, 130, 120].map((h, i) => (
                    <div key={i} className="flex-1 bg-primary/20 hover:bg-primary transition-colors rounded-t-sm" style={{ height: `${h}%` }} />
                  ))}
               </div>
               <div className="flex justify-between mt-4 text-xs text-muted-foreground uppercase font-bold px-2">
                  <span>Jan 2023</span>
                  <span>Jul 2023</span>
                  <span>Feb 2024</span>
               </div>
            </CardContent>
         </Card>

         {/* AI Decision Explanation */}
         <Card className="border-primary/20 bg-primary/5">
            <CardHeader>
               <div className="flex items-center gap-2 text-primary">
                  <BrainCircuit className="h-5 w-5" />
                  <CardTitle>AI Reasoning</CardTitle>
               </div>
               <CardDescription className="text-primary/70">How this agent makes decisions.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
               <div>
                  <h4 className="text-sm font-bold flex items-center gap-2 mb-2">
                     <Target className="h-4 w-4" /> Core Logic
                  </h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                     The AI issued a BUY signal on NVIDIA due to a bullish MACD crossover, rising institutional volume, and positive earnings sentiment detected from 450+ financial news sources.
                  </p>
               </div>
               <div className="pt-4 border-t border-primary/10">
                  <h4 className="text-sm font-bold flex items-center gap-2 mb-2 text-amber-500">
                     <Info className="h-4 w-4" /> Risk Assessment
                  </h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                     Despite bullish indicators, macroeconomic tightening and semiconductor sector volatility increase downside risk to moderate.
                  </p>
               </div>
            </CardContent>
         </Card>
      </div>

      {/* Signal History Table */}
      <Card className="border-white/5 bg-secondary/50">
         <CardHeader>
            <CardTitle>Signal History</CardTitle>
            <CardDescription>Past performance record for Oracle {agentName}.</CardDescription>
         </CardHeader>
         <CardContent>
            <table className="w-full text-sm">
               <thead>
                  <tr className="border-b border-white/5 text-left text-muted-foreground font-medium uppercase text-[10px] tracking-wider">
                     <th className="pb-4">Ticker</th>
                     <th className="pb-4">Signal</th>
                     <th className="pb-4">Entry</th>
                     <th className="pb-4">Exit</th>
                     <th className="pb-4">Result</th>
                  </tr>
               </thead>
               <tbody>
                  {[
                    { t: "AAPL", s: "BUY", en: "$182.40", ex: "$194.20", r: "+6.47%" },
                    { t: "MSFT", s: "BUY", en: "$402.10", ex: "$415.80", r: "+3.41%" },
                    { t: "TSLA", s: "SELL", en: "$192.50", ex: "$175.20", r: "+8.98%" },
                    { t: "GOOGL", s: "HOLD", en: "$142.10", ex: "-", r: "0.00%" },
                  ].map((row, i) => (
                    <tr key={i} className="border-b border-white/5 last:border-0">
                       <td className="py-4 font-bold">{row.t}</td>
                       <td className="py-4">
                          <span className={`px-2 py-0.5 rounded text-[10px] font-bold ${row.s === 'BUY' ? 'bg-primary/20 text-primary' : row.s === 'SELL' ? 'bg-red-500/20 text-red-500' : 'bg-muted text-muted-foreground'}`}>
                             {row.s}
                          </span>
                       </td>
                       <td className="py-4 text-muted-foreground">{row.en}</td>
                       <td className="py-4 text-muted-foreground">{row.ex}</td>
                       <td className={`py-4 font-bold ${row.r.startsWith('+') ? 'text-primary' : 'text-foreground'}`}>{row.r}</td>
                    </tr>
                  ))}
               </tbody>
            </table>
         </CardContent>
      </Card>
    </div>
  )
}
