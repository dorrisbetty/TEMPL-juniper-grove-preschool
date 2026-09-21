import { useLanguage } from '@/lib/i18n'
import { Button } from '@/components/ui/button'

export function LanguageToggle() {
  const { language, setLanguage, t } = useLanguage()

  return (
    <Button
      variant="outline"
      size="sm"
      onClick={() => setLanguage(language === 'en' ? 'hi' : 'en')}
      className="text-xs font-semibold px-2.5 h-8"
    >
      {language === 'en' ? t.language.hi : t.language.en}
    </Button>
  )
}
