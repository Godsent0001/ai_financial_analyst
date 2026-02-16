
import { NavLink } from 'react-router-dom';
import {
  Home,
  MessageSquare,
  Zap,
  Users,
  BarChart2,
  CreditCard,
  Settings,
  Lock
} from 'lucide-react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}


// Re-assigning to avoid confusion with icon names
const navItemsFinal = [
  { name: 'Home', icon: Home, path: '/dashboard' },
  { name: 'Chat', icon: MessageSquare, path: '/chat' },
  { name: 'Signals', icon: Zap, path: '/signals', locked: true },
  { name: 'Agents', icon: Users, path: '/agents' },
  { name: 'Market', icon: BarChart2, path: '/market' },
  { name: 'Pricing', icon: CreditCard, path: '/pricing' },
  { name: 'Settings', icon: Settings, path: '/settings' },
];

const Sidebar = () => {
  return (
    <aside className="w-64 bg-card border-r border-border h-screen sticky top-0 flex flex-col">
      <div className="p-6">
        <div className="flex items-center gap-2 mb-8">
          <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
            <Zap className="text-dark w-5 h-5 fill-current" />
          </div>
          <span className="font-bold text-xl tracking-tight">Market<span className="text-primary">Oracle</span></span>
        </div>

        <nav className="space-y-1">
          {navItemsFinal.map((item) => (
            <NavLink
              key={item.name}
              to={item.path}
              className={({ isActive }) => cn(
                "flex items-center justify-between px-4 py-3 rounded-lg transition-colors group",
                isActive
                  ? "bg-primary/10 text-primary"
                  : "text-gray-400 hover:bg-white/5 hover:text-white"
              )}
            >
              <div className="flex items-center gap-3">
                <item.icon className="w-5 h-5" />
                <span className="font-medium">{item.name}</span>
              </div>
              {item.locked && (
                <Lock className="w-4 h-4 text-gray-500" />
              )}
            </NavLink>
          ))}
        </nav>
      </div>

      <div className="mt-auto p-6">
        <div className="bg-primary/5 rounded-xl p-4 border border-primary/20">
          <p className="text-xs text-primary font-bold uppercase tracking-wider mb-1">Free Plan</p>
          <p className="text-sm text-gray-300 mb-3">Upgrade to unlock AI signals.</p>
          <NavLink
            to="/pricing"
            className="block w-full py-2 bg-primary text-dark text-center rounded-lg font-bold text-sm hover:bg-secondary transition-colors"
          >
            Upgrade Now
          </NavLink>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
