import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/Card"
import { Button } from "@/components/ui/Button"
import {
  TrendingUp,
  TrendingDown,
  ArrowUpRight,
  Zap,
  Lock,
  ChevronRight,
  MessageSquare
} from "lucide-react"
import Link from "next/link"

export default function Dashboard() {
  const marketCards = [
    { name: "S&P 500", price: "5,123.42", change: "+1.2%", trend: "up" },
    { name: "NASDAQ", price: "16,274.94", change: "+1.5%", trend: "up" },
    { name: "BTC", price: "64,231.50", change: "-0.8%", trend: "down" },
    { name: "ETH", price: "3,452.12", change: "+0.5%", trend: "up" },
  ]

  const agents = [
    { name: "Oracle Momentum", strategy: "Trend Following", profit: "+42.5%", risk: "Medium" },
    { name: "Oracle Value", strategy: "Fundamentals", profit: "+18.2%", risk: "Low" },
    { name: "Oracle Macro", strategy: "Economic Data", profit: "+29.8%", risk: "Medium" },
  ]

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Command Center</h1>
        <p className="text-muted-foreground">Welcome back, John. Here&apos;s your market intelligence briefing.</p>
      </div>

      {/* Market Overview */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {marketCards.map((card) => (
          <Card key={card.name} className="border-white/5 bg-secondary/50">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">{card.name}</CardTitle>
              {card.trend === "up" ? (
                <TrendingUp className="h-4 w-4 text-primary" />
              ) : (
                <TrendingDown className="h-4 w-4 text-red-500" />
              )}
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">${card.price}</div>
              <p className={`text-xs ${card.trend === "up" ? "text-primary" : "text-red-500"}`}>
                {card.change} from yesterday
              </p>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid gap-8 md:grid-cols-2">
        {/* AI Agents Leaderboard */}
        <Card className="border-white/5 bg-secondary/50">
          <CardHeader className="flex flex-row items-center justify-between">
            <div>
              <CardTitle>AI Agents Leaderboard</CardTitle>
              <CardDescription>Top performing intelligence models.</CardDescription>
            </div>
            <Button variant="ghost" size="sm" asChild>
              <Link href="/agents">View All <ChevronRight className="ml-1 h-4 w-4" /></Link>
            </Button>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {agents.map((agent) => (
                <div key={agent.name} className="flex items-center justify-between border-b border-white/5 pb-4 last:border-0 last:pb-0">
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                      <Zap className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="font-medium">{agent.name}</p>
                      <p className="text-xs text-muted-foreground">{agent.strategy}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-primary font-bold">{agent.profit}</p>
                    <span className="text-[10px] uppercase font-bold text-muted-foreground bg-white/5 px-2 py-0.5 rounded-full">
                      {agent.risk} Risk
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Latest AI Predictions */}
        <Card className="border-white/5 bg-secondary/50 relative overflow-hidden">
          <CardHeader>
            <CardTitle>Latest AI Predictions</CardTitle>
            <CardDescription>Real-time signals from across the market.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
             {/* Mock Blurred Predictions */}
             {[
               { ticker: "AAPL", signal: "BUY", confidence: "82%" },
               { ticker: "TSLA", signal: "HOLD", confidence: "65%" },
               { ticker: "NVDA", signal: "BUY", confidence: "91%" },
             ].map((pred, i) => (
               <div key={i} className="flex items-center justify-between py-2 blur-sm select-none opacity-50">
                 <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded bg-white/10" />
                    <div className="font-bold">{pred.ticker}</div>
                 </div>
                 <div className="flex gap-4">
                    <div className="font-bold text-primary">{pred.signal}</div>
                    <div className="text-muted-foreground">{pred.confidence}</div>
                 </div>
               </div>
             ))}

             {/* Paywall Overlay */}
             <div className="absolute inset-0 z-10 flex flex-col items-center justify-center bg-background/40 backdrop-blur-[2px] p-6 text-center">
                <div className="mb-4 rounded-full bg-primary/20 p-3 text-primary">
                  <Lock className="h-6 w-6" />
                </div>
                <h3 className="mb-2 text-lg font-bold">Signals are Locked</h3>
                <p className="mb-4 text-sm text-muted-foreground max-w-[200px]">
                  Upgrade to Pro to access real-time AI predictions.
                </p>
                <Button variant="primary" size="sm" asChild>
                  <Link href="/pricing">Unlock Now</Link>
                </Button>
             </div>
          </CardContent>
        </Card>
      </div>

      {/* Quick AI Chat */}
      <Card className="border-primary/20 bg-primary/5">
        <CardContent className="p-6">
           <div className="flex items-center gap-4">
              <div className="h-12 w-12 rounded-full bg-primary flex items-center justify-center text-primary-foreground shadow-lg shadow-primary/20">
                <MessageSquare className="h-6 w-6" />
              </div>
              <div className="flex-1">
                 <h3 className="font-bold">Ask Market Oracle</h3>
                 <p className="text-sm text-muted-foreground">Instant insights on any stock or market trend.</p>
              </div>
              <Button variant="primary" asChild>
                <Link href="/chat">Open Chat</Link>
              </Button>
           </div>
        </CardContent>
      </Card>
    </div>
  )
}
