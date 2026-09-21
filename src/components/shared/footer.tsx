import { Link } from 'react-router-dom'
import { useLanguage } from '@/lib/i18n'
import { Separator } from '@/components/ui/separator'

export function Footer() {
  const { t } = useLanguage()

  return (
    <footer className="bg-card border-t pb-20 md:pb-8">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-3">
              <img src="/logo.webp" alt="Juniper Grove" className="h-8 w-8 rounded-md" />
              <span className="font-semibold text-foreground">{t.footer.schoolName}</span>
            </div>
            <p className="text-sm text-muted-foreground">{t.footer.tagline}</p>
          </div>

          <div>
            <h4 className="font-semibold text-sm mb-3">{t.footer.quickLinks}</h4>
            <nav className="flex flex-col gap-2">
              <Link to="/about" className="text-sm text-muted-foreground hover:text-primary transition-colors">{t.nav.about}</Link>
              <Link to="/programs" className="text-sm text-muted-foreground hover:text-primary transition-colors">{t.nav.programs}</Link>
              <Link to="/admissions" className="text-sm text-muted-foreground hover:text-primary transition-colors">{t.nav.admissions}</Link>
              <Link to="/facilities" className="text-sm text-muted-foreground hover:text-primary transition-colors">{t.nav.facilities}</Link>
              <Link to="/team" className="text-sm text-muted-foreground hover:text-primary transition-colors">{t.nav.team}</Link>
              <Link to="/gallery" className="text-sm text-muted-foreground hover:text-primary transition-colors">{t.nav.gallery}</Link>
              <Link to="/faq" className="text-sm text-muted-foreground hover:text-primary transition-colors">{t.nav.faq}</Link>
            </nav>
          </div>

          <div>
            <h4 className="font-semibold text-sm mb-3">{t.footer.contactInfo}</h4>
            <div className="flex flex-col gap-2 text-sm text-muted-foreground">
              <p>{t.contact.addressText}</p>
              <a href="tel:+919289934130" className="hover:text-primary transition-colors">{t.contact.phoneNumber}</a>
              <a href="mailto:hello@junipergrove.in" className="hover:text-primary transition-colors">{t.contact.emailAddress}</a>
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-sm mb-3">{t.footer.followUs}</h4>
            <div className="flex flex-col gap-2 text-sm text-muted-foreground">
              <a href="https://instagram.com/junipergrovegurgaon" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">Instagram</a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">Facebook</a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">YouTube</a>
            </div>
          </div>
        </div>

        <Separator className="my-8" />
        <p className="text-xs text-muted-foreground text-center">{t.footer.rights}</p>
      </div>
    </footer>
  )
}
