"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useState } from "react"
import { motion } from "framer-motion"
import {
  Home,
  Users,
  ArrowUpCircle,
  ArrowDownCircle,
  Settings,
  Menu,
  X
} from "lucide-react"

const navItems = [
  { name: "Dashboard", href: "/dashboard", icon: Home },
  { name: "Copy Trading", href: "/agents", icon: Users },
  { name: "Deposit", href: "/deposit", icon: ArrowUpCircle },
  { name: "Withdraw", href: "/withdraw", icon: ArrowDownCircle },
  { name: "Settings", href: "/settings", icon: Settings },
]

export const Sidebar = () => {
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState(false)

  const NavContent = () => (
    <div className="flex h-full flex-col px-4 py-6 bg-black">
      <div className="mb-10 flex items-center px-2">
        <Link href="/" className="flex items-center">
          <span className="text-xl font-black tracking-tighter text-primary italic">MARKET ORACLE</span>
        </Link>
      </div>
      <nav className="flex-1 space-y-2">
        {navItems.map((item) => {
          const Icon = item.icon
          const isActive = pathname === item.href
          return (
            <Link
              key={item.name}
              href={item.href}
              onClick={() => setIsOpen(false)}
              className={`flex items-center rounded-xl px-4 py-3 text-sm font-bold transition-all ${
                isActive
                  ? "bg-primary text-black"
                  : "text-zinc-500 hover:text-white hover:bg-white/5"
              }`}
            >
              <Icon className="mr-3 h-5 w-5" />
              <span>{item.name}</span>
            </Link>
          )
        })}
      </nav>
      <div className="mt-auto pt-6 border-t border-white/5">
        <div className="flex items-center px-2">
          <div className="h-10 w-10 rounded-full bg-primary/20 flex items-center justify-center text-primary font-black text-xs">
            JD
          </div>
          <div className="ml-3">
            <p className="text-sm font-bold">John Doe</p>
            <p className="text-[10px] text-zinc-500 font-black uppercase tracking-widest">Active</p>
          </div>
        </div>
      </div>
    </div>
  )

  return (
    <>
      {/* Mobile Trigger */}
      <button
        onClick={() => setIsOpen(true)}
        className="fixed left-4 top-4 z-50 rounded-full bg-primary p-3 text-black lg:hidden shadow-lg shadow-primary/20"
      >
        <Menu className="h-6 w-6" />
      </button>

      {/* Desktop Sidebar */}
      <aside className="fixed left-0 top-0 z-40 hidden h-screen w-64 border-r border-white/5 bg-black lg:block">
        <NavContent />
      </aside>

      {/* Mobile Sidebar Overlay */}
      {isOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" onClick={() => setIsOpen(false)} />
          <motion.aside
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            className="absolute left-0 top-0 h-full w-72 border-r border-white/5 shadow-2xl"
          >
            <NavContent />
            <button
              onClick={() => setIsOpen(false)}
              className="absolute right-4 top-6 text-zinc-500 hover:text-white"
            >
              <X className="h-6 w-6" />
            </button>
          </motion.aside>
        </div>
      )}
    </>
  )
}
