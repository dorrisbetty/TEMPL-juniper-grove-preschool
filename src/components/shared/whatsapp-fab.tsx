import { MessageCircle } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { openWhatsApp } from '@/lib/whatsapp'
import { useLanguage } from '@/lib/i18n'

export function WhatsAppFab() {
  const { language } = useLanguage()
  const message = language === 'en'
    ? 'Hi, I would like to know more about Juniper Grove Early Learning House.'
    : 'नमस्ते, मैं जूनिपर ग्रोव अर्ली लर्निंग हाउस के बारे में और जानना चाहता/चाहती हूं।'

  return (
    <Button
      onClick={() => openWhatsApp(message)}
      size="icon"
      className="fixed bottom-20 right-4 md:bottom-6 md:right-6 z-40 h-14 w-14 rounded-full shadow-lg bg-[#25D366] hover:bg-[#128C7E] text-white"
    >
      <MessageCircle className="h-6 w-6" />
    </Button>
  )
}
