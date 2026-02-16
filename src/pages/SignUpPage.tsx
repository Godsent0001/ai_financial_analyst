
import { Link, useNavigate } from 'react-router-dom';
import { Zap, Mail, Lock, User, ArrowRight, ShieldCheck } from 'lucide-react';

const SignUpPage = () => {
  const navigate = useNavigate();

  const handleSignUp = (e: React.FormEvent) => {
    e.preventDefault();
    navigate('/dashboard');
  };

  return (
    <div className="min-h-screen bg-dark flex flex-col md:flex-row">
      {/* Left Side - Form */}
      <div className="flex-1 flex items-center justify-center p-8 order-2 md:order-1">
        <div className="w-full max-w-sm">
          <div className="flex items-center gap-2 mb-12 md:hidden">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
              <Zap className="text-dark w-5 h-5 fill-current" />
            </div>
            <span className="font-bold text-xl tracking-tight text-white">Market<span className="text-primary">Oracle</span></span>
          </div>

          <div className="mb-10">
            <h2 className="text-3xl font-bold text-white mb-2">Create Account</h2>
            <p className="text-gray-500">No credit card required. Upgrade anytime.</p>
          </div>

          <form onSubmit={handleSignUp} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-400 mb-2">Full Name</label>
              <div className="relative">
                <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-600" />
                <input
                  type="text"
                  required
                  placeholder="Alex Rivera"
                  className="w-full bg-white/5 border border-white/10 rounded-xl py-3 pl-10 pr-4 focus:outline-none focus:border-primary/50 transition-all text-white"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-400 mb-2">Email Address</label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-600" />
                <input
                  type="email"
                  required
                  placeholder="alex@example.com"
                  className="w-full bg-white/5 border border-white/10 rounded-xl py-3 pl-10 pr-4 focus:outline-none focus:border-primary/50 transition-all text-white"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-400 mb-2">Password</label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-600" />
                <input
                  type="password"
                  required
                  placeholder="••••••••"
                  className="w-full bg-white/5 border border-white/10 rounded-xl py-3 pl-10 pr-4 focus:outline-none focus:border-primary/50 transition-all text-white"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-400 mb-2">Confirm Password</label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-600" />
                <input
                  type="password"
                  required
                  placeholder="••••••••"
                  className="w-full bg-white/5 border border-white/10 rounded-xl py-3 pl-10 pr-4 focus:outline-none focus:border-primary/50 transition-all text-white"
                />
              </div>
            </div>

            <div className="flex items-center gap-2 pt-2">
               <input type="checkbox" required className="w-4 h-4 accent-primary" />
               <span className="text-xs text-gray-500">I agree to the <Link to="/terms" className="text-primary hover:underline">Terms</Link> and <Link to="/privacy" className="text-primary hover:underline">Privacy Policy</Link></span>
            </div>

            <button
              type="submit"
              className="w-full bg-primary text-dark py-4 rounded-xl font-black text-lg hover:bg-secondary transition-all flex items-center justify-center gap-2 mt-4"
            >
              Start Free <ArrowRight className="w-5 h-5" />
            </button>
          </form>

          <p className="mt-8 text-center text-gray-500 text-sm">
            Already have an account? <Link to="/login" className="text-primary font-bold hover:underline">Login</Link>
          </p>
        </div>
      </div>

      {/* Right Side - Branding/Info */}
      <div className="hidden md:flex flex-1 bg-white/[0.02] border-l border-white/5 items-center justify-center p-12 relative overflow-hidden order-2">
        <div className="max-w-md relative z-10">
          <div className="space-y-12">
             {[
               { icon: Zap, title: "Instant AI Signals", desc: "Get real-time Buy/Sell alerts on your favorite tickers." },
               { icon: ShieldCheck, title: "Risk Management", desc: "Understand the downside before you enter a trade." },
               { icon: User, title: "Custom Watchlists", desc: "Track the performance of AI agents on your specific assets." }
             ].map((item, i) => (
               <div key={i} className="flex gap-6">
                 <div className="w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center shrink-0 border border-white/10">
                   <item.icon className="text-primary w-6 h-6" />
                 </div>
                 <div>
                   <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                   <p className="text-gray-400 leading-relaxed">{item.desc}</p>
                 </div>
               </div>
             ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUpPage;
