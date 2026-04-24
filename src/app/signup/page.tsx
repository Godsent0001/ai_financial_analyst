import Link from "next/link"
import { Button } from "@/components/ui/Button"
import { Input } from "@/components/ui/Input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card"

export default function SignupPage() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-black px-4">
      <Card className="w-full max-w-sm border-white/5 bg-zinc-900/50 backdrop-blur-xl rounded-[2rem]">
        <CardHeader className="text-center pt-10">
          <Link href="/" className="mb-2 inline-block text-xl font-black tracking-tighter text-primary italic">MARKET ORACLE</Link>
          <CardTitle className="text-2xl font-black italic uppercase">Get Started</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6 pb-10">
          <div className="space-y-4">
            <Input type="email" placeholder="Email" className="bg-black border-white/10 h-12 rounded-xl" />
            <Input type="password" placeholder="Password" className="bg-black border-white/10 h-12 rounded-xl" />
          </div>
          <Button className="w-full h-12 font-bold rounded-xl" asChild>
            <Link href="/dashboard">Create Account</Link>
          </Button>
          <div className="text-center">
            <p className="text-sm text-zinc-500">
              Joined before?{" "}
              <Link href="/login" className="text-primary font-bold">Login</Link>
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
