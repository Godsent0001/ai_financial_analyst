import Link from "next/link"
import { Button } from "@/components/ui/Button"
import { Card, CardContent } from "@/components/ui/Card"
import {
  Zap,
  Shield,
  TrendingUp,
  MessageSquare,
  Search,
  ChevronRight,
  ArrowRight
} from "lucide-react"

export default function LandingPage() {
  const buttonStyles = {
    primary: "inline-flex items-center justify-center rounded-md font-medium transition-colors bg-primary text-primary-foreground shadow hover:bg-primary/90 h-10 px-4 py-2",
    primaryLg: "inline-flex items-center justify-center rounded-md font-medium transition-colors bg-primary text-primary-foreground shadow hover:bg-primary/90 h-12 px-8 text-lg",
    outlineLg: "inline-flex items-center justify-center rounded-md font-medium transition-colors border border-input bg-transparent shadow-sm hover:bg-accent hover:text-accent-foreground h-12 px-8 text-lg",
    ghost: "inline-flex items-center justify-center rounded-md font-medium transition-colors hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2"
  }

  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground">
      {/* Navbar */}
      <header className="fixed top-0 z-50 w-full border-b border-white/10 bg-background/80 backdrop-blur-md">
        <div className="container mx-auto flex h-16 items-center justify-between px-4">
          <div className="flex items-center gap-2">
            <span className="text-xl font-bold tracking-tighter text-primary">MARKET ORACLE</span>
          </div>
          <nav className="hidden md:flex items-center gap-8">
            <Link href="#features" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">Features</Link>
            <Link href="#how-it-works" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">How it works</Link>
            <Link href="/pricing" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">Pricing</Link>
          </nav>
          <div className="flex items-center gap-4">
            <Link href="/login" className="text-sm font-medium hover:text-primary transition-colors">Login</Link>
            <Link href="/signup" className={buttonStyles.primary}>Start Free</Link>
          </div>
        </div>
      </header>

      <main className="flex-1 pt-16">
        {/* Hero Section */}
        <section className="relative overflow-hidden py-24 md:py-32">
          <div className="container mx-auto px-4 text-center">
            <div className="mx-auto max-w-3xl">
              <div className="mb-8 inline-flex items-center rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-sm font-medium text-primary">
                <Zap className="mr-2 h-4 w-4 fill-current" />
                AI-Powered Market Intelligence
              </div>
              <h1 className="mb-6 text-5xl font-extrabold tracking-tight md:text-7xl">
                See the market <span className="text-primary">before it moves.</span>
              </h1>
              <p className="mb-10 text-xl text-muted-foreground">
                Market Oracle uses institutional-grade AI models to predict stock market movements and explain them in simple language for everyday investors.
              </p>
              <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
                <Link href="/signup" className={`${buttonStyles.primaryLg} w-full sm:w-auto`}>
                  Start Free <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
                <Link href="/pricing" className={`${buttonStyles.outlineLg} w-full sm:w-auto`}>
                  View Pricing
                </Link>
              </div>
            </div>
          </div>
          {/* Decorative background element */}
          <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-5xl opacity-20 blur-3xl pointer-events-none">
             <div className="w-full h-full bg-primary/20 rounded-full"></div>
          </div>
        </section>

        {/* How It Works */}
        <section id="how-it-works" className="py-24 bg-muted/30">
          <div className="container mx-auto px-4 text-center">
            <h2 className="mb-16 text-3xl font-bold md:text-4xl">How It Works</h2>
            <div className="grid gap-8 md:grid-cols-3">
              {[
                {
                  step: "01",
                  title: "AI Analyzes Markets",
                  desc: "Institutional data, technical indicators, and news sentiment processed in real-time."
                },
                {
                  step: "02",
                  title: "AI Predicts and Explains",
                  desc: "Clear Buy/Sell/Hold signals with transparent reasoning you can understand."
                },
                {
                  step: "03",
                  title: "You Decide",
                  desc: "No auto-trading. We provide the intelligence, you keep full control of your capital."
                }
              ].map((item) => (
                <div key={item.step} className="relative p-8 rounded-2xl border border-border bg-card text-left">
                  <div className="mb-4 text-4xl font-bold text-primary/20">{item.step}</div>
                  <h3 className="mb-4 text-xl font-bold">{item.title}</h3>
                  <p className="text-muted-foreground">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Leaderboard Preview */}
        <section className="py-24">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center justify-between mb-12">
              <div>
                <h2 className="text-3xl font-bold md:text-4xl">Top AI Agents</h2>
                <p className="text-muted-foreground">Follow the best performing AI strategies.</p>
              </div>
              <Link href="/agents" className={buttonStyles.ghost}>
                View all agents <ChevronRight className="ml-1 h-4 w-4" />
              </Link>
            </div>
            <div className="overflow-x-auto">
               <table className="w-full border-collapse">
                 <thead>
                   <tr className="border-b border-border text-left text-sm font-medium text-muted-foreground">
                     <th className="pb-4 pt-0">Agent</th>
                     <th className="pb-4 pt-0">Strategy</th>
                     <th className="pb-4 pt-0">Profit %</th>
                     <th className="pb-4 pt-0">Risk</th>
                   </tr>
                 </thead>
                 <tbody>
                   {[
                     { name: "Oracle Momentum", strategy: "Trend Following", profit: "+42.5%", risk: "Medium" },
                     { name: "Oracle Value", strategy: "Fundamentals", profit: "+18.2%", risk: "Low" },
                     { name: "Oracle Macro", strategy: "Economic Data", profit: "+29.8%", risk: "Medium" }
                   ].map((agent) => (
                     <tr key={agent.name} className="border-b border-border/50">
                       <td className="py-4 font-medium">{agent.name}</td>
                       <td className="py-4 text-muted-foreground">{agent.strategy}</td>
                       <td className="py-4 text-primary font-bold">{agent.profit}</td>
                       <td className="py-4">
                         <span className="inline-flex rounded-full bg-primary/10 px-2 py-1 text-xs font-medium text-primary uppercase">
                           {agent.risk}
                         </span>
                       </td>
                     </tr>
                   ))}
                 </tbody>
               </table>
            </div>
          </div>
        </section>

        {/* Features */}
        <section id="features" className="py-24 bg-muted/30">
          <div className="container mx-auto px-4">
            <h2 className="mb-16 text-center text-3xl font-bold md:text-4xl">Platform Features</h2>
            <div className="grid gap-8 md:grid-cols-3">
              {[
                {
                  icon: MessageSquare,
                  title: "AI Chat",
                  desc: "Ask any question about stocks or macro trends and get instant, simple explanations."
                },
                {
                  icon: Zap,
                  title: "AI Signal Rooms",
                  desc: "Real-time AI predictions for stocks and crypto delivered directly to your dashboard."
                },
                {
                  icon: Shield,
                  title: "Transparent Decisions",
                  desc: "Never guess why. Every AI prediction comes with a detailed breakdown of its reasoning."
                }
              ].map((feature, i) => (
                <div key={i} className="flex flex-col items-center text-center p-8">
                   <div className="mb-6 rounded-2xl bg-primary/10 p-4 text-primary">
                      <feature.icon className="h-8 w-8" />
                   </div>
                   <h3 className="mb-4 text-xl font-bold">{feature.title}</h3>
                   <p className="text-muted-foreground">{feature.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-border py-12">
        <div className="container mx-auto px-4">
          <div className="grid gap-8 md:grid-cols-4">
            <div className="md:col-span-2">
              <span className="text-xl font-bold tracking-tighter text-primary">MARKET ORACLE</span>
              <p className="mt-4 max-w-xs text-sm text-muted-foreground">
                The next generation of market intelligence. Predicting the future of finance with transparent AI.
              </p>
            </div>
            <div>
              <h4 className="mb-4 text-sm font-bold uppercase tracking-wider">Product</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><Link href="/agents" className="hover:text-primary">AI Agents</Link></li>
                <li><Link href="/chat" className="hover:text-primary">AI Chat</Link></li>
                <li><Link href="/pricing" className="hover:text-primary">Pricing</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="mb-4 text-sm font-bold uppercase tracking-wider">Legal</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><Link href="/legal/terms" className="hover:text-primary">Terms</Link></li>
                <li><Link href="/legal/privacy" className="hover:text-primary">Privacy</Link></li>
                <li><Link href="/legal/risk" className="hover:text-primary">Risk Disclosure</Link></li>
              </ul>
            </div>
          </div>
          <div className="mt-12 border-t border-border pt-8 text-center text-sm text-muted-foreground">
            © {new Date().getFullYear()} Market Oracle. Not financial advice.
          </div>
        </div>
      </footer>
    </div>
  )
}
