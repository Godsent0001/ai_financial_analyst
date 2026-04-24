"use client"

import { Search, Bell, User } from "lucide-react"
import { Input } from "@/components/ui/Input"

export const TopBar = () => {
  return (
    <header className="fixed top-0 z-30 flex h-16 w-full items-center justify-between border-b border-white/5 bg-black/50 px-4 backdrop-blur-xl lg:pl-[256px]">
      <div className="flex flex-1 items-center gap-4 ml-12 lg:ml-0">
        <div className="relative w-full max-w-md hidden md:block">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-zinc-500" />
          <Input
            type="search"
            placeholder="Search agents..."
            className="pl-10 bg-zinc-900/50 border-white/5 h-10 rounded-full text-sm"
          />
        </div>
      </div>
      <div className="flex items-center gap-2">
        <button className="rounded-full p-2 text-zinc-500 hover:text-white transition-colors">
          <Bell className="h-5 w-5" />
        </button>
        <button className="flex items-center gap-2 rounded-full border border-white/5 p-1 pr-3 bg-zinc-900/50 hover:bg-zinc-800 transition-all">
          <div className="h-7 w-7 rounded-full bg-primary/20 flex items-center justify-center text-primary font-black text-xs">
            JD
          </div>
          <span className="text-xs font-bold hidden sm:inline">Account</span>
        </button>
      </div>
    </header>
  )
}
