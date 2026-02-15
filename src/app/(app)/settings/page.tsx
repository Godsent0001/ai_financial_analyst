import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/Card"
import { Button } from "@/components/ui/Button"
import { Input } from "@/components/ui/Input"
import {
  User,
  CreditCard,
  Bell,
  Shield,
  Monitor,
  LogOut,
  ChevronRight
} from "lucide-react"

export default function SettingsPage() {
  return (
    <div className="space-y-8 max-w-4xl">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Settings</h1>
        <p className="text-muted-foreground">Manage your account and preferences.</p>
      </div>

      <div className="grid gap-8">
        {/* Profile */}
        <Card className="border-white/5 bg-secondary/50">
           <CardHeader>
              <div className="flex items-center gap-2">
                 <User className="h-5 w-5 text-primary" />
                 <CardTitle>Profile Information</CardTitle>
              </div>
           </CardHeader>
           <CardContent className="space-y-4">
              <div className="grid gap-4 md:grid-cols-2">
                 <div className="space-y-2">
                    <label className="text-sm font-medium">Full Name</label>
                    <Input defaultValue="John Doe" />
                 </div>
                 <div className="space-y-2">
                    <label className="text-sm font-medium">Email Address</label>
                    <Input defaultValue="john@example.com" />
                 </div>
              </div>
              <Button variant="primary">Save Changes</Button>
           </CardContent>
        </Card>

        {/* Subscription */}
        <Card className="border-white/5 bg-secondary/50">
           <CardHeader>
              <div className="flex items-center gap-2">
                 <CreditCard className="h-5 w-5 text-primary" />
                 <CardTitle>Subscription Plan</CardTitle>
              </div>
           </CardHeader>
           <CardContent className="flex items-center justify-between">
              <div>
                 <p className="font-bold text-lg">Free Plan</p>
                 <p className="text-sm text-muted-foreground">Your next billing date is N/A.</p>
              </div>
              <Button variant="outline">Upgrade Plan</Button>
           </CardContent>
        </Card>

        {/* Notifications */}
        <Card className="border-white/5 bg-secondary/50">
           <CardHeader>
              <div className="flex items-center gap-2">
                 <Bell className="h-5 w-5 text-primary" />
                 <CardTitle>Notifications</CardTitle>
              </div>
           </CardHeader>
           <CardContent className="space-y-4">
              {[
                { title: "Signal Alerts", desc: "Get notified when AI agents post new signals.", enabled: true },
                { title: "Market Alerts", desc: "Daily market summaries and high volatility alerts.", enabled: false },
                { title: "Security Alerts", desc: "Notifications about your account login activity.", enabled: true },
              ].map((item, i) => (
                <div key={i} className="flex items-center justify-between py-2 border-b border-white/5 last:border-0">
                   <div>
                      <p className="font-medium">{item.title}</p>
                      <p className="text-xs text-muted-foreground">{item.desc}</p>
                   </div>
                   <div className={`h-6 w-12 rounded-full p-1 transition-colors cursor-pointer ${item.enabled ? 'bg-primary' : 'bg-muted'}`}>
                      <div className={`h-4 w-4 rounded-full bg-white transition-transform ${item.enabled ? 'translate-x-6' : 'translate-x-0'}`} />
                   </div>
                </div>
              ))}
           </CardContent>
        </Card>

        {/* Theme Settings */}
        <Card className="border-white/5 bg-secondary/50">
           <CardHeader>
              <div className="flex items-center gap-2">
                 <Monitor className="h-5 w-5 text-primary" />
                 <CardTitle>Theme Preferences</CardTitle>
              </div>
           </CardHeader>
           <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                 <div>
                    <p className="font-medium">Dark Mode</p>
                    <p className="text-xs text-muted-foreground">Use the dark theme by default.</p>
                 </div>
                 <div className="h-6 w-12 rounded-full p-1 bg-primary cursor-pointer">
                    <div className="h-4 w-4 rounded-full bg-white translate-x-6" />
                 </div>
              </div>
              <div className="flex items-center justify-between">
                 <div>
                    <p className="font-medium">Green Accent</p>
                    <p className="text-xs text-muted-foreground">Toggle the primary neon green accent color.</p>
                 </div>
                 <div className="h-6 w-12 rounded-full p-1 bg-primary cursor-pointer">
                    <div className="h-4 w-4 rounded-full bg-white translate-x-6" />
                 </div>
              </div>
           </CardContent>
        </Card>

        <div className="flex justify-end pt-8">
           <Button variant="ghost" className="text-red-500 hover:bg-red-500/10 hover:text-red-500">
              <LogOut className="mr-2 h-4 w-4" /> Sign Out
           </Button>
        </div>
      </div>
    </div>
  )
}
