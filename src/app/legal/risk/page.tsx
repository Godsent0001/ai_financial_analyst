import Link from "next/link"
import { ArrowLeft, AlertTriangle } from "lucide-react"

export default function RiskDisclosurePage() {
  return (
    <div className="container mx-auto max-w-3xl py-12 px-4">
      <Link href="/" className="mb-8 inline-flex items-center text-sm text-muted-foreground hover:text-primary transition-colors">
        <ArrowLeft className="mr-2 h-4 w-4" /> Back to Home
      </Link>

      <div className="flex items-center gap-4 mb-8">
         <div className="rounded-full bg-red-500/10 p-3 text-red-500">
            <AlertTriangle className="h-8 w-8" />
         </div>
         <h1 className="text-4xl font-extrabold tracking-tight">Risk Disclosure</h1>
      </div>

      <div className="prose prose-invert space-y-6 text-muted-foreground bg-red-500/5 p-8 rounded-2xl border border-red-500/10">
        <p className="font-bold text-foreground">IMPORTANT: PLEASE READ CAREFULLY</p>

        <section>
          <h2 className="text-xl font-bold text-foreground uppercase tracking-wider mb-2">High Risk Investment</h2>
          <p>Trading stocks, options, futures, and cryptocurrencies involves substantial risk and is not suitable for every investor. The valuation of financial instruments may fluctuate, and as a result, clients may lose more than their original investment.</p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-foreground uppercase tracking-wider mb-2">AI Model Limitations</h2>
          <p>Market Oracle uses advanced AI algorithms to generate market intelligence. However, these models are probabilistic and based on historical data patterns. They cannot account for unprecedented market events (&quot;Black Swan&quot; events), sudden geopolitical shifts, or manipulation.</p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-foreground uppercase tracking-wider mb-2">No Guarantees</h2>
          <p>There is no guarantee that the signals, analysis, or predictions provided by Market Oracle will result in profit. Use of our services is at your own risk. You should only invest capital that you can afford to lose.</p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-foreground uppercase tracking-wider mb-2">Independent Decision Making</h2>
          <p>Market Oracle is an information provider, not a financial advisor. You are encouraged to perform your own due diligence and consult with a licensed financial professional before making any investment decisions.</p>
        </section>
      </div>
      <div className="mt-12 pt-8 border-t border-border text-center text-sm text-muted-foreground">
        Last updated: February 2024
      </div>
    </div>
  )
}
