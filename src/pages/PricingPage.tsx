
import { Check, Zap, Crown, ArrowRight, ShieldCheck, Sparkles } from 'lucide-react';

const plans = [
  {
    name: "Free",
    price: "$0",
    desc: "Perfect for beginners to explore the Oracle's basic insights.",
    features: [
      "AI Chat (Limited)",
      "Market Explorer",
      "View AI Agents",
      "Read AI explanations",
      "View leaderboard"
    ],
    missing: [
      "No Signal Rooms",
      "No Real-time Alerts",
      "No Portfolio Simulation"
    ],
    button: "Current Plan",
    style: "bg-card border-border",
    icon: Zap
  },
  {
    name: "Pro",
    price: "$20",
    period: "/mo",
    desc: "Institutional signals for serious retail traders.",
    features: [
      "All Free features",
      "Access Signal Rooms",
      "Real-time AI signals",
      "AI signal explanations",
      "Market alerts",
      "Priority AI Chat"
    ],
    button: "Upgrade to Pro",
    style: "bg-primary/5 border-primary/30",
    popular: true,
    icon: Sparkles
  },
  {
    name: "Elite",
    price: "$50",
    period: "/mo",
    desc: "The ultimate edge for institutional-grade portfolio management.",
    features: [
      "Everything in Pro",
      "Priority AI signals",
      "Deep AI reports",
      "Custom alerts",
      "AI portfolio simulation",
      "Downloadable AI reports"
    ],
    button: "Get Elite Access",
    style: "bg-white/[0.02] border-white/10",
    icon: Crown
  }
];

const PricingPage = () => {
  return (
    <div className="space-y-12 pb-20">
      <div className="text-center max-w-2xl mx-auto space-y-4">
        <h1 className="text-4xl font-black">Choose your <span className="text-primary italic">Edge.</span></h1>
        <p className="text-gray-500">
          Unlock institutional-grade AI models and join the top 1% of retail investors.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {plans.map((plan) => (
          <div
            key={plan.name}
            className={`rounded-[40px] border p-10 flex flex-col relative overflow-hidden group hover:translate-y-[-8px] transition-all duration-500 ${plan.style}`}
          >
            {plan.popular && (
              <div className="absolute top-6 right-8">
                 <span className="bg-primary text-dark text-[10px] font-black uppercase tracking-[0.2em] px-3 py-1 rounded-full shadow-[0_0_20px_rgba(0,255,156,0.5)]">
                   Most Popular
                 </span>
              </div>
            )}

            <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-8 ${plan.name === 'Pro' ? 'bg-primary text-dark' : 'bg-white/5 text-gray-400'}`}>
               <plan.icon className="w-8 h-8 fill-current" />
            </div>

            <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
            <div className="flex items-baseline gap-1 mb-6">
               <span className="text-5xl font-black tracking-tighter">{plan.price}</span>
               <span className="text-gray-500 font-bold">{plan.period}</span>
            </div>
            <p className="text-sm text-gray-500 mb-10 leading-relaxed">
               {plan.desc}
            </p>

            <div className="space-y-5 flex-1 mb-10">
               {plan.features.map((feature, i) => (
                 <div key={i} className="flex items-center gap-3">
                    <div className={`w-5 h-5 rounded-full flex items-center justify-center shrink-0 ${plan.name === 'Pro' ? 'bg-primary/20 text-primary' : 'bg-white/5 text-gray-500'}`}>
                       <Check className="w-3 h-3" />
                    </div>
                    <span className="text-sm font-medium text-gray-300">{feature}</span>
                 </div>
               ))}
               {plan.missing?.map((feature, i) => (
                 <div key={i} className="flex items-center gap-3 opacity-30">
                    <div className="w-5 h-5 rounded-full flex items-center justify-center shrink-0 bg-white/5 text-gray-500">
                       <div className="w-1.5 h-1.5 bg-gray-500 rounded-full"></div>
                    </div>
                    <span className="text-sm font-medium text-gray-500 line-through">{feature}</span>
                 </div>
               ))}
            </div>

            <button className={`w-full py-5 rounded-2xl font-black text-lg transition-all flex items-center justify-center gap-2 ${
              plan.name === 'Pro'
                ? 'bg-primary text-dark hover:bg-secondary shadow-[0_0_30px_rgba(0,255,156,0.2)]'
                : plan.name === 'Free'
                ? 'bg-white/5 text-gray-500 cursor-default'
                : 'bg-white/10 text-white hover:bg-white/20'
            }`}>
              {plan.button} {plan.name !== 'Free' && <ArrowRight className="w-5 h-5" />}
            </button>
          </div>
        ))}
      </div>

      {/* Trust Banner */}
      <div className="max-w-4xl mx-auto mt-20 p-8 bg-card border border-border rounded-[32px] flex flex-col md:flex-row items-center justify-between gap-8">
         <div className="flex items-center gap-6">
            <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center border border-primary/20">
               <ShieldCheck className="text-primary w-6 h-6" />
            </div>
            <div>
               <h4 className="font-bold text-lg">Secure Institutional Processing</h4>
               <p className="text-sm text-gray-500">Encrypted payments via Stripe. Cancel anytime with one click.</p>
            </div>
         </div>
         <div className="flex -space-x-4">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="w-10 h-10 rounded-full border-2 border-card bg-dark flex items-center justify-center text-[10px] font-bold text-gray-500">
                 USER
              </div>
            ))}
            <div className="w-10 h-10 rounded-full border-2 border-card bg-primary text-dark flex items-center justify-center text-[10px] font-bold">
               +12K
            </div>
         </div>
      </div>
    </div>
  );
};

export default PricingPage;
