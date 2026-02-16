
import { Link } from 'react-router-dom';
import { ArrowLeft, ShieldCheck } from 'lucide-react';

const Privacy = () => {
  return (
    <div className="bg-dark min-h-screen text-white p-8 md:p-20">
      <div className="max-w-4xl mx-auto">
        <Link to="/" className="inline-flex items-center gap-2 text-gray-500 hover:text-primary transition-colors mb-12 group">
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" /> Back to Home
        </Link>

        <div className="flex items-center gap-4 mb-10">
           <div className="w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center">
              <ShieldCheck className="text-primary w-6 h-6" />
           </div>
           <h1 className="text-4xl font-black">Privacy <span className="text-primary italic">Policy</span></h1>
        </div>

        <div className="prose prose-invert max-w-none space-y-8 text-gray-400">
           <section>
              <h2 className="text-xl font-bold text-white mb-4">1. Data Collection</h2>
              <p>We collect information that you provide directly to us when you create an account, such as your name and email address. We also collect usage data to improve our AI models.</p>
           </section>

           <section>
              <h2 className="text-xl font-bold text-white mb-4">2. Use of Information</h2>
              <p>We use your data to personalize your experience, process transactions, and send you market intelligence alerts that you have subscribed to.</p>
           </section>

           <section>
              <h2 className="text-xl font-bold text-white mb-4">3. Data Protection</h2>
              <p>We implement a variety of security measures to maintain the safety of your personal information. Your sensitive data is encrypted via SSL technology.</p>
           </section>

           <section>
              <h2 className="text-xl font-bold text-white mb-4">4. Cookies</h2>
              <p>We use cookies to understand and save your preferences for future visits and compile aggregate data about site traffic and site interaction.</p>
           </section>

           <section>
              <h2 className="text-xl font-bold text-white mb-4">5. Third-Party Disclosure</h2>
              <p>We do not sell, trade, or otherwise transfer your personally identifiable information to outside parties except for trusted third parties who assist us in operating our website.</p>
           </section>
        </div>

        <div className="mt-20 pt-10 border-t border-white/5 text-sm text-gray-600">
           Last updated: February 14, 2025
        </div>
      </div>
    </div>
  );
};

export default Privacy;
