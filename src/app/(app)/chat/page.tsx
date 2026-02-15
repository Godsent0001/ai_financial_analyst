"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/Card"
import { Button } from "@/components/ui/Button"
import { Input } from "@/components/ui/Input"
import {
  Send,
  Bot,
  User,
  Zap,
  Sparkles,
  Search,
  History,
  Bookmark
} from "lucide-react"

export default function ChatPage() {
  const [messages, setMessages] = useState([
    { role: 'assistant', content: 'Hello John! I am Market Oracle AI. How can I help you with your market research today?' }
  ])
  const [input, setInput] = useState('')

  const handleSend = () => {
    if (!input.trim()) return
    setMessages([...messages, { role: 'user', content: input }])
    setInput('')

    // Simulate AI response
    setTimeout(() => {
      setMessages(prev => [...prev, {
        role: 'assistant',
        content: `Analyzing ${input}... Apple shows bullish momentum due to rising institutional volume, strong earnings sentiment, and a breakout above the 50-day moving average. However, macro tech sector risk remains moderate.`
      }])
    }, 1000)
  }

  return (
    <div className="flex h-[calc(100vh-140px)] gap-6">
      {/* Left: Agent Selector */}
      <aside className="hidden w-64 flex-col gap-4 lg:flex">
        <h2 className="text-lg font-bold">AI Agents</h2>
        <div className="space-y-2">
           {[
             { name: "Oracle General", active: true },
             { name: "Oracle Technical", active: false },
             { name: "Oracle Sentiment", active: false },
             { name: "Oracle Macro", active: false },
           ].map((agent) => (
             <button
               key={agent.name}
               className={`flex w-full items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium transition-colors ${
                 agent.active ? "bg-primary text-primary-foreground" : "text-muted-foreground hover:bg-muted hover:text-foreground"
               }`}
             >
               <Bot className="h-4 w-4" />
               {agent.name}
             </button>
           ))}
        </div>
        <div className="mt-auto space-y-2">
           <Button variant="outline" className="w-full justify-start gap-2">
              <History className="h-4 w-4" />
              Chat History
           </Button>
           <Button variant="outline" className="w-full justify-start gap-2">
              <Bookmark className="h-4 w-4" />
              Saved Answers
           </Button>
        </div>
      </aside>

      {/* Center: Chat Window */}
      <div className="flex flex-1 flex-col overflow-hidden rounded-xl border border-border bg-card">
        {/* Messages */}
        <div className="flex-1 overflow-y-auto p-4 space-y-6">
           {messages.map((msg, i) => (
             <div key={i} className={`flex gap-4 ${msg.role === 'user' ? 'flex-row-reverse' : ''}`}>
                <div className={`flex h-8 w-8 shrink-0 select-none items-center justify-center rounded-full border shadow ${
                  msg.role === 'assistant' ? 'bg-primary/20 text-primary border-primary/20' : 'bg-secondary text-secondary-foreground border-border'
                }`}>
                  {msg.role === 'assistant' ? <Sparkles className="h-4 w-4" /> : <User className="h-4 w-4" />}
                </div>
                <div className={`max-w-[80%] rounded-2xl px-4 py-2 text-sm ${
                  msg.role === 'assistant' ? 'bg-muted/50 text-foreground' : 'bg-primary text-primary-foreground'
                }`}>
                   {msg.content}
                </div>
             </div>
           ))}
        </div>

        {/* Input */}
        <div className="border-t border-border p-4">
           <div className="relative">
              <Input
                placeholder="Ask Market Oracle about any stock, macro trend, or earnings..."
                className="pr-12 h-12 bg-muted/30 border-none"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSend()}
              />
              <Button
                size="sm"
                className="absolute right-1 top-1 h-10 w-10 p-0"
                onClick={handleSend}
              >
                <Send className="h-4 w-4" />
              </Button>
           </div>
           <p className="mt-2 text-center text-[10px] text-muted-foreground uppercase tracking-widest font-bold">
              AI-POWERED MARKET INTELLIGENCE • NOT FINANCIAL ADVICE
           </p>
        </div>
      </div>
    </div>
  )
}
