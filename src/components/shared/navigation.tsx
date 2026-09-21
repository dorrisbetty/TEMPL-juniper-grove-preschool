import { Link, useLocation } from 'react-router-dom'
import { Home, BookOpen, GraduationCap, Building2, Phone } from 'lucide-react'
import { useLanguage } from '@/lib/i18n'
import { cn } from '@/lib/utils'

const navItems = [
  { path: '/', icon: Home, labelKey: 'home' as const },
  { path: '/programs', icon: BookOpen, labelKey: 'programs' as const },
  { path: '/admissions', icon: GraduationCap, labelKey: 'admissions' as const },
  { path: '/about', icon: Building2, labelKey: 'about' as const },
  { path: '/contact', icon: Phone, labelKey: 'contact' as const },
]

const allNavItems = [
  { path: '/', labelKey: 'home' as const },
  { path: '/about', labelKey: 'about' as const },
  { path: '/programs', labelKey: 'programs' as const },
  { path: '/admissions', labelKey: 'admissions' as const },
  { path: '/facilities', labelKey: 'facilities' as const },
  { path: '/team', labelKey: 'team' as const },
  { path: '/gallery', labelKey: 'gallery' as const },
  { path: '/contact', labelKey: 'contact' as const },
  { path: '/faq', labelKey: 'faq' as const },
]

export function BottomNav() {
  const location = useLocation()
  const { t } = useLanguage()

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 border-t bg-card/95 backdrop-blur-md md:hidden safe-bottom">
      <div className="flex items-center justify-around py-2 px-1">
        {navItems.map((item) => {
          const isActive = item.path === '/' ? location.pathname === '/' : location.pathname.startsWith(item.path)
          return (
            <Link
              key={item.path}
              to={item.path}
              className={cn(
                'flex flex-col items-center gap-0.5 px-2 py-1.5 rounded-lg transition-colors min-w-[56px]',
                isActive ? 'text-primary' : 'text-muted-foreground'
              )}
            >
              <item.icon className={cn('h-5 w-5', isActive && 'stroke-[2.5]')} />
              <span className="text-[10px] font-medium leading-tight">{t.nav[item.labelKey]}</span>
            </Link>
          )
        })}
      </div>
    </nav>
  )
}

export function DesktopNav() {
  const location = useLocation()
  const { t } = useLanguage()

  return (
    <nav className="hidden md:flex items-center gap-1">
      {allNavItems.map((item) => {
        const isActive = item.path === '/' ? location.pathname === '/' : location.pathname.startsWith(item.path)
        return (
          <Link
            key={item.path}
            to={item.path}
            className={cn(
              'px-3 py-2 rounded-md text-sm font-medium transition-colors',
              isActive ? 'bg-primary/10 text-primary' : 'text-muted-foreground hover:text-foreground hover:bg-muted'
            )}
          >
            {t.nav[item.labelKey]}
          </Link>
        )
      })}
    </nav>
  )
}

export { allNavItems }
