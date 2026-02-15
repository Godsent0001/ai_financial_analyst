import Link from "next/link"
import { Button } from "@/components/ui/Button"
import { ArrowLeft } from "lucide-react"

export default function TermsPage() {
  return (
    <div className="container mx-auto max-w-3xl py-12 px-4">
      <Link href="/" className="mb-8 inline-flex items-center text-sm text-muted-foreground hover:text-primary transition-colors">
        <ArrowLeft className="mr-2 h-4 w-4" /> Back to Home
      </Link>
      <h1 className="text-4xl font-extrabold tracking-tight mb-8">Terms of Service</h1>
      <div className="prose prose-invert space-y-6 text-muted-foreground">
        <section>
          <h2 className="text-xl font-bold text-foreground">1. Acceptance of Terms</h2>
          <p>By accessing and using Market Oracle, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use the platform.</p>
        </section>
        <section>
          <h2 className="text-xl font-bold text-foreground">2. Not Financial Advice</h2>
          <p>Market Oracle provides AI-powered market intelligence for informational purposes only. We do not provide financial, investment, legal, or tax advice. All trading decisions are made solely by the user.</p>
        </section>
        <section>
          <h2 className="text-xl font-bold text-foreground">3. No Auto-Trading</h2>
          <p>Market Oracle does not trade on behalf of users. We do not have access to your brokerage accounts or funds. You are responsible for executing your own trades on third-party platforms.</p>
        </section>
        <section>
          <h2 className="text-xl font-bold text-foreground">4. Accuracy of Information</h2>
          <p>While we strive for accuracy, AI predictions are probabilistic and based on historical data. Past performance is not indicative of future results. Market Oracle is not responsible for any financial losses incurred.</p>
        </section>
        <section>
          <h2 className="text-xl font-bold text-foreground">5. Subscription and Billing</h2>
          <p>Subscription fees are billed in advance. You may cancel your subscription at any time through the settings page. Refunds are handled on a case-by-case basis according to our refund policy.</p>
        </section>
      </div>
      <div className="mt-12 pt-8 border-t border-border text-center text-sm text-muted-foreground">
        Last updated: February 2024
      </div>
    </div>
  )
}
