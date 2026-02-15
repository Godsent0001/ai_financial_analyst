import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/Card"
import { Button } from "@/components/ui/Button"
import {
  Zap,
  TrendingUp,
  BarChart3,
  Shield,
  PieChart,
  ArrowUpRight,
  ChevronRight
} from "lucide-react"
import Link from "next/link"

export default function AgentsPage() {
  const agents = [
    {
      id: "momentum",
      name: "Oracle Momentum",
      strategy: "Trend Following",
      profit: "+42.5%",
      winRate: "68%",
      drawdown: "12%",
      risk: "Medium",
      desc: "Optimized for capturing mid-to-long term price trends using institutional volume data."
    },
    {
      id: "value",
      name: "Oracle Value",
      strategy: "Fundamentals",
      profit: "+18.2%",
      winRate: "74%",
      drawdown: "4%",
      risk: "Low",
      desc: "Identifies undervalued stocks based on earnings quality and balance sheet strength."
    },
    {
      id: "macro",
      name: "Oracle Macro",
      strategy: "Economic Data",
      profit: "+29.8%",
      winRate: "62%",
      drawdown: "8%",
      risk: "Medium",
      desc: "Reacts to global economic shifts, interest rates, and geopolitical sentiment."
    },
    {
      id: "scalper",
      name: "Oracle Scalper",
      strategy: "Intraday Volatility",
      profit: "+56.1%",
      winRate: "54%",
      drawdown: "22%",
      risk: "High",
      desc: "High-frequency signals designed for day traders looking for short-term volatility."
    },
  ]

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">AI Intelligence Agents</h1>
        <p className="text-muted-foreground">Select an agent to view its performance and real-time decision reasoning.</p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-2">
        {agents.map((agent) => (
          <Card key={agent.id} className="border-white/5 bg-secondary/50 flex flex-col">
            <CardHeader className="flex flex-row items-start justify-between space-y-0">
               <div className="flex gap-4">
                  <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                    <Zap className="h-6 w-6" />
                  </div>
                  <div>
                    <CardTitle className="text-xl">{agent.name}</CardTitle>
                    <CardDescription>{agent.strategy}</CardDescription>
                  </div>
               </div>
               <div className="text-right">
                  <div className="text-2xl font-bold text-primary">{agent.profit}</div>
                  <div className="text-[10px] font-bold uppercase text-muted-foreground">All-Time Profit</div>
               </div>
            </CardHeader>
            <CardContent className="flex-1">
               <p className="text-sm text-muted-foreground mb-6">{agent.desc}</p>
               <div className="grid grid-cols-3 gap-4 border-t border-white/5 pt-6">
                  <div>
                    <div className="text-xs text-muted-foreground uppercase mb-1">Win Rate</div>
                    <div className="text-sm font-bold">{agent.winRate}</div>
                  </div>
                  <div>
                    <div className="text-xs text-muted-foreground uppercase mb-1">Drawdown</div>
                    <div className="text-sm font-bold">{agent.drawdown}</div>
                  </div>
                  <div>
                    <div className="text-xs text-muted-foreground uppercase mb-1">Risk</div>
                    <div className="text-sm font-bold">
                       <span className={`inline-flex rounded-full px-2 py-0.5 text-[10px] font-bold uppercase ${
                         agent.risk === 'Low' ? 'bg-primary/20 text-primary' :
                         agent.risk === 'Medium' ? 'bg-amber-500/20 text-amber-500' : 'bg-red-500/20 text-red-500'
                       }`}>
                         {agent.risk}
                       </span>
                    </div>
                  </div>
               </div>
            </CardContent>
            <CardFooter className="border-t border-white/5 bg-white/2 pb-4 pt-4 rounded-b-xl">
               <Button variant="ghost" className="w-full justify-between" asChild>
                 <Link href={`/agents/${agent.id}`}>
                   View Performance Details <ChevronRight className="h-4 w-4" />
                 </Link>
               </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  )
}
