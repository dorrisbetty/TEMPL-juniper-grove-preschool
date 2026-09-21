import { useState } from 'react'
import { useLanguage } from '@/lib/i18n'
import { openWhatsApp } from '@/lib/whatsapp'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Separator } from '@/components/ui/separator'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'
import { MapPin, Phone, Mail, Clock, ArrowRight, MessageCircle } from 'lucide-react'

export function ContactPage() {
  const { t, language } = useLanguage()
  const [form, setForm] = useState({ name: '', email: '', phone: '', subject: '', message: '' })

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    const msg = language === 'en'
      ? `Hi, I am reaching out from the Juniper Grove website.\n\nName: ${form.name}\nEmail: ${form.email}\nPhone: ${form.phone}\nSubject: ${form.subject}\nMessage: ${form.message}`
      : `नमस्ते, मैं जूनिपर ग्रोव वेबसाइट से संपर्क कर रहा/रही हूं।\n\nनाम: ${form.name}\nईमेल: ${form.email}\nफ़ोन: ${form.phone}\nविषय: ${form.subject}\nसंदेश: ${form.message}`
    openWhatsApp(msg)
  }

  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="bg-primary/5 py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-extrabold tracking-tight">{t.contact.title}</h1>
          <p className="mt-2 text-lg text-muted-foreground">{t.contact.subtitle}</p>
        </div>
      </section>

      {/* Contact Info + Form */}
      <section className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 gap-12">
          {/* Info */}
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                <MapPin className="h-5 w-5 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold">{t.contact.address}</h3>
                <p className="text-sm text-muted-foreground mt-1">{t.contact.addressText}</p>
                <p className="text-sm text-muted-foreground">{t.contact.landmark}</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                <Phone className="h-5 w-5 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold">{t.contact.phone}</h3>
                <a href="tel:+919289934130" className="text-sm text-muted-foreground hover:text-primary">{t.contact.phoneNumber}</a>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                <Mail className="h-5 w-5 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold">{t.contact.emailLabel}</h3>
                <a href="mailto:hello@junipergrove.in" className="text-sm text-muted-foreground hover:text-primary">{t.contact.emailAddress}</a>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                <Clock className="h-5 w-5 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold">{t.contact.hours}</h3>
                <p className="text-sm text-muted-foreground whitespace-pre-line">{t.contact.hoursText}</p>
              </div>
            </div>

            <Separator />

            {/* Quick Inquiries */}
            <div>
              <h3 className="font-semibold mb-3">{t.contact.quickInquiries}</h3>
              <div className="flex flex-wrap gap-2">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => openWhatsApp(
                    language === 'en'
                      ? 'Hi, I have an admission inquiry for Juniper Grove. Please share details about the process and availability.'
                      : 'नमस्ते, मुझे जूनिपर ग्रोव में प्रवेश के बारे में पूछताछ करनी है। कृपया प्रक्रिया और उपलब्धता के बारे में बताएं।'
                  )}
                >
                  <MessageCircle className="h-4 w-4 mr-1" />
                  {t.contact.quickAdmission}
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => openWhatsApp(
                    language === 'en'
                      ? 'Hi, I would like to schedule a campus visit at Juniper Grove. Please share available slots.'
                      : 'नमस्ते, मैं जूनिपर ग्रोव में कैंपस विज़िट शेड्यूल करना चाहता/चाहती हूं। कृपया उपलब्ध स्लॉट बताएं।'
                  )}
                >
                  <MessageCircle className="h-4 w-4 mr-1" />
                  {t.contact.quickVisit}
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => openWhatsApp(
                    language === 'en'
                      ? 'Hi, I have a general query about Juniper Grove Early Learning House.'
                      : 'नमस्ते, मुझे जूनिपर ग्रोव के बारे में एक सामान्य प्रश्न है।'
                  )}
                >
                  <MessageCircle className="h-4 w-4 mr-1" />
                  {t.contact.quickGeneral}
                </Button>
              </div>
            </div>

            <Separator />

            {/* Social */}
            <div>
              <h3 className="font-semibold mb-3">{t.contact.social}</h3>
              <div className="flex flex-col gap-2 text-sm text-muted-foreground">
                <span>Instagram: {t.contact.instagram}</span>
                <span>Facebook: {t.contact.facebook}</span>
                <span>YouTube: {t.contact.youtube}</span>
              </div>
            </div>
          </div>

          {/* Form */}
          <div>
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-2">{t.contact.formTitle}</h3>
                <p className="text-sm text-muted-foreground mb-6">{t.contact.formDesc}</p>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <Label htmlFor="name">{t.common.name}</Label>
                    <Input id="name" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} required />
                  </div>
                  <div>
                    <Label htmlFor="email">{t.common.email}</Label>
                    <Input id="email" type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} required />
                  </div>
                  <div>
                    <Label htmlFor="phone">{t.common.phone}</Label>
                    <Input id="phone" type="tel" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} required />
                  </div>
                  <div>
                    <Label htmlFor="subject">{t.common.subject}</Label>
                    <Input id="subject" value={form.subject} onChange={(e) => setForm({ ...form, subject: e.target.value })} required />
                  </div>
                  <div>
                    <Label htmlFor="message">{t.common.message}</Label>
                    <Textarea id="message" value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} required rows={4} />
                  </div>
                  <Button type="submit" className="w-full">
                    {t.common.sendMessage} <ArrowRight className="ml-1 h-4 w-4" />
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Separator />

      {/* Map */}
      <section className="container mx-auto px-4 py-16">
        <div className="rounded-xl overflow-hidden h-80">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3507.8!2d77.0874!3d28.4257!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjjCsDI1JzMyLjUiTiA3N8KwMDUnMTQuNiJF!5e0!3m2!1sen!2sin!4v1"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Juniper Grove Location"
          />
        </div>
      </section>
    </div>
  )
}
