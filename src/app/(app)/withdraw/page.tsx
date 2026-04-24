"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import {
  ArrowDownCircle,
  Building2,
  Wallet,
  CheckCircle2,
  AlertCircle,
  Clock,
  Info
} from "lucide-react"
import { Button } from "@/components/ui/Button"
import { Input } from "@/components/ui/Input"
import { Card, CardContent } from "@/components/ui/Card"

export default function WithdrawPage() {
  const [amount, setAmount] = useState("")
  const [method, setMethod] = useState("bank")
  const [isProcessing, setIsProcessing] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)

  const availableBalance = 1250.45
  const pendingProfits = 342.10

  const handleWithdraw = (e: React.FormEvent) => {
    e.preventDefault()
    if (!amount || parseFloat(amount) < 10 || parseFloat(amount) > availableBalance) return

    setIsProcessing(true)
    setTimeout(() => {
      setIsProcessing(false)
      setIsSuccess(true)
    }, 2000)
  }

  if (isSuccess) {
    return (
      <div className="flex h-[calc(100vh-64px)] items-center justify-center p-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="max-w-md w-full text-center"
        >
          <div className="mb-6 inline-flex h-20 w-20 items-center justify-center rounded-full bg-primary/20 text-primary">
            <CheckCircle2 className="h-10 w-10" />
          </div>
          <h1 className="text-3xl font-bold mb-4">Withdrawal Requested</h1>
          <p className="text-muted-foreground mb-8">
            Your withdrawal request has been received and is being processed. Funds typically arrive within 1-3 business days.
          </p>
          <Button className="w-full" onClick={() => window.location.href = '/dashboard'}>
            Go to Dashboard
          </Button>
        </motion.div>
      </div>
    )
  }

  return (
    <div className="max-w-4xl mx-auto py-8 px-4">
      <div className="mb-10">
        <h1 className="text-3xl font-bold mb-2">Withdraw Funds</h1>
        <p className="text-muted-foreground">Transfer your capital and profits to your personal account.</p>
      </div>

      <div className="grid gap-8 lg:grid-cols-3">
        <div className="lg:col-span-2 space-y-8">
          <Card>
            <CardContent className="p-6">
              <form onSubmit={handleWithdraw} className="space-y-6">
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="p-4 rounded-xl bg-muted/30 border border-border">
                    <p className="text-xs text-muted-foreground uppercase mb-1">Available Balance</p>
                    <p className="text-2xl font-bold">${availableBalance.toLocaleString()}</p>
                  </div>
                  <div className="p-4 rounded-xl bg-muted/30 border border-border">
                    <p className="text-xs text-muted-foreground uppercase mb-1">Pending Profits</p>
                    <p className="text-2xl font-bold text-primary">${pendingProfits.toLocaleString()}</p>
                  </div>
                </div>

                <div>
                  <label className="text-sm font-medium mb-2 block text-muted-foreground uppercase tracking-wider">
                    Withdrawal Amount
                  </label>
                  <div className="relative">
                    <span className="absolute left-4 top-1/2 -translate-y-1/2 text-2xl font-bold text-muted-foreground">$</span>
                    <Input
                      type="number"
                      placeholder="0.00"
                      className="pl-10 text-2xl font-bold h-16 bg-muted/30 border-2 focus:border-primary transition-all"
                      value={amount}
                      onChange={(e) => setAmount(e.target.value)}
                      max={availableBalance}
                      required
                    />
                  </div>
                  <div className="flex justify-between mt-2">
                    <p className="text-xs text-muted-foreground">Min withdrawal: $10.00</p>
                    <button
                      type="button"
                      onClick={() => setAmount(availableBalance.toString())}
                      className="text-xs text-primary font-bold hover:underline"
                    >
                      Withdraw Max
                    </button>
                  </div>
                </div>

                <div>
                  <label className="text-sm font-medium mb-4 block text-muted-foreground uppercase tracking-wider">
                    Destination
                  </label>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {[
                      { id: "bank", name: "Bank Account", icon: Building2 },
                      { id: "crypto", name: "Crypto Wallet", icon: Wallet }
                    ].map((m) => (
                      <button
                        key={m.id}
                        type="button"
                        onClick={() => setMethod(m.id)}
                        className={`flex flex-col items-center justify-center p-4 rounded-xl border-2 transition-all ${
                          method === m.id
                          ? "border-primary bg-primary/10 text-primary"
                          : "border-border hover:border-border/80 text-muted-foreground"
                        }`}
                      >
                        <m.icon className="h-6 w-6 mb-2" />
                        <span className="text-sm font-bold">{m.name}</span>
                      </button>
                    ))}
                  </div>
                </div>

                <Button
                  type="submit"
                  className="w-full h-14 text-lg font-bold"
                  disabled={isProcessing || !amount || parseFloat(amount) < 10 || parseFloat(amount) > availableBalance}
                >
                  {isProcessing ? "Processing..." : `Withdraw $${amount || '0.00'}`}
                </Button>
              </form>
            </CardContent>
          </Card>

          <div className="p-4 rounded-xl border border-blue-500/20 bg-blue-500/5 flex gap-3 items-start">
            <Info className="h-5 w-5 text-blue-500 shrink-0 mt-0.5" />
            <p className="text-sm text-blue-200/70">
              Profits are calculated after our 20% performance commission. The "Available Balance" shown already accounts for this.
            </p>
          </div>
        </div>

        <div className="space-y-6">
          <Card>
            <CardContent className="p-6">
              <h3 className="font-bold text-lg mb-4">Summary</h3>
              <div className="space-y-4">
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Processing Fee</span>
                  <span className="font-medium">Free</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Estimated Arrival</span>
                  <span className="font-medium">1-3 Days</span>
                </div>
                <div className="pt-4 border-t border-border flex justify-between items-center text-lg">
                  <span className="font-bold">Total Payout</span>
                  <span className="font-bold text-primary">${amount || '0.00'}</span>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="p-4 rounded-xl border border-border bg-muted/20">
            <h4 className="font-bold text-sm mb-2 flex items-center gap-2">
              <Clock className="h-4 w-4 text-primary" />
              Recent Activity
            </h4>
            <div className="space-y-3">
              <div className="flex justify-between items-center text-xs">
                <div>
                  <p className="font-medium">Bank Withdrawal</p>
                  <p className="text-muted-foreground">Oct 12, 2023</p>
                </div>
                <span className="text-green-500 font-bold">$450.00</span>
              </div>
              <div className="flex justify-between items-center text-xs opacity-50">
                <div>
                  <p className="font-medium">Bank Withdrawal</p>
                  <p className="text-muted-foreground">Sep 28, 2023</p>
                </div>
                <span className="text-green-500 font-bold">$200.00</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
