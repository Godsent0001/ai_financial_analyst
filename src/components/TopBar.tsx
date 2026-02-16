
import { Search, Bell, User } from 'lucide-react';

const TopBar = () => {
  return (
    <header className="h-16 border-b border-border bg-card/50 backdrop-blur-md sticky top-0 z-10 flex items-center justify-between px-8">
      <div className="flex-1 max-w-xl">
        <div className="relative group">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500 group-focus-within:text-primary transition-colors" />
          <input
            type="text"
            placeholder="Search stocks, crypto, or agents..."
            className="w-full bg-dark border border-border rounded-full py-2 pl-10 pr-4 text-sm focus:outline-none focus:border-primary/50 transition-all"
          />
        </div>
      </div>

      <div className="flex items-center gap-4">
        <button className="p-2 text-gray-400 hover:text-white hover:bg-white/5 rounded-full transition-colors relative">
          <Bell className="w-5 h-5" />
          <span className="absolute top-2 right-2 w-2 h-2 bg-primary rounded-full"></span>
        </button>
        <div className="h-8 w-px bg-border mx-2"></div>
        <div className="flex items-center gap-3 pl-2 cursor-pointer group">
          <div className="text-right hidden sm:block">
            <p className="text-sm font-medium">Alex Rivera</p>
            <p className="text-xs text-gray-500">Free Account</p>
          </div>
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-secondary p-0.5">
            <div className="w-full h-full rounded-full bg-dark flex items-center justify-center overflow-hidden">
              <User className="w-6 h-6 text-gray-300" />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default TopBar;
