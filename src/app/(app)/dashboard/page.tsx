"use client"

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/Card"
import { Button } from "@/components/ui/Button"
import { motion } from "framer-motion"
import {
  TrendingUp,
  TrendingDown,
  Zap,
  ChevronRight,
  ArrowUpCircle,
  ArrowDownCircle,
  PieChart,
  History
} from "lucide-react"
import Link from "next/link"

export default function Dashboard() {
  const portfolioStats = [
    { label: "Balance", value: "$12,450", change: "+12.5%", trend: "up" },
    { label: "Profit", value: "$2,105", change: "+5.2%", trend: "up" },
    { label: "Agents", value: "3", change: "", trend: "neutral" },
    { label: "Pending", value: "$342", change: "", trend: "neutral" },
  ]

  const activeAgents = [
    { name: "Alpha Sentinel", allocated: "$4,000", profit: "+$420.50", risk: "Low" },
    { name: "Apex Trend", allocated: "$2,500", profit: "+$850.10", risk: "Med" },
  ]

  return (
    <div className="space-y-6 p-4 lg:p-8 pt-20 lg:pt-8">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <h1 className="text-3xl font-black italic uppercase italic tracking-tighter">DASHBOARD</h1>
        <div className="flex items-center gap-2">
          <Link href="/deposit" className="flex-1 sm:flex-none">
            <Button className="w-full font-bold h-10 px-6 rounded-full">
              Deposit
            </Button>
          </Link>
          <Link href="/withdraw" className="flex-1 sm:flex-none">
            <Button variant="outline" className="w-full font-bold h-10 px-6 rounded-full border-white/10">
              Withdraw
            </Button>
          </Link>
        </div>
      </div>

      <div className="grid gap-3 grid-cols-2 lg:grid-cols-4">
        {portfolioStats.map((stat, i) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
          >
            <Card className="border-white/5 bg-zinc-900/50 rounded-2xl">
              <CardContent className="p-4">
                <p className="text-[10px] font-black text-zinc-500 uppercase tracking-widest mb-1">{stat.label}</p>
                <div className="text-xl font-black leading-tight">{stat.value}</div>
                {stat.change && (
                  <p className={`text-[10px] mt-1 font-black ${stat.trend === "up" ? "text-primary" : "text-red-500"}`}>
                    {stat.change}
                  </p>
                )}
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        <Card className="lg:col-span-2 border-white/5 bg-zinc-900/50 rounded-3xl overflow-hidden">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-lg font-black italic uppercase">ACTIVE</CardTitle>
            <Link href="/agents" className="text-[10px] font-black text-primary uppercase tracking-widest">Browse</Link>
          </CardHeader>
          <CardContent className="space-y-3">
            {activeAgents.map((agent) => (
              <div key={agent.name} className="flex items-center justify-between p-4 rounded-2xl bg-black/40 border border-white/5">
                <div className="flex items-center gap-3">
                  <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                    <Zap className="h-4 w-4" />
                  </div>
                  <div>
                    <p className="font-bold text-sm">{agent.name}</p>
                    <p className="text-[10px] font-black text-zinc-600 uppercase tracking-widest">{agent.risk} RISK</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-xs text-zinc-500 font-bold">{agent.allocated}</p>
                  <p className="text-sm font-black text-primary">{agent.profit}</p>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>

        <Card className="border-white/5 bg-zinc-900/50 rounded-3xl overflow-hidden">
          <CardHeader>
            <CardTitle className="text-lg font-black italic uppercase">TOP PERFORMANCE</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {[
              { name: "Oracle Momentum", returns: "+42.5%" },
              { name: "Oracle Macro", returns: "+29.8%" },
            ].map((agent, i) => (
              <div key={agent.name} className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <span className="text-zinc-800 font-black italic text-xl">0{i+1}</span>
                  <p className="font-bold text-sm">{agent.name}</p>
                </div>
                <p className="text-primary font-black">{agent.returns}</p>
              </div>
            ))}
            <Button className="w-full mt-4 font-bold rounded-xl" variant="outline" asChild>
              <Link href="/agents">Leaderboard</Link>
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
