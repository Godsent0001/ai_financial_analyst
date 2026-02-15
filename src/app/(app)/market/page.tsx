import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/Card"
import { Button } from "@/components/ui/Button"
import { Input } from "@/components/ui/Input"
import {
  Search,
  BarChart3,
  TrendingUp,
  TrendingDown,
  Zap,
  Info,
  ExternalLink
} from "lucide-react"

export default function MarketExplorer() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Market Explorer</h1>
        <p className="text-muted-foreground">Search and analyze any ticker with AI insights.</p>
      </div>

      <div className="flex gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
          <Input placeholder="Enter ticker (e.g. NVDA, BTC, AAPL)..." className="pl-10 h-12 text-lg bg-secondary/50 border-white/10" />
        </div>
        <Button size="lg" className="px-8">Analyze</Button>
      </div>

      <div className="grid gap-8 lg:grid-cols-3">
        {/* TradingView Placeholder */}
        <Card className="lg:col-span-2 border-white/5 bg-secondary/50 h-[600px] flex flex-col">
          <CardHeader className="flex flex-row items-center justify-between">
             <div>
                <CardTitle className="flex items-center gap-2">
                   NVIDIA Corp <span className="text-primary">$875.24</span>
                </CardTitle>
                <CardDescription>NASDAQ: NVDA • Real-time Data</CardDescription>
             </div>
             <Button variant="outline" size="sm" className="gap-2">
                <ExternalLink className="h-4 w-4" /> Full Chart
             </Button>
          </CardHeader>
          <CardContent className="flex-1 p-0 relative">
             <div className="absolute inset-0 bg-white/5 flex items-center justify-center">
                <div className="text-center">
                   <BarChart3 className="h-16 w-16 text-white/10 mx-auto mb-4" />
                   <p className="text-muted-foreground font-medium italic">TradingView Chart Integration Placeholder</p>
                </div>
             </div>
             {/* Simple visual to simulate a chart */}
             <div className="absolute bottom-0 left-0 right-0 h-2/3 flex items-end px-4 gap-1 opacity-20 pointer-events-none">
                {Array.from({ length: 40 }).map((_, i) => (
                  <div key={i} className="flex-1 bg-primary" style={{ height: `${Math.random() * 80 + 20}%` }} />
                ))}
             </div>
          </CardContent>
        </Card>

        {/* AI Outlook Panel */}
        <div className="space-y-6">
           <Card className="border-primary/20 bg-primary/5">
              <CardHeader>
                 <div className="flex items-center gap-2 text-primary font-bold">
                    <Zap className="h-5 w-5" />
                    AI COMPANY SUMMARY
                 </div>
              </CardHeader>
              <CardContent className="text-sm leading-relaxed text-muted-foreground">
                 NVIDIA is the world leader in AI computing. Current AI sentiment is <span className="text-primary font-bold">Strongly Bullish</span> based on exponential data center growth and overwhelming dominance in the LLM hardware market. Technical indicators show a healthy consolidation before the next potential breakout.
              </CardContent>
           </Card>

           <Card className="border-white/5 bg-secondary/50">
              <CardHeader>
                 <CardTitle className="text-sm font-bold uppercase tracking-wider text-muted-foreground">AI Probability Outlook</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                 <div>
                    <div className="flex justify-between text-sm mb-2 font-medium">
                       <span>Bullish</span>
                       <span className="text-primary">72%</span>
                    </div>
                    <div className="h-2 w-full bg-white/5 rounded-full overflow-hidden">
                       <div className="h-full bg-primary" style={{ width: '72%' }} />
                    </div>
                 </div>
                 <div>
                    <div className="flex justify-between text-sm mb-2 font-medium">
                       <span>Neutral</span>
                       <span>18%</span>
                    </div>
                    <div className="h-2 w-full bg-white/5 rounded-full overflow-hidden">
                       <div className="h-full bg-muted-foreground" style={{ width: '18%' }} />
                    </div>
                 </div>
                 <div>
                    <div className="flex justify-between text-sm mb-2 font-medium">
                       <span>Bearish</span>
                       <span className="text-red-500">10%</span>
                    </div>
                    <div className="h-2 w-full bg-white/5 rounded-full overflow-hidden">
                       <div className="h-full bg-red-500" style={{ width: '10%' }} />
                    </div>
                 </div>
              </CardContent>
           </Card>

           <Card className="border-white/5 bg-secondary/50">
              <CardHeader>
                 <div className="flex items-center gap-2">
                    <Info className="h-4 w-4 text-muted-foreground" />
                    <CardTitle className="text-sm font-bold uppercase tracking-wider text-muted-foreground">Key Drivers</CardTitle>
                 </div>
              </CardHeader>
              <CardContent>
                 <ul className="space-y-3">
                    {[
                      { label: "Institutional Inflow", type: "pos" },
                      { label: "Earnings Momentum", type: "pos" },
                      { label: "Sector Volatility", type: "neg" },
                      { label: "Technical Breakout", type: "pos" },
                    ].map((driver, i) => (
                      <li key={i} className="flex items-center justify-between text-sm">
                         <span className="text-muted-foreground">{driver.label}</span>
                         {driver.type === 'pos' ? (
                           <TrendingUp className="h-4 w-4 text-primary" />
                         ) : (
                           <TrendingDown className="h-4 w-4 text-red-500" />
                         )}
                      </li>
                    ))}
                 </ul>
              </CardContent>
           </Card>
        </div>
      </div>
    </div>
  )
}
