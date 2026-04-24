"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import {
  CreditCard,
  Building2,
  Wallet,
  ArrowRight,
  CheckCircle2,
  AlertCircle,
  Clock,
  ShieldCheck
} from "lucide-react"
import { Button } from "@/components/ui/Button"
import { Input } from "@/components/ui/Input"
import { Card, CardContent } from "@/components/ui/Card"

export default function DepositPage() {
  const [amount, setAmount] = useState("")
  const [method, setMethod] = useState("card")
  const [isProcessing, setIsProcessing] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)

  const handleDeposit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!amount || parseFloat(amount) < 50) return

    setIsProcessing(true)
    // Simulate API call
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
          <h1 className="text-3xl font-bold mb-4">Deposit Successful!</h1>
          <p className="text-muted-foreground mb-8">
            Your funds are being processed and will be available in your account shortly.
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
        <h1 className="text-3xl font-bold mb-2">Deposit Funds</h1>
        <p className="text-muted-foreground">Add capital to your account to start copy trading.</p>
      </div>

      <div className="grid gap-8 lg:grid-cols-3">
        <div className="lg:col-span-2 space-y-8">
          <Card>
            <CardContent className="p-6">
              <form onSubmit={handleDeposit} className="space-y-6">
                <div>
                  <label className="text-sm font-medium mb-2 block text-muted-foreground uppercase tracking-wider">
                    Select Amount (Min $50)
                  </label>
                  <div className="relative">
                    <span className="absolute left-4 top-1/2 -translate-y-1/2 text-2xl font-bold text-muted-foreground">$</span>
                    <Input
                      type="number"
                      placeholder="0.00"
                      className="pl-10 text-2xl font-bold h-16 bg-muted/30 border-2 focus:border-primary transition-all"
                      value={amount}
                      onChange={(e) => setAmount(e.target.value)}
                      min="50"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="text-sm font-medium mb-4 block text-muted-foreground uppercase tracking-wider">
                    Payment Method
                  </label>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {[
                      { id: "card", name: "Card", icon: CreditCard },
                      { id: "bank", name: "Bank Transfer", icon: Building2 },
                      { id: "crypto", name: "Crypto", icon: Wallet }
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
                  disabled={isProcessing || !amount || parseFloat(amount) < 50}
                >
                  {isProcessing ? "Processing..." : `Deposit $${amount || '0.00'}`}
                </Button>
              </form>
            </CardContent>
          </Card>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 rounded-xl border border-border bg-muted/20 flex gap-4 items-start">
              <Clock className="h-5 w-5 text-primary shrink-0 mt-0.5" />
              <div>
                <h4 className="font-bold text-sm">Instant Processing</h4>
                <p className="text-xs text-muted-foreground mt-1">Most deposits are credited to your account instantly.</p>
              </div>
            </div>
            <div className="p-4 rounded-xl border border-border bg-muted/20 flex gap-4 items-start">
              <ShieldCheck className="h-5 w-5 text-primary shrink-0 mt-0.5" />
              <div>
                <h4 className="font-bold text-sm">Secure Transaction</h4>
                <p className="text-xs text-muted-foreground mt-1">Your payment is encrypted and protected by bank-level security.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <Card className="bg-primary/5 border-primary/20">
            <CardContent className="p-6">
              <h3 className="font-bold text-lg mb-4">Deposit Details</h3>
              <div className="space-y-4">
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Minimum Deposit</span>
                  <span className="font-medium">$50.00</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Platform Fee</span>
                  <span className="font-medium text-primary">0%</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Processing Time</span>
                  <span className="font-medium">Instant</span>
                </div>
                <div className="pt-4 border-t border-border flex justify-between items-center">
                  <span className="font-bold">Total to Pay</span>
                  <span className="text-xl font-bold">${amount || '0.00'}</span>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="p-4 rounded-xl border border-amber-500/20 bg-amber-500/5 flex gap-3 items-start">
            <AlertCircle className="h-5 w-5 text-amber-500 shrink-0" />
            <p className="text-xs text-amber-200/70">
              Please ensure the payment name matches your account name to avoid delays.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
