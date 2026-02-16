
import { Link } from 'react-router-dom';
import { ArrowLeft, AlertTriangle } from 'lucide-react';

const RiskDisclosure = () => {
  return (
    <div className="bg-dark min-h-screen text-white p-8 md:p-20">
      <div className="max-w-4xl mx-auto">
        <Link to="/" className="inline-flex items-center gap-2 text-gray-500 hover:text-primary transition-colors mb-12 group">
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" /> Back to Home
        </Link>

        <div className="flex items-center gap-4 mb-10">
           <div className="w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center">
              <AlertTriangle className="text-primary w-6 h-6" />
           </div>
           <h1 className="text-4xl font-black">Risk <span className="text-primary italic">Disclosure</span></h1>
        </div>

        <div className="prose prose-invert max-w-none space-y-8 text-gray-400">
           <div className="bg-red-500/10 border border-red-500/20 p-8 rounded-3xl mb-12">
              <p className="text-red-500 font-bold mb-0">Trading stocks, options, and cryptocurrencies involves significant risk of loss and is not suitable for every investor. The valuation of financial instruments may fluctuate, and as a result, clients may lose more than their original investment.</p>
           </div>

           <section>
              <h2 className="text-xl font-bold text-white mb-4">1. Probabilistic AI Models</h2>
              <p>Market Oracle uses probabilistic AI models. These models provide predictions based on historical data and current market sentiment. They are not guaranteed to be accurate and should not be the sole basis for any investment decision.</p>
           </section>

           <section>
              <h2 className="text-xl font-bold text-white mb-4">2. Market Volatility</h2>
              <p>Highly volatile markets, such as cryptocurrency or penny stocks, carry extreme risk. Rapid price movements can occur in seconds, often triggered by macro events that AI models may not fully anticipate.</p>
           </section>

           <section>
              <h2 className="text-xl font-bold text-white mb-4">3. No Guarantees</h2>
              <p>Past performance is not indicative of future results. No AI agent or strategy can guarantee profits. You should only trade with money you can afford to lose.</p>
           </section>

           <section>
              <h2 className="text-xl font-bold text-white mb-4">4. Independent Research</h2>
              <p>We strongly recommend that users perform their own independent research and consult with a certified financial advisor before making any investment.</p>
           </section>
        </div>

        <div className="mt-20 pt-10 border-t border-white/5 text-sm text-gray-600">
           Last updated: February 14, 2025
        </div>
      </div>
    </div>
  );
};

export default RiskDisclosure;
