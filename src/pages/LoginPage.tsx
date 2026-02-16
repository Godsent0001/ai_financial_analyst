
import { Link, useNavigate } from 'react-router-dom';
import { Zap, Mail, Lock, Eye, ArrowRight } from 'lucide-react';

const LoginPage = () => {
  const navigate = useNavigate();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    navigate('/dashboard');
  };

  return (
    <div className="min-h-screen bg-dark flex flex-col md:flex-row">
      {/* Left Side - Branding */}
      <div className="hidden md:flex flex-1 bg-primary/5 border-r border-white/5 items-center justify-center p-12 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary/10 via-transparent to-transparent opacity-50"></div>
        <div className="max-w-md relative z-10 text-center">
          <div className="w-20 h-20 bg-primary rounded-3xl flex items-center justify-center mb-8 mx-auto rotate-12 shadow-[0_0_50px_rgba(0,255,156,0.2)]">
            <Zap className="text-dark w-12 h-12 fill-current" />
          </div>
          <h1 className="text-4xl font-black mb-6">Welcome Back to the <span className="text-primary">Oracle.</span></h1>
          <p className="text-gray-400 text-lg">Access your institutional-grade AI signals and market insights.</p>
        </div>
      </div>

      {/* Right Side - Form */}
      <div className="flex-1 flex items-center justify-center p-8">
        <div className="w-full max-w-sm">
          <div className="flex items-center gap-2 mb-12 md:hidden">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
              <Zap className="text-dark w-5 h-5 fill-current" />
            </div>
            <span className="font-bold text-xl tracking-tight text-white">Market<span className="text-primary">Oracle</span></span>
          </div>

          <div className="mb-10">
            <h2 className="text-3xl font-bold text-white mb-2">Login</h2>
            <p className="text-gray-500">Enter your credentials to continue.</p>
          </div>

          <form onSubmit={handleLogin} className="space-y-6">
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
              <div className="flex items-center justify-between mb-2">
                <label className="block text-sm font-medium text-gray-400">Password</label>
                <a href="#" className="text-xs text-primary hover:underline">Forgot Password?</a>
              </div>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-600" />
                <input
                  type="password"
                  required
                  placeholder="••••••••"
                  className="w-full bg-white/5 border border-white/10 rounded-xl py-3 pl-10 pr-10 focus:outline-none focus:border-primary/50 transition-all text-white"
                />
                <button type="button" className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-600 hover:text-gray-400">
                  <Eye className="w-5 h-5" />
                </button>
              </div>
            </div>

            <button
              type="submit"
              className="w-full bg-primary text-dark py-4 rounded-xl font-black text-lg hover:bg-secondary transition-all flex items-center justify-center gap-2"
            >
              Login <ArrowRight className="w-5 h-5" />
            </button>
          </form>

          <p className="mt-8 text-center text-gray-500 text-sm">
            Don't have an account? <Link to="/signup" className="text-primary font-bold hover:underline">Create Account</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
