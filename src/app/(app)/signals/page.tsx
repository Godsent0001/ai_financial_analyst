import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/Card"
import { Button } from "@/components/ui/Button"
import {
  Zap,
  Lock,
  TrendingUp,
  TrendingDown,
  ShieldCheck,
  Clock,
  Bitcoin,
  Globe,
  Briefcase
} from "lucide-react"
import Link from "next/link"

export default function SignalsPage() {
  const signalRooms = [
    { name: "Stock Signals Room", icon: Globe, count: 12, locked: true },
    { name: "Crypto Signals Room", icon: Bitcoin, count: 8, locked: true },
    { name: "ETF & Index Signals", icon: Briefcase, count: 5, locked: true },
  ]

  return (
    <div className="space-y-8">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">AI Signal Rooms</h1>
          <p className="text-muted-foreground">Real-time institutional-grade trading signals powered by AI.</p>
        </div>
        <div className="flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-primary font-bold text-sm">
          <Zap className="h-4 w-4 fill-current" />
          PRO ACCESS REQUIRED
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        {signalRooms.map((room) => (
          <Card key={room.name} className="border-white/5 bg-secondary/50 hover:border-primary/20 transition-all cursor-pointer group">
            <CardHeader>
              <room.icon className="h-8 w-8 text-primary mb-2" />
              <CardTitle>{room.name}</CardTitle>
              <CardDescription>{room.count} active signals today</CardDescription>
            </CardHeader>
            <CardContent>
               <Button variant="outline" className="w-full group-hover:bg-primary group-hover:text-primary-foreground">
                 Enter Room
               </Button>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Preview of a Signal Room */}
      <Card className="border-white/5 bg-secondary/50 relative overflow-hidden">
        <CardHeader className="border-b border-white/5">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Globe className="h-5 w-5 text-primary" />
              <CardTitle>Live Feed: Stock Signals Room</CardTitle>
            </div>
            <div className="flex items-center gap-4 text-xs text-muted-foreground font-medium">
               <span className="flex items-center gap-1"><span className="h-2 w-2 rounded-full bg-primary animate-pulse" /> Live</span>
               <span>342 users online</span>
            </div>
          </div>
        </CardHeader>
        <CardContent className="p-0">
           <div className="p-6 space-y-6 blur-md select-none opacity-40">
              {[1, 2, 3].map((_, i) => (
                <div key={i} className="rounded-xl border border-white/5 bg-background p-4 space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="h-8 w-8 rounded bg-white/10" />
                      <div>
                        <div className="h-4 w-12 bg-white/20 rounded mb-1" />
                        <div className="h-3 w-24 bg-white/10 rounded" />
                      </div>
                    </div>
                    <div className="h-6 w-16 bg-primary/30 rounded-full" />
                  </div>
                  <div className="grid grid-cols-4 gap-4">
                     {[1,2,3,4].map(j => <div key={j} className="h-8 bg-white/5 rounded" />)}
                  </div>
                </div>
              ))}
           </div>

           {/* Paywall Overlay */}
           <div className="absolute inset-0 z-10 flex flex-col items-center justify-center bg-background/60 backdrop-blur-md p-12 text-center">
              <div className="mb-6 rounded-full bg-primary/20 p-4 text-primary">
                <Lock className="h-8 w-8" />
              </div>
              <h2 className="mb-2 text-2xl font-bold">Unlock Signal Rooms</h2>
              <p className="mb-8 text-muted-foreground max-w-md">
                Get real-time Buy/Sell/Hold signals for 1,000+ stocks and crypto assets. Includes confidence scores and transparent AI reasoning.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button variant="primary" size="lg" asChild>
                  <Link href="/pricing">Upgrade to Pro ($20/mo)</Link>
                </Button>
                <Button variant="outline" size="lg">
                  View Success Rate
                </Button>
              </div>
              <div className="mt-8 grid grid-cols-2 gap-8 text-left sm:grid-cols-3">
                 <div>
                    <div className="text-xl font-bold text-primary">78%</div>
                    <div className="text-xs text-muted-foreground uppercase">Win Rate</div>
                 </div>
                 <div>
                    <div className="text-xl font-bold text-primary">12.4%</div>
                    <div className="text-xs text-muted-foreground uppercase">Avg Monthly Return</div>
                 </div>
                 <div className="hidden sm:block">
                    <div className="text-xl font-bold text-primary">24/7</div>
                    <div className="text-xs text-muted-foreground uppercase">AI Monitoring</div>
                 </div>
              </div>
           </div>
        </CardContent>
      </Card>

      {/* Signal History Timeline (Sample) */}
      <div className="space-y-4">
        <h3 className="text-xl font-bold">Recent Signal Performance</h3>
        <div className="space-y-2">
           {[
             { ticker: "NVDA", signal: "BUY", result: "+14.2%", date: "2 days ago", type: "Stock" },
             { ticker: "TSLA", signal: "SELL", result: "+5.1%", date: "4 days ago", type: "Stock" },
             { ticker: "BTC", signal: "BUY", result: "-2.3%", date: "1 week ago", type: "Crypto" },
           ].map((item, i) => (
             <div key={i} className="flex items-center justify-between rounded-lg border border-white/5 bg-secondary/30 p-4">
                <div className="flex items-center gap-4">
                   <div className="text-sm font-bold w-12">{item.ticker}</div>
                   <div className={`text-xs font-bold px-2 py-0.5 rounded ${item.signal === 'BUY' ? 'bg-primary/20 text-primary' : 'bg-red-500/20 text-red-500'}`}>
                      {item.signal}
                   </div>
                   <div className="text-xs text-muted-foreground">{item.date}</div>
                </div>
                <div className="flex items-center gap-4">
                   <div className={`text-sm font-bold ${item.result.startsWith('+') ? 'text-primary' : 'text-red-500'}`}>
                      {item.result}
                   </div>
                   <ShieldCheck className="h-4 w-4 text-primary/50" />
                </div>
             </div>
           ))}
        </div>
      </div>
    </div>
  )
}
