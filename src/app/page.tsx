"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import {
  Zap,
  Search,
  ChevronRight,
  ArrowRight,
  Wallet,
  CheckCircle2,
  TrendingUp
} from "lucide-react"

export default function LandingPage() {
  const buttonStyles = {
    primary: "inline-flex items-center justify-center rounded-full font-bold transition-all bg-primary text-primary-foreground hover:scale-105 active:scale-95 h-12 px-6",
    primaryLg: "inline-flex items-center justify-center rounded-full font-bold transition-all bg-primary text-primary-foreground hover:scale-105 active:scale-95 h-14 px-8 text-lg",
    outlineLg: "inline-flex items-center justify-center rounded-full font-bold transition-all border border-border bg-transparent hover:bg-white/5 h-14 px-8 text-lg",
    ghost: "inline-flex items-center justify-center rounded-md font-medium transition-colors hover:text-primary h-10 px-4"
  }

  return (
    <div className="flex min-h-screen flex-col bg-black text-white selection:bg-primary selection:text-black">
      {/* Navbar */}
      <header className="fixed top-0 z-50 w-full bg-black/50 backdrop-blur-xl border-b border-white/5">
        <div className="container mx-auto flex h-16 items-center justify-between px-4">
          <span className="text-xl font-black tracking-tighter text-primary italic">MARKET ORACLE</span>
          <div className="flex items-center gap-4">
            <Link href="/login" className="text-sm font-bold hover:text-primary transition-colors">Login</Link>
            <Link href="/signup" className={buttonStyles.primary}>Start</Link>
          </div>
        </div>
      </header>

      <main className="flex-1 pt-16">
        {/* Hero Section */}
        <section className="relative py-20 md:py-32 overflow-hidden">
          <div className="container mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="max-w-3xl mx-auto"
            >
              <h1 className="mb-6 text-5xl md:text-7xl font-black tracking-tighter leading-[0.9]">
                COPY THE <span className="text-primary italic">BEST.</span><br />
                AUTOMATICALLY.
              </h1>
              <p className="mb-10 text-lg md:text-xl text-zinc-400 font-medium">
                Verified trading agents. Real-time execution. <br className="hidden md:block" />
                You only pay 20% commission on profits.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link href="/signup" className={`${buttonStyles.primaryLg} w-full sm:w-auto`}>
                  Start Copying <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
                <Link href="#performance" className={`${buttonStyles.outlineLg} w-full sm:w-auto`}>
                  Live Results
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        {/* How It Works */}
        <section className="py-20 bg-zinc-950">
          <div className="container mx-auto px-4">
            <div className="grid gap-4 md:grid-cols-3">
              {[
                { title: "Choose Agent", desc: "Browse verified performance.", icon: Search },
                { title: "Deposit", desc: "Start with just $50.", icon: Wallet },
                { title: "Auto-Copy", desc: "Trades mirror in real-time.", icon: Zap }
              ].map((item, i) => (
                <div key={i} className="p-8 rounded-3xl bg-zinc-900/50 border border-white/5">
                  <item.icon className="h-8 w-8 text-primary mb-4" />
                  <h3 className="text-xl font-bold mb-1">{item.title}</h3>
                  <p className="text-zinc-500 font-medium">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Live Performance */}
        <section id="performance" className="py-20">
          <div className="container mx-auto px-4">
            <div className="flex justify-between items-end mb-8">
              <h2 className="text-3xl font-black italic">TOP AGENTS</h2>
              <Link href="/agents" className="text-primary font-bold flex items-center gap-1">
                View All <ChevronRight className="h-4 w-4" />
              </Link>
            </div>
            <div className="grid gap-4">
              {[
                { name: "Alpha Sentinel", returns: "+12.4%", risk: "Low" },
                { name: "Apex Trend", returns: "+24.8%", risk: "Medium" },
                { name: "Vector Quant", returns: "+18.2%", risk: "Low" }
              ].map((agent, i) => (
                <div key={i} className="flex items-center justify-between p-6 rounded-2xl bg-zinc-900/50 border border-white/5 hover:border-primary/20 transition-all">
                  <div>
                    <h3 className="font-bold text-lg">{agent.name}</h3>
                    <span className="text-[10px] font-black uppercase text-zinc-500 tracking-widest">{agent.risk} RISK</span>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-black text-primary">{agent.returns}</div>
                    <Link href="/signup" className="text-[10px] font-bold uppercase underline text-zinc-500 hover:text-primary">Copy</Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 border-t border-white/5 text-center">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl md:text-5xl font-black mb-8 italic uppercase">WIN TOGETHER.</h2>
            <Link href="/signup" className={buttonStyles.primaryLg}>Create Free Account</Link>
            <p className="mt-6 text-zinc-500 text-sm font-medium italic">
              "We only win when you make profit."
            </p>
          </div>
        </section>
      </main>

      <footer className="py-10 border-t border-white/5 bg-zinc-950 text-center">
        <div className="container mx-auto px-4">
          <span className="text-xl font-black tracking-tighter text-primary italic">MARKET ORACLE</span>
          <div className="flex justify-center gap-6 mt-6 text-sm font-bold text-zinc-500">
            <Link href="/legal/terms">Terms</Link>
            <Link href="/legal/privacy">Privacy</Link>
            <Link href="/legal/risk">Risk</Link>
          </div>
          <p className="mt-8 text-[10px] text-zinc-600 font-bold uppercase tracking-widest">
            © {new Date().getFullYear()} MARKET ORACLE. ALL TRADING INVOLVES RISK.
          </p>
        </div>
      </footer>
    </div>
  )
}
