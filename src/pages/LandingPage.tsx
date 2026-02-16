
import { Link } from 'react-router-dom';
import { Zap, Shield, MessageSquare, ArrowRight, Globe, Check } from 'lucide-react';

const LandingPage = () => {
  return (
    <div className="bg-dark min-h-screen text-white overflow-hidden">
      {/* Navbar */}
      <nav className="flex items-center justify-between px-8 py-6 max-w-7xl mx-auto border-b border-white/5">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
            <Zap className="text-dark w-6 h-6 fill-current" />
          </div>
          <span className="font-bold text-2xl tracking-tight">Market<span className="text-primary">Oracle</span></span>
        </div>
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-400">
          <a href="#how-it-works" className="hover:text-white transition-colors">How it Works</a>
          <a href="#features" className="hover:text-white transition-colors">Features</a>
          <a href="#pricing" className="hover:text-white transition-colors">Pricing</a>
        </div>
        <div className="flex items-center gap-4">
          <Link to="/login" className="text-sm font-medium hover:text-primary transition-colors">Login</Link>
          <Link to="/signup" className="bg-primary text-dark px-6 py-2 rounded-full font-bold text-sm hover:bg-secondary transition-all transform hover:scale-105">
            Start Free
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-20 pb-32 px-8 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-primary/10 blur-[120px] rounded-full -z-10 opacity-50"></div>
        <div className="max-w-5xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-8 animate-fade-in">
            <span className="w-2 h-2 bg-primary rounded-full animate-pulse"></span>
            <span className="text-xs font-bold uppercase tracking-widest text-primary">Next Gen Market Intelligence</span>
          </div>
          <h1 className="text-6xl md:text-8xl font-black mb-8 leading-[1.1] tracking-tight">
            See the market <br />
            <span className="text-primary">before it moves.</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto mb-12 leading-relaxed">
            Market Oracle uses institutional-grade AI models to predict stock market movements and explain them in simple language for everyday investors.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/signup" className="w-full sm:w-auto px-10 py-4 bg-primary text-dark rounded-xl font-black text-lg hover:bg-secondary transition-all transform hover:-translate-y-1 shadow-[0_0_20px_rgba(0,255,156,0.3)] flex items-center justify-center gap-2">
              Start Your Free Trial <ArrowRight className="w-5 h-5" />
            </Link>
            <Link to="/pricing" className="w-full sm:w-auto px-10 py-4 bg-white/5 border border-white/10 rounded-xl font-bold text-lg hover:bg-white/10 transition-all flex items-center justify-center">
              View Pricing
            </Link>
          </div>
        </div>
      </section>

      {/* How it Works */}
      <section id="how-it-works" className="py-24 px-8 border-t border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-bold mb-4">The Oracle Advantage</h2>
            <p className="text-gray-400">Institutional grade insights, democratized for all.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                step: "01",
                title: "AI Analyzes Markets",
                desc: "Our models ingest petabytes of institutional data, technical indicators, and news sentiment in real-time.",
                icon: Globe
              },
              {
                step: "02",
                title: "AI Predicts & Explains",
                desc: "We generate high-confidence Buy/Sell/Hold signals with transparent reasoning you can actually understand.",
                icon: MessageSquare
              },
              {
                step: "03",
                title: "You Decide",
                desc: "No auto-trading. You stay in full control of your portfolio with the best intelligence by your side.",
                icon: Shield
              }
            ].map((item) => (
              <div key={item.step} className="bg-card border border-border p-8 rounded-3xl relative group hover:border-primary/30 transition-all">
                <div className="text-5xl font-black text-white/5 absolute top-6 right-8 group-hover:text-primary/10 transition-colors">{item.step}</div>
                <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <item.icon className="text-primary w-7 h-7" />
                </div>
                <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
                <p className="text-gray-400 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Preview */}
      <section id="features" className="py-24 bg-white/[0.02] border-y border-white/5">
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-5xl font-bold mb-8 leading-tight">AI Chat: Your Personal <span className="text-primary">Quant.</span></h2>
              <div className="space-y-6">
                {[
                  { title: "Ask Anything", desc: "Ask about stocks, macro trends, or technical setups." },
                  { title: "Simple English", desc: "Complex financial data explained in plain language." },
                  { title: "Real-time Data", desc: "Integrated with live market feeds for up-to-the-minute analysis." }
                ].map((f, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="mt-1 flex-shrink-0 w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center">
                      <Check className="text-primary w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="font-bold text-lg mb-1">{f.title}</h4>
                      <p className="text-gray-400">{f.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-card border border-border rounded-3xl p-6 shadow-2xl relative">
               <div className="flex items-center gap-3 mb-6 p-3 bg-white/5 rounded-xl border border-white/10">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  <div className="ml-auto text-[10px] text-gray-500 font-mono tracking-widest uppercase">MARKET_ORACLE_OS</div>
               </div>
               <div className="space-y-4">
                  <div className="bg-white/5 rounded-xl p-4 ml-8">
                    <p className="text-sm text-gray-400">Should I buy NVDA today?</p>
                  </div>
                  <div className="bg-primary/10 border border-primary/20 rounded-xl p-4 mr-8">
                    <p className="text-sm text-primary font-bold mb-2 flex items-center gap-2">
                       <Zap className="w-3 h-3 fill-current" /> Market Oracle
                    </p>
                    <p className="text-sm leading-relaxed">
                      NVDA shows high institutional accumulation. Technically, it's holding the 21-day EMA. Our model predicts a 74% probability of a breakout above $140 resistance in the next 5 sessions.
                    </p>
                  </div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-20 px-8 border-t border-white/5">
        <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-12">
          <div className="col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <Zap className="text-dark w-5 h-5 fill-current" />
              </div>
              <span className="font-bold text-xl tracking-tight">Market<span className="text-primary">Oracle</span></span>
            </div>
            <p className="text-gray-500 max-w-sm mb-6">
              Empowering retail investors with the tools of the giants. Predictive AI for the modern era.
            </p>
          </div>
          <div>
            <h4 className="font-bold mb-6">Product</h4>
            <ul className="space-y-4 text-gray-500 text-sm">
              <li><Link to="/signup" className="hover:text-primary">Signals</Link></li>
              <li><Link to="/agents" className="hover:text-primary">AI Agents</Link></li>
              <li><Link to="/pricing" className="hover:text-primary">Pricing</Link></li>
              <li><Link to="/market" className="hover:text-primary">Market Explorer</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-6">Legal</h4>
            <ul className="space-y-4 text-gray-500 text-sm">
              <li><Link to="/terms" className="hover:text-primary">Terms of Service</Link></li>
              <li><Link to="/privacy" className="hover:text-primary">Privacy Policy</Link></li>
              <li><Link to="/risk" className="hover:text-primary">Risk Disclosure</Link></li>
            </ul>
          </div>
        </div>
        <div className="max-w-7xl mx-auto mt-20 pt-8 border-t border-white/5 text-center text-sm text-gray-600">
          © 2025 Market Oracle AI. All rights reserved.
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
