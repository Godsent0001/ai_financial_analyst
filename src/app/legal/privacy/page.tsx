import Link from "next/link"
import { ArrowLeft } from "lucide-react"

export default function PrivacyPage() {
  return (
    <div className="container mx-auto max-w-3xl py-12 px-4">
      <Link href="/" className="mb-8 inline-flex items-center text-sm text-muted-foreground hover:text-primary transition-colors">
        <ArrowLeft className="mr-2 h-4 w-4" /> Back to Home
      </Link>
      <h1 className="text-4xl font-extrabold tracking-tight mb-8">Privacy Policy</h1>
      <div className="prose prose-invert space-y-6 text-muted-foreground">
        <section>
          <h2 className="text-xl font-bold text-foreground">1. Data Collection</h2>
          <p>We collect information you provide directly to us, such as your email address when you create an account, and data about your usage of our platform.</p>
        </section>
        <section>
          <h2 className="text-xl font-bold text-foreground">2. Use of Information</h2>
          <p>We use your information to provide, maintain, and improve our services, communicate with you, and personalize your experience with Market Oracle.</p>
        </section>
        <section>
          <h2 className="text-xl font-bold text-foreground">3. Security</h2>
          <p>We take reasonable measures to help protect information about you from loss, theft, misuse, and unauthorized access, disclosure, alteration, and destruction.</p>
        </section>
        <section>
          <h2 className="text-xl font-bold text-foreground">4. No Selling of Data</h2>
          <p>We do not sell your personal data to third parties. Your financial interests and privacy are paramount to us.</p>
        </section>
      </div>
      <div className="mt-12 pt-8 border-t border-border text-center text-sm text-muted-foreground">
        Last updated: February 2024
      </div>
    </div>
  )
}
