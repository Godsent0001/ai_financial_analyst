import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/Card"
import { Button } from "@/components/ui/Button"
import { Check, X, Zap, Crown, Star } from "lucide-react"

export default function PricingPage() {
  const plans = [
    {
      name: "Free",
      price: "$0",
      desc: "Perfect for exploring AI insights.",
      icon: Star,
      features: [
        { name: "AI Chat Access", included: true },
        { name: "Market Explorer", included: true },
        { name: "View AI Agents", included: true },
        { name: "Read AI Explanations", included: true },
        { name: "Signal Rooms", included: false },
        { name: "Deep AI Reports", included: false },
        { name: "Portfolio Simulation", included: false },
      ],
      buttonText: "Current Plan",
      variant: "outline"
    },
    {
      name: "Pro",
      price: "$20",
      desc: "For serious retail investors.",
      icon: Zap,
      features: [
        { name: "All Free features", included: true },
        { name: "Access Signal Rooms", included: true },
        { name: "Real-time AI Signals", included: true },
        { name: "AI Signal Reasoning", included: true },
        { name: "Market Alerts", included: true },
        { name: "Deep AI Reports", included: false },
        { name: "Portfolio Simulation", included: false },
      ],
      buttonText: "Upgrade to Pro",
      variant: "primary",
      popular: true
    },
    {
      name: "Elite",
      price: "$99",
      desc: "Institutional-grade tools.",
      icon: Crown,
      features: [
        { name: "Everything in Pro", included: true },
        { name: "Priority AI Signals", included: true },
        { name: "Deep AI Reports (PDF)", included: true },
        { name: "Custom AI Alerts", included: true },
        { name: "AI Portfolio Simulation", included: true },
        { name: "1-on-1 AI Training", included: true },
        { name: "API Access", included: true },
      ],
      buttonText: "Get Elite",
      variant: "outline"
    }
  ]

  return (
    <div className="space-y-12 py-8">
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-extrabold tracking-tight">Simple, Transparent Pricing</h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Choose the plan that fits your investing style. No hidden fees, cancel anytime.
        </p>
      </div>

      <div className="grid gap-8 lg:grid-cols-3">
        {plans.map((plan) => (
          <Card key={plan.name} className={`relative flex flex-col border-white/5 bg-secondary/50 ${plan.popular ? 'border-primary/50 shadow-2xl shadow-primary/10 scale-105 z-10' : ''}`}>
            {plan.popular && (
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full bg-primary px-4 py-1 text-xs font-bold text-primary-foreground uppercase tracking-widest">
                Most Popular
              </div>
            )}
            <CardHeader className="text-center">
              <div className="mx-auto mb-4 h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                <plan.icon className="h-6 w-6" />
              </div>
              <CardTitle className="text-2xl">{plan.name}</CardTitle>
              <div className="mt-4 flex items-baseline justify-center gap-1">
                <span className="text-5xl font-extrabold">{plan.price}</span>
                <span className="text-muted-foreground">/month</span>
              </div>
              <CardDescription className="mt-2">{plan.desc}</CardDescription>
            </CardHeader>
            <CardContent className="flex-1">
              <ul className="space-y-4">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-3 text-sm">
                    {feature.included ? (
                      <Check className="h-5 w-5 text-primary shrink-0" />
                    ) : (
                      <X className="h-5 w-5 text-muted-foreground/30 shrink-0" />
                    )}
                    <span className={feature.included ? 'text-foreground' : 'text-muted-foreground'}>
                      {feature.name}
                    </span>
                  </li>
                ))}
              </ul>
            </CardContent>
            <CardFooter className="pt-8">
               <Button variant={plan.variant as any} className="w-full h-12 text-lg font-bold">
                 {plan.buttonText}
               </Button>
            </CardFooter>
          </Card>
        ))}
      </div>

      <p className="text-center text-sm text-muted-foreground">
        Prices are in USD. Market Oracle is not financial advice. AI models are probabilistic.
      </p>
    </div>
  )
}
