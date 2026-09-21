import { useLanguage } from '@/lib/i18n'
import { openWhatsApp } from '@/lib/whatsapp'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Separator } from '@/components/ui/separator'
import { ArrowRight, Shield, CheckCircle2, Coffee } from 'lucide-react'

export function FacilitiesPage() {
  const { t, language } = useLanguage()

  const facilityImages = [
    '/facility-classroom.webp',
    '/facility-outdoor.webp',
    '/programs-acorn.webp',
    '/programs-willow.webp',
    '/programs-fern.webp',
    '/facility-library.webp',
    '/facility-artroom.webp',
    '/facility-music.webp',
  ]

  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="bg-primary/5 py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-extrabold tracking-tight">{t.facilities.title}</h1>
          <p className="mt-2 text-lg text-muted-foreground">{t.facilities.subtitle}</p>
          <p className="mt-4 text-foreground/80 max-w-2xl leading-relaxed">{t.facilities.intro}</p>
        </div>
      </section>

      {/* Facilities Grid */}
      <section className="container mx-auto px-4 py-16">
        <div className="grid gap-6 md:grid-cols-2">
          {t.facilities.list.map((facility, i) => (
            <Card key={i} className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="grid md:grid-cols-2">
                <div className="h-48 md:h-auto">
                  <img src={facilityImages[i]} alt={facility.name} className="w-full h-full object-cover" />
                </div>
                <CardContent className="p-6 flex flex-col justify-center">
                  <h3 className="text-lg font-bold">{facility.name}</h3>
                  <p className="text-sm text-muted-foreground mt-2 leading-relaxed">{facility.desc}</p>
                </CardContent>
              </div>
            </Card>
          ))}
        </div>
      </section>

      <Separator />

      {/* Safety */}
      <section className="bg-muted/30 py-16">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-3 justify-center mb-8">
            <Shield className="h-6 w-6 text-primary" />
            <h2 className="text-2xl font-bold">{t.facilities.safety}</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-3xl mx-auto">
            {t.facilities.safetyList.map((item, i) => (
              <div key={i} className="flex items-center gap-3 p-4 rounded-lg bg-card">
                <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0" />
                <span className="text-sm font-medium">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Parent Lounge */}
      <section className="container mx-auto px-4 py-16">
        <Card className="max-w-2xl mx-auto">
          <CardContent className="p-8 text-center">
            <Coffee className="h-8 w-8 text-primary mx-auto mb-4" />
            <h3 className="text-xl font-bold">{t.facilities.parentLounge}</h3>
            <p className="text-muted-foreground mt-2">{t.facilities.parentLoungeDesc}</p>
          </CardContent>
        </Card>
      </section>

      <Separator />

      {/* CTA */}
      <section className="container mx-auto px-4 py-16 text-center">
        <h2 className="text-2xl font-bold">{t.common.scheduleVisit}</h2>
        <p className="mt-2 text-muted-foreground">
          {language === 'en' ? 'Come see our campus in person. We would love to show you around.' : 'हमारे कैंपस को व्यक्तिगत रूप से देखें। हम आपको दिखाना चाहेंगे।'}
        </p>
        <Button
          size="lg"
          className="mt-6"
          onClick={() => openWhatsApp(
            language === 'en'
              ? 'Hi, I would like to schedule a campus visit at Juniper Grove to see the facilities. Please share available slots.'
              : 'नमस्ते, मैं जूनिपर ग्रोव में सुविधाएं देखने के लिए कैंपस विज़िट शेड्यूल करना चाहता/चाहती हूं। कृपया उपलब्ध स्लॉट बताएं।'
          )}
        >
          {t.common.bookVisit} <ArrowRight className="ml-1 h-4 w-4" />
        </Button>
      </section>
    </div>
  )
}
