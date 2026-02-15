import { Sidebar } from "@/components/Sidebar"
import { TopBar } from "@/components/TopBar"

export default function AppLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="min-h-screen bg-background">
      <Sidebar />
      <div className="lg:pl-64">
        <TopBar />
        <main className="pt-16 p-6">
          {children}
        </main>
      </div>
    </div>
  )
}
