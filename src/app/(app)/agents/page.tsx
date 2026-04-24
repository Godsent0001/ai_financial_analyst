"use client"

import { useState } from "react"
import { Button } from "@/components/ui/Button"
import { Input } from "@/components/ui/Input"
import { motion, AnimatePresence } from "framer-motion"
import {
  Zap,
  BarChart3,
  X,
  AlertTriangle,
  CheckCircle2
} from "lucide-react"
import Link from "next/link"

const agents = [
  {
    id: "sentinel",
    name: "Alpha Sentinel",
    idStr: "#1001",
    profit: "+12.4%",
    monthly: "3.2%",
    risk: "Low",
  },
  {
    id: "apex",
    name: "Apex Trend",
    idStr: "#1002",
    profit: "+24.8%",
    monthly: "5.8%",
    risk: "Med",
  },
  {
    id: "vector",
    name: "Vector Quant",
    idStr: "#1003",
    profit: "+18.2%",
    monthly: "4.1%",
    risk: "Low",
  },
  {
    id: "horizon",
    name: "Horizon Macro",
    idStr: "#1004",
    profit: "+21.5%",
    monthly: "4.9%",
    risk: "Med",
  },
]

export default function AgentsPage() {
  const [copyModalOpen, setCopyModalOpen] = useState(false)
  const [selectedAgent, setSelectedAgent] = useState<typeof agents[0] | null>(null)
  const [copyAmount, setCopyAmount] = useState("50")
  const [isConfirming, setIsConfirming] = useState(false)
  const [isCopied, setIsCopied] = useState(false)

  const openCopyModal = (agent: typeof agents[0]) => {
    setSelectedAgent(agent)
    setCopyModalOpen(true)
    setIsCopied(false)
    setIsConfirming(false)
  }

  const handleCopy = () => {
    setIsConfirming(true)
    setTimeout(() => {
      setIsConfirming(false)
      setIsCopied(true)
      setTimeout(() => setCopyModalOpen(false), 2000)
    }, 1500)
  }

  return (
    <div className="p-4 md:p-8 space-y-6">
      <div className="mb-8">
        <h1 className="text-3xl font-black italic uppercase italic tracking-tighter">AGENTS</h1>
      </div>

      <div className="grid gap-3">
        {agents.map((agent) => (
          <motion.div
            key={agent.id}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex flex-col sm:flex-row items-center justify-between p-4 bg-zinc-900/50 border border-white/5 rounded-2xl gap-4"
          >
            <div className="flex items-center gap-4 w-full sm:w-auto">
              <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0">
                <Zap className="h-5 w-5" />
              </div>
              <div className="flex-1">
                <h3 className="font-bold text-lg leading-tight">{agent.name}</h3>
                <div className="flex items-center gap-2 text-[10px] font-black text-zinc-500 uppercase tracking-widest">
                  <span>{agent.idStr}</span>
                  <span className="h-1 w-1 rounded-full bg-zinc-700"></span>
                  <span className={agent.risk === 'Low' ? 'text-primary' : 'text-amber-500'}>{agent.risk} RISK</span>
                </div>
              </div>
            </div>

            <div className="flex items-center justify-between sm:justify-end gap-6 w-full sm:w-auto px-2 sm:px-0 border-t sm:border-t-0 border-white/5 pt-3 sm:pt-0">
              <div className="text-center sm:text-right">
                <p className="text-[10px] font-bold text-zinc-500 uppercase">Return</p>
                <p className="text-lg font-black text-primary leading-tight">{agent.profit}</p>
              </div>
              <div className="flex items-center gap-2">
                <Button
                  className="font-bold h-10 px-6 rounded-full"
                  onClick={() => openCopyModal(agent)}
                >
                  Copy
                </Button>
                <Button variant="outline" className="h-10 w-10 p-0 rounded-full border-white/10" asChild>
                  <Link href={`/agents/${agent.id}`}>
                    <BarChart3 className="h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Copy Modal */}
      <AnimatePresence>
        {copyModalOpen && selectedAgent && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-black/80 backdrop-blur-md"
              onClick={() => !isConfirming && setCopyModalOpen(false)}
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="relative w-full max-w-sm bg-zinc-900 border border-white/10 rounded-[2rem] shadow-2xl overflow-hidden"
            >
              {!isCopied ? (
                <div className="p-8 space-y-6">
                  <div className="text-center">
                    <h3 className="text-2xl font-black italic uppercase">Copy Agent</h3>
                    <p className="text-zinc-500 font-bold text-sm">{selectedAgent.name}</p>
                  </div>

                  <div className="space-y-2">
                    <div className="relative">
                      <span className="absolute left-4 top-1/2 -translate-y-1/2 text-xl font-black text-zinc-600">$</span>
                      <Input
                        type="number"
                        value={copyAmount}
                        onChange={(e) => setCopyAmount(e.target.value)}
                        className="pl-10 h-14 bg-black border-white/10 text-xl font-black rounded-xl"
                        min="50"
                      />
                    </div>
                    <p className="text-[10px] font-bold text-zinc-500 text-center uppercase tracking-widest">MINIMUM $50</p>
                  </div>

                  <div className="space-y-4 pt-2">
                     <div className="flex justify-between text-xs font-bold uppercase tracking-widest">
                       <span className="text-zinc-500">Commission</span>
                       <span className="text-primary">20% of Profits</span>
                     </div>
                     <Button
                        className="w-full h-14 font-black text-lg rounded-xl uppercase italic"
                        disabled={isConfirming || parseInt(copyAmount) < 50}
                        onClick={handleCopy}
                      >
                        {isConfirming ? "Processing..." : "Confirm"}
                      </Button>
                      <button
                        onClick={() => setCopyModalOpen(false)}
                        className="w-full text-[10px] font-black text-zinc-600 uppercase tracking-widest hover:text-white transition-colors"
                      >
                        Cancel
                      </button>
                  </div>
                </div>
              ) : (
                <div className="p-12 text-center">
                  <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-full bg-primary/20 text-primary">
                    <CheckCircle2 className="h-8 w-8" />
                  </div>
                  <h3 className="text-2xl font-black italic uppercase mb-2">Success</h3>
                  <p className="text-zinc-500 font-bold text-sm">
                    Agent copied successfully.
                  </p>
                </div>
              )}
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  )
}
