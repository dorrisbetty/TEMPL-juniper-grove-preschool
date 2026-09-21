import { Link } from 'react-router-dom'
import { Menu } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from '@/components/ui/sheet'
import { DesktopNav, allNavItems } from './navigation'
import { LanguageToggle } from './language-toggle'
import { useLanguage } from '@/lib/i18n'
import { ModeToggle } from '@/components/mode-toggle'
import { useState } from 'react'

export function Header() {
  const { t } = useLanguage()
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b bg-card/95 backdrop-blur-md">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link to="/" className="flex items-center gap-2">
          <img src="/logo.webp" alt="Juniper Grove" className="h-9 w-9 rounded-md" />
          <span className="text-lg font-semibold text-foreground">Juniper Grove</span>
        </Link>

        <DesktopNav />

        <div className="flex items-center gap-2">
          <LanguageToggle />
          <ModeToggle />
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-72">
              <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
              <div className="flex flex-col gap-1 mt-8">
                {allNavItems.map((item) => (
                  <Link
                    key={item.path}
                    to={item.path}
                    onClick={() => setOpen(false)}
                    className="px-4 py-3 rounded-lg text-base font-medium text-foreground hover:bg-muted transition-colors"
                  >
                    {t.nav[item.labelKey]}
                  </Link>
                ))}
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
