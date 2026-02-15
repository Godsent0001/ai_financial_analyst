"use client"

import { Search, Bell, User } from "lucide-react"
import { Input } from "@/components/ui/Input"

export const TopBar = () => {
  return (
    <header className="fixed top-0 z-30 flex h-16 w-full items-center justify-between border-b border-border bg-background/80 px-4 backdrop-blur-md lg:pl-68">
      <div className="flex flex-1 items-center gap-4">
        <div className="relative w-full max-w-md">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            type="search"
            placeholder="Search stocks, crypto, or agents..."
            className="pl-9 bg-muted/50 border-none h-9"
          />
        </div>
      </div>
      <div className="flex items-center gap-4">
        <button className="rounded-full p-2 text-muted-foreground hover:bg-muted hover:text-foreground">
          <Bell className="h-5 w-5" />
        </button>
        <button className="flex items-center gap-2 rounded-full border border-border p-1 pr-3 hover:bg-muted">
          <div className="h-7 w-7 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold text-xs">
            JD
          </div>
          <span className="text-sm font-medium">Account</span>
        </button>
      </div>
    </header>
  )
}
