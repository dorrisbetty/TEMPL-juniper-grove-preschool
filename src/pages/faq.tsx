import { useLanguage } from '@/lib/i18n'
import { openWhatsApp } from '@/lib/whatsapp'
import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import { ArrowRight, MessageCircle } from 'lucide-react'

export function FaqPage() {
  const { t, language } = useLanguage()

  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="bg-primary/5 py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-extrabold tracking-tight">{t.faq.title}</h1>
          <p className="mt-2 text-lg text-muted-foreground">{t.faq.subtitle}</p>
        </div>
      </section>

      {/* FAQ */}
      <section className="container mx-auto px-4 py-16">
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-2">
            {t.faq.list.map((item, i) => (
              <AccordionItem key={i} value={`faq-${i}`} className="border rounded-lg px-4">
                <AccordionTrigger className="text-left hover:no-underline">{item.q}</AccordionTrigger>
                <AccordionContent className="text-muted-foreground">{item.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      <Separator />

      {/* Still Have Questions */}
      <section className="container mx-auto px-4 py-16 text-center">
        <MessageCircle className="h-10 w-10 text-primary mx-auto mb-4" />
        <h2 className="text-2xl font-bold">{t.faq.stillHaveQuestions}</h2>
        <p className="mt-2 text-muted-foreground">{t.faq.stillHaveQuestionsDesc}</p>
        <Button
          size="lg"
          className="mt-6"
          onClick={() => openWhatsApp(
            language === 'en'
              ? 'Hi, I have a question about Juniper Grove Early Learning House that is not answered on the website.'
              : 'नमस्ते, मेरा एक सवाल है जो वेबसाइट पर नहीं मिला।'
          )}
        >
          {t.common.whatsapp} <ArrowRight className="ml-1 h-4 w-4" />
        </Button>
      </section>
    </div>
  )
}
