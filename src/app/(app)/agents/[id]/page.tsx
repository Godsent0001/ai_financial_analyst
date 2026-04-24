"use client"

import { use } from "react"
import { Button } from "@/components/ui/Button"
import { motion } from "framer-motion"
import {
  Zap,
  ArrowLeft,
  Clock,
  Target,
  CheckCircle2
} from "lucide-react"
import Link from "next/link"

const agentData: Record<string, any> = {
  sentinel: { name: "Alpha Sentinel", id: "#1001", strategy: "Trend", profit: "+12.4%", drawdown: "3.2%", winRate: "68%", risk: "Low" },
  apex: { name: "Apex Trend", id: "#1002", strategy: "Momentum", profit: "+24.8%", drawdown: "8.5%", winRate: "54%", risk: "Med" },
  vector: { name: "Vector Quant", id: "#1003", strategy: "Quant", profit: "+18.2%", drawdown: "5.1%", winRate: "62%", risk: "Low" },
  horizon: { name: "Horizon Macro", id: "#1004", strategy: "Macro", profit: "+21.5%", drawdown: "6.2%", winRate: "58%", risk: "Med" }
}

export default function AgentDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = use(params)
  const id = resolvedParams.id
  const agent = agentData[id] || agentData.sentinel

  return (
    <div className="p-4 md:p-8 pt-20 lg:pt-8 space-y-8">
      <div className="flex items-center justify-between">
        <Link href="/agents" className="flex items-center text-xs font-black uppercase text-zinc-500 hover:text-white transition-colors tracking-widest">
          <ArrowLeft className="mr-1 h-3 w-3" /> Back
        </Link>
        <Button className="font-bold h-9 px-6 rounded-full">Copy</Button>
      </div>

      <div className="flex gap-4 items-center">
        <div className="h-14 w-14 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary">
          <Zap className="h-7 w-7" />
        </div>
        <div>
          <h1 className="text-3xl font-black italic uppercase tracking-tighter">{agent.name}</h1>
          <p className="text-[10px] font-black text-primary uppercase tracking-widest">{agent.strategy} STRATEGY</p>
        </div>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
         {[
           { label: "Return", value: agent.profit, color: "text-primary" },
           { label: "Drawdown", value: agent.drawdown, color: "text-white" },
           { label: "Win Rate", value: agent.winRate, color: "text-white" },
           { label: "Risk", value: agent.risk, color: agent.risk === 'Low' ? 'text-primary' : 'text-amber-500' },
         ].map((stat, i) => (
          <Card key={i} className="border-white/5 bg-zinc-900/50 rounded-2xl p-4">
            <p className="text-[10px] font-black text-zinc-600 uppercase tracking-widest mb-1">{stat.label}</p>
            <div className={`text-xl font-black ${stat.color}`}>{stat.value}</div>
          </Card>
         ))}
      </div>

      <div className="space-y-6">
        <Card className="border-white/5 bg-zinc-900/50 rounded-3xl p-6 overflow-hidden">
          <h3 className="text-lg font-black italic uppercase mb-6">Equity Curve</h3>
          <div className="h-48 w-full flex items-end gap-1 px-2">
            {[30, 45, 40, 60, 55, 75, 70, 90, 85, 105, 120, 115, 140, 160].map((h, i) => (
              <motion.div
                key={i}
                initial={{ height: 0 }}
                animate={{ height: `${h}%` }}
                className="flex-1 bg-primary/20 hover:bg-primary transition-colors rounded-t-sm"
              />
            ))}
          </div>
        </Card>

        <Card className="border-white/5 bg-zinc-900/50 rounded-3xl overflow-hidden">
          <div className="p-6 border-b border-white/5">
            <h3 className="text-lg font-black italic uppercase">Recent Trades</h3>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="text-[10px] font-black text-zinc-600 uppercase tracking-widest border-b border-white/5">
                  <th className="px-6 py-4">Asset</th>
                  <th className="px-6 py-4">Side</th>
                  <th className="px-6 py-4 text-right">Profit</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5">
                {[
                  { i: "NVDA", a: "BUY", p: "+$242.10" },
                  { i: "TSLA", a: "SELL", p: "+$85.40" },
                  { i: "AAPL", a: "BUY", p: "-$12.50" },
                ].map((row, idx) => (
                  <tr key={idx} className="text-sm font-bold">
                    <td className="px-6 py-4">{row.i}</td>
                    <td className="px-6 py-4">
                      <span className={row.a === 'BUY' ? 'text-primary' : 'text-red-500'}>{row.a}</span>
                    </td>
                    <td className={`px-6 py-4 text-right ${row.p.startsWith('+') ? 'text-primary' : 'text-red-500'}`}>
                      {row.p}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Card>
      </div>
    </div>
  )
}

function Card({ children, className, ...props }: any) {
  return (
    <div className={`border border-white/5 bg-zinc-900/50 ${className}`} {...props}>
      {children}
    </div>
  )
}
