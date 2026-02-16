
import { Link } from 'react-router-dom';
import { ArrowLeft, Scale } from 'lucide-react';

const Terms = () => {
  return (
    <div className="bg-dark min-h-screen text-white p-8 md:p-20">
      <div className="max-w-4xl mx-auto">
        <Link to="/" className="inline-flex items-center gap-2 text-gray-500 hover:text-primary transition-colors mb-12 group">
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" /> Back to Home
        </Link>

        <div className="flex items-center gap-4 mb-10">
           <div className="w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center">
              <Scale className="text-primary w-6 h-6" />
           </div>
           <h1 className="text-4xl font-black">Terms of <span className="text-primary italic">Service</span></h1>
        </div>

        <div className="prose prose-invert max-w-none space-y-8 text-gray-400">
           <section>
              <h2 className="text-xl font-bold text-white mb-4">1. Acceptance of Terms</h2>
              <p>By accessing or using Market Oracle AI, you agree to be bound by these Terms of Service. If you do not agree, do not use our services.</p>
           </section>

           <section>
              <h2 className="text-xl font-bold text-white mb-4">2. Description of Service</h2>
              <p>Market Oracle provides AI-powered market intelligence and predictive data. We do NOT provide financial advice. Our platform is for informational and educational purposes only.</p>
           </section>

           <section>
              <h2 className="text-xl font-bold text-white mb-4">3. No Financial Advice</h2>
              <p>The contents of this platform do not constitute investment advice, financial advice, or any other sort of advice. You should not treat any of the platform's content as such. You are solely responsible for your investment decisions.</p>
           </section>

           <section>
              <h2 className="text-xl font-bold text-white mb-4">4. User Responsibilities</h2>
              <p>You agree to use the service only for lawful purposes. You are responsible for maintaining the confidentiality of your account credentials.</p>
           </section>

           <section>
              <h2 className="text-xl font-bold text-white mb-4">5. Limitation of Liability</h2>
              <p>Market Oracle shall not be liable for any financial losses incurred based on the data or predictions provided by our AI models. All trading involves risk.</p>
           </section>
        </div>

        <div className="mt-20 pt-10 border-t border-white/5 text-sm text-gray-600">
           Last updated: February 14, 2025
        </div>
      </div>
    </div>
  );
};

export default Terms;
