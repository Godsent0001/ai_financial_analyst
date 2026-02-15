"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import {
  Home,
  MessageSquare,
  Zap,
  Users,
  BarChart2,
  CreditCard,
  Settings,
  Menu
} from "lucide-react"

const navItems = [
  { name: "Home", href: "/dashboard", icon: Home },
  { name: "Chat", href: "/chat", icon: MessageSquare },
  { name: "Signals", href: "/signals", icon: Zap, locked: true },
  { name: "Agents", href: "/agents", icon: Users },
  { name: "Market", href: "/market", icon: BarChart2 },
  { name: "Pricing", href: "/pricing", icon: CreditCard },
  { name: "Settings", href: "/settings", icon: Settings },
]

export const Sidebar = () => {
  const pathname = usePathname()

  return (
    <aside className="fixed left-0 top-0 z-40 h-screen w-64 border-r border-border bg-background transition-transform">
      <div className="flex h-full flex-col px-3 py-4">
        <div className="mb-10 flex items-center px-2">
          <Link href="/" className="flex items-center">
            <span className="text-xl font-bold tracking-tighter text-primary">MARKET ORACLE</span>
          </Link>
        </div>
        <nav className="flex-1 space-y-1">
          {navItems.map((item) => {
            const Icon = item.icon
            const isActive = pathname === item.href
            return (
              <Link
                key={item.name}
                href={item.href}
                className={`flex items-center rounded-lg px-3 py-2 text-sm font-medium transition-colors ${
                  isActive
                    ? "bg-primary text-primary-foreground"
                    : "text-muted-foreground hover:bg-muted hover:text-foreground"
                }`}
              >
                <Icon className="mr-3 h-5 w-5" />
                <span>{item.name}</span>
                {item.locked && (
                  <Zap className="ml-auto h-3 w-3 fill-current text-amber-400" />
                )}
              </Link>
            )
          })}
        </nav>
        <div className="mt-auto border-t border-border pt-4">
          <div className="flex items-center px-2">
            <div className="h-8 w-8 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold text-xs">
              JD
            </div>
            <div className="ml-3">
              <p className="text-sm font-medium">John Doe</p>
              <p className="text-xs text-muted-foreground">Free Plan</p>
            </div>
          </div>
        </div>
      </div>
    </aside>
  )
}
