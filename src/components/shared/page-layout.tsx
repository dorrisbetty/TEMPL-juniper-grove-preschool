import { type ReactNode } from 'react'
import { Header } from './header'
import { Footer } from './footer'
import { BottomNav } from './navigation'
import { WhatsAppFab } from './whatsapp-fab'

export function PageLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex min-h-svh flex-col">
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
      <BottomNav />
      <WhatsAppFab />
    </div>
  )
}
