import { useState } from 'react';
import {
  User,
  CreditCard,
  Bell,
  Shield,
  Zap,
  LogOut,
  Camera
} from 'lucide-react';

const SettingsPage = () => {
  const [activeTab, setActiveTab] = useState('profile');

  const tabs = [
    { id: 'profile', name: 'Profile', icon: User },
    { id: 'subscription', name: 'Subscription', icon: CreditCard },
    { id: 'notifications', name: 'Notifications', icon: Bell },
    { id: 'security', name: 'Security', icon: Shield },
  ];

  return (
    <div className="max-w-5xl mx-auto space-y-8 pb-20">
      <div className="flex items-center justify-between">
         <h1 className="text-3xl font-bold">Settings</h1>
         <button className="flex items-center gap-2 text-red-500 font-bold hover:bg-red-500/10 px-4 py-2 rounded-xl transition-colors">
            <LogOut className="w-4 h-4" /> Logout
         </button>
      </div>

      <div className="flex flex-col lg:flex-row gap-12">
         {/* Left Sidebar Tabs */}
         <div className="lg:w-64 space-y-2">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-2xl font-bold text-sm transition-all ${
                  activeTab === tab.id
                    ? 'bg-primary/10 text-primary'
                    : 'text-gray-500 hover:text-white hover:bg-white/5'
                }`}
              >
                <tab.icon className="w-5 h-5" />
                {tab.name}
              </button>
            ))}
         </div>

         {/* Content Area */}
         <div className="flex-1 space-y-8">
            {activeTab === 'profile' && (
               <div className="space-y-8 animate-in fade-in slide-in-from-right-4 duration-300">
                  <div className="bg-card border border-border rounded-[32px] p-8">
                     <h3 className="text-xl font-bold mb-8">Profile Information</h3>
                     <div className="flex items-center gap-8 mb-10">
                        <div className="relative group">
                           <div className="w-24 h-24 rounded-full bg-gradient-to-br from-primary to-secondary p-1">
                              <div className="w-full h-full rounded-full bg-dark flex items-center justify-center overflow-hidden">
                                 <User className="w-12 h-12 text-gray-500" />
                              </div>
                           </div>
                           <button className="absolute bottom-0 right-0 p-2 bg-primary text-dark rounded-full shadow-lg transform group-hover:scale-110 transition-transform">
                              <Camera className="w-4 h-4" />
                           </button>
                        </div>
                        <div>
                           <p className="text-sm font-bold text-gray-400 mb-1 uppercase tracking-widest">Avatar</p>
                           <p className="text-gray-500 text-xs max-w-[200px]">JPG, GIF or PNG. Max size of 800K</p>
                        </div>
                     </div>

                     <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                           <label className="text-xs font-bold text-gray-500 uppercase tracking-widest px-1">Full Name</label>
                           <input type="text" defaultValue="Alex Rivera" className="w-full bg-dark border border-border rounded-xl py-3 px-4 focus:outline-none focus:border-primary/50 transition-all" />
                        </div>
                        <div className="space-y-2">
                           <label className="text-xs font-bold text-gray-500 uppercase tracking-widest px-1">Email Address</label>
                           <input type="email" defaultValue="alex@example.com" className="w-full bg-dark border border-border rounded-xl py-3 px-4 focus:outline-none focus:border-primary/50 transition-all" />
                        </div>
                        <div className="space-y-2 md:col-span-2">
                           <label className="text-xs font-bold text-gray-500 uppercase tracking-widest px-1">Bio</label>
                           <textarea className="w-full bg-dark border border-border rounded-xl py-3 px-4 focus:outline-none focus:border-primary/50 transition-all h-24" placeholder="Tell us about your trading style..."></textarea>
                        </div>
                     </div>

                     <div className="mt-10 flex justify-end">
                        <button className="bg-primary text-dark px-8 py-3 rounded-xl font-black text-sm hover:bg-secondary transition-all">
                           Save Changes
                        </button>
                     </div>
                  </div>
               </div>
            )}

            {activeTab === 'subscription' && (
               <div className="space-y-8 animate-in fade-in slide-in-from-right-4 duration-300">
                  <div className="bg-card border border-border rounded-[32px] p-8 overflow-hidden relative">
                     <div className="absolute top-0 right-0 p-8">
                        <Zap className="text-primary/10 w-24 h-24 fill-current" />
                     </div>
                     <div className="relative z-10">
                        <h3 className="text-xl font-bold mb-1">Current Plan</h3>
                        <div className="flex items-center gap-2 mb-8">
                           <span className="text-primary font-black text-3xl italic tracking-tighter uppercase">Free Oracle</span>
                           <span className="px-2 py-0.5 bg-primary/10 text-primary text-[10px] font-bold rounded uppercase">Active</span>
                        </div>

                        <div className="p-6 bg-dark/50 border border-border rounded-2xl mb-8 max-w-md">
                           <p className="text-sm text-gray-400 mb-4 leading-relaxed">
                              You are currently using the limited Free plan. Upgrade to unlock all AI signals and advanced features.
                           </p>
                           <button className="w-full bg-primary text-dark py-3 rounded-xl font-black text-sm hover:bg-secondary transition-colors">
                              View Upgrade Options
                           </button>
                        </div>

                        <div className="space-y-4">
                           <div className="flex items-center justify-between py-4 border-b border-border">
                              <span className="text-sm font-medium text-gray-400">Next Billing Date</span>
                              <span className="text-sm font-bold text-white">N/A</span>
                           </div>
                           <div className="flex items-center justify-between py-4 border-b border-border">
                              <span className="text-sm font-medium text-gray-400">Payment Method</span>
                              <span className="text-sm font-bold text-white">None</span>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            )}

            {activeTab === 'notifications' && (
               <div className="space-y-8 animate-in fade-in slide-in-from-right-4 duration-300">
                  <div className="bg-card border border-border rounded-[32px] p-8">
                     <h3 className="text-xl font-bold mb-8">Notification Preferences</h3>
                     <div className="space-y-2">
                        {[
                          { title: "Market Alerts", desc: "Get notified when high-volatility events are predicted." },
                          { title: "AI Signal Alerts", desc: "Receive instant alerts for new Buy/Sell signals (Paid)." },
                          { title: "Portfolio Reports", desc: "Weekly summaries of your watchlist performance." },
                          { title: "Product Updates", desc: "Stay informed about new AI models and features." }
                        ].map((item, i) => (
                           <div key={i} className="flex items-center justify-between py-6 border-b border-border last:border-0">
                              <div>
                                 <h4 className="font-bold mb-1">{item.title}</h4>
                                 <p className="text-sm text-gray-500">{item.desc}</p>
                              </div>
                              <button className="w-12 h-6 bg-primary/20 rounded-full relative p-1 group">
                                 <div className="w-4 h-4 bg-primary rounded-full ml-auto transition-all"></div>
                              </button>
                           </div>
                        ))}
                     </div>
                  </div>
               </div>
            )}

            {/* Appearance Mini-Section */}
            <div className="bg-card border border-border rounded-[32px] p-8">
               <h3 className="text-xl font-bold mb-8">Theme Accent</h3>
               <div className="flex items-center gap-4">
                  {[
                    { color: "bg-[#00FF9C]", name: "Neon Green", active: true },
                    { color: "bg-blue-500", name: "Cyber Blue", active: false },
                    { color: "bg-purple-500", name: "Neon Purple", active: false },
                    { color: "bg-orange-500", name: "Amber", active: false },
                  ].map((c, i) => (
                    <button key={i} className={`flex flex-col items-center gap-2 group`}>
                       <div className={`w-12 h-12 rounded-2xl ${c.color} p-1 transition-all ${c.active ? 'ring-2 ring-white ring-offset-4 ring-offset-dark' : 'opacity-40 hover:opacity-100'}`}></div>
                       <span className={`text-[10px] font-bold uppercase tracking-widest ${c.active ? 'text-primary' : 'text-gray-600'}`}>{c.name}</span>
                    </button>
                  ))}
               </div>
            </div>
         </div>
      </div>
    </div>
  );
};

export default SettingsPage;
