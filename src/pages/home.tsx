import { Link } from 'react-router-dom'
import { useLanguage } from '@/lib/i18n'
import { openWhatsApp } from '@/lib/whatsapp'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Separator } from '@/components/ui/separator'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import {
  Sparkles, Heart, Shield, Palette, Users, ArrowRight,
  MapPin, Phone, Clock, Star, GraduationCap, TreePine,
  Baby, Sprout, Leaf
} from 'lucide-react'
import { useEffect, useRef, useState } from 'react'
import { HeroCarousel } from '@/components/shared/hero-carousel'

function AnimatedCounter({ end, suffix = '' }: { end: number; suffix?: string }) {
  const [count, setCount] = useState(0)
  const ref = useRef<HTMLSpanElement>(null)
  const hasAnimated = useRef(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true
          let start = 0
          const duration = 1500
          const increment = end / (duration / 16)
          const timer = setInterval(() => {
            start += increment
            if (start >= end) {
              setCount(end)
              clearInterval(timer)
            } else {
              setCount(Math.floor(start))
            }
          }, 16)
        }
      },
      { threshold: 0.5 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [end])

  return <span ref={ref}>{count}{suffix}</span>
}

export function HomePage() {
  const { t, language } = useLanguage()

  const programImages: Record<string, string> = {
    acorn: '/programs-acorn.webp',
    willow: '/programs-willow.webp',
    fern: '/programs-fern.webp',
    cedar: '/programs-cedar.webp',
    oak: '/programs-oak.webp',
  }

  const programKeys = ['acorn', 'willow', 'fern', 'cedar', 'oak'] as const

  const valueIcons = {
    curiosity: Sparkles,
    kindness: Heart,
    confidence: Shield,
    creativity: Palette,
    community: Users,
  }

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <HeroCarousel />
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background" />
        <div className="relative container mx-auto px-4 py-20 md:py-32">
          <Badge className="mb-4 bg-primary/20 text-primary border-primary/30">
            {t.hero.admissionOpen}
          </Badge>
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-foreground max-w-3xl">
            Juniper Grove
          </h1>
          <p className="text-2xl md:text-3xl font-light text-primary mt-2 italic">
            {t.hero.tagline}
          </p>
          <p className="mt-4 text-base md:text-lg text-muted-foreground max-w-2xl leading-relaxed">
            {t.hero.description}
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <Button
              size="lg"
              onClick={() => openWhatsApp(
                language === 'en'
                  ? 'Hi, I would like to book a campus visit at Juniper Grove.'
                  : 'नमस्ते, मैं जूनिपर ग्रोव में कैंपस विज़िट बुक करना चाहता/चाहती हूं।'
              )}
              className="text-base"
            >
              {t.hero.cta}
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button variant="outline" size="lg" asChild className="text-base">
              <Link to="/programs">{t.common.explorePrograms}</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="border-y bg-muted/50">
        <div className="container mx-auto px-4 py-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div>
              <p className="text-3xl md:text-4xl font-bold text-primary">
                <AnimatedCounter end={185} suffix="+" />
              </p>
              <p className="text-sm text-muted-foreground mt-1">{t.stats.children}</p>
            </div>
            <div>
              <p className="text-3xl md:text-4xl font-bold text-primary">
                <AnimatedCounter end={18} />
              </p>
              <p className="text-sm text-muted-foreground mt-1">{t.stats.staff}</p>
            </div>
            <div>
              <p className="text-3xl md:text-4xl font-bold text-primary">
                <AnimatedCounter end={98} suffix="%" />
              </p>
              <p className="text-sm text-muted-foreground mt-1">{t.stats.satisfaction}</p>
            </div>
            <div>
              <p className="text-3xl md:text-4xl font-bold text-primary">
                <AnimatedCounter end={7} suffix=" yrs" />
              </p>
              <p className="text-sm text-muted-foreground mt-1">{t.stats.experience}</p>
            </div>
          </div>
        </div>
      </section>

      {/* About Preview */}
      <section className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-3xl font-bold tracking-tight">{t.about.title}</h2>
            <p className="mt-2 text-muted-foreground">{t.about.subtitle}</p>
            <p className="mt-4 text-foreground/80 leading-relaxed">{t.about.story}</p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Badge variant="secondary">{t.about.established} 2018</Badge>
              <Badge variant="secondary">{t.about.ageGroup}</Badge>
              <Badge variant="secondary">{t.about.medium}</Badge>
            </div>
            <Button variant="link" asChild className="mt-4 px-0">
              <Link to="/about">{t.common.learnMore} <ArrowRight className="ml-1 h-4 w-4" /></Link>
            </Button>
          </div>
          <div className="flex gap-4">
            <div className="flex-1 space-y-4">
              <img src="/team-aarushi.webp" alt={t.about.founderName} className="rounded-xl w-full aspect-[3/4] object-cover" />
              <p className="text-sm text-center font-medium">{t.about.founderName}</p>
              <p className="text-xs text-center text-muted-foreground">{t.about.founderTitle}</p>
            </div>
            <div className="flex-1 space-y-4 mt-8">
              <img src="/team-ridhima.webp" alt={t.about.principalName} className="rounded-xl w-full aspect-[3/4] object-cover" />
              <p className="text-sm text-center font-medium">{t.about.principalName}</p>
              <p className="text-xs text-center text-muted-foreground">{t.about.principalTitle}</p>
            </div>
          </div>
        </div>
      </section>

      <Separator />

      {/* Programs Overview */}
      <section className="container mx-auto px-4 py-16">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold tracking-tight">{t.programs.title}</h2>
          <p className="mt-2 text-muted-foreground max-w-2xl mx-auto">{t.programs.subtitle}</p>
        </div>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {programKeys.map((key) => {
            const program = t.programs[key]
            const icons = [Baby, Sprout, Leaf, TreePine, GraduationCap]
            const Icon = icons[programKeys.indexOf(key)]
            return (
              <Card key={key} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="relative h-40">
                  <img src={programImages[key]} alt={program.name} className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-3 left-3">
                    <Badge className="bg-white/90 text-gray-900">{program.age}</Badge>
                  </div>
                </div>
                <CardContent className="p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <Icon className="h-4 w-4 text-primary" />
                    <h3 className="font-semibold">{program.name}</h3>
                  </div>
                  <p className="text-sm text-muted-foreground line-clamp-2">{program.description}</p>
                </CardContent>
              </Card>
            )
          })}
        </div>
        <div className="mt-8 text-center">
          <Button variant="outline" asChild>
            <Link to="/programs">{t.common.explorePrograms} <ArrowRight className="ml-1 h-4 w-4" /></Link>
          </Button>
        </div>
      </section>

      <Separator />

      {/* Core Values */}
      <section className="bg-muted/30 py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold tracking-tight">{t.values.title}</h2>
            <p className="mt-2 text-muted-foreground">{t.values.subtitle}</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {(Object.keys(valueIcons) as Array<keyof typeof valueIcons>).map((key) => {
              const Icon = valueIcons[key]
              return (
                <Card key={key} className="text-center p-4 hover:shadow-md transition-shadow">
                  <CardContent className="p-0">
                    <div className="mx-auto w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-3">
                      <Icon className="h-5 w-5 text-primary" />
                    </div>
                    <h3 className="font-semibold text-sm">{t.values[key]}</h3>
                    <p className="text-xs text-muted-foreground mt-1">{t.values[`${key}Desc`]}</p>
                  </CardContent>
                </Card>
              )
            })}
          </div>
          <div className="mt-8 text-center">
            <Button variant="link" asChild>
              <Link to="/about">{t.common.learnMore} <ArrowRight className="ml-1 h-4 w-4" /></Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Daily Schedule Preview */}
      <section className="container mx-auto px-4 py-16">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold tracking-tight">{t.programs.schedule}</h2>
        </div>
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center gap-2 mb-4">
                <Clock className="h-5 w-5 text-primary" />
                <h3 className="font-semibold">{t.programs.halfDay}</h3>
              </div>
              <div className="space-y-3">
                {t.programs.halfDaySchedule.map((item, i) => (
                  <div key={i} className="flex items-center gap-3 text-sm">
                    <span className="text-muted-foreground font-mono min-w-[72px]">{item.time}</span>
                    <span>{item.activity}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center gap-2 mb-4">
                <Clock className="h-5 w-5 text-primary" />
                <h3 className="font-semibold">{t.programs.fullDay}</h3>
              </div>
              <div className="space-y-3">
                {t.programs.fullDaySchedule.map((item, i) => (
                  <div key={i} className="flex items-center gap-3 text-sm">
                    <span className="text-muted-foreground font-mono min-w-[72px]">{item.time}</span>
                    <span>{item.activity}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
        <div className="mt-8 text-center">
          <Button variant="link" asChild>
            <Link to="/programs">{t.common.viewMore} <ArrowRight className="ml-1 h-4 w-4" /></Link>
          </Button>
        </div>
      </section>

      <Separator />

      {/* Facilities Highlights */}
      <section className="container mx-auto px-4 py-16">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold tracking-tight">{t.facilities.title}</h2>
          <p className="mt-2 text-muted-foreground">{t.facilities.subtitle}</p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { img: '/facility-classroom.webp', name: t.facilities.list[0].name },
            { img: '/facility-outdoor.webp', name: t.facilities.list[1].name },
            { img: '/facility-library.webp', name: t.facilities.list[5].name },
            { img: '/facility-artroom.webp', name: t.facilities.list[6].name },
          ].map((f, i) => (
            <div key={i} className="relative rounded-xl overflow-hidden aspect-square group">
              <img src={f.img} alt={f.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
              <p className="absolute bottom-3 left-3 right-3 text-white text-sm font-medium">{f.name}</p>
            </div>
          ))}
        </div>
        <div className="mt-8 text-center">
          <Button variant="outline" asChild>
            <Link to="/facilities">{t.common.viewFacilities} <ArrowRight className="ml-1 h-4 w-4" /></Link>
          </Button>
        </div>
      </section>

      <Separator />

      {/* Teaching Team Preview */}
      <section className="bg-muted/30 py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold tracking-tight">{t.team.title}</h2>
            <p className="mt-2 text-muted-foreground">{t.team.subtitle}</p>
          </div>
          <div className="flex gap-4 overflow-x-auto pb-4 snap-x snap-mandatory -mx-4 px-4 md:mx-0 md:px-0 md:grid md:grid-cols-5 md:overflow-visible">
            {t.team.members.map((member, i) => {
              const photos = ['/team-meher.webp', '/team-nishka.webp', '/team-yashvi.webp', '/team-tvesha.webp', '/team-armaan.webp']
              return (
                <Card key={i} className="min-w-[200px] snap-center flex-shrink-0 md:min-w-0">
                  <CardContent className="p-4 text-center">
                    <img src={photos[i]} alt={member.name} className="w-20 h-20 rounded-full mx-auto object-cover mb-3" />
                    <h4 className="font-semibold text-sm">{member.name}</h4>
                    <p className="text-xs text-muted-foreground">{member.role}</p>
                    <p className="text-xs text-primary mt-1">{member.exp} {t.team.experience}</p>
                  </CardContent>
                </Card>
              )
            })}
          </div>
          <div className="mt-8 text-center">
            <Button variant="link" asChild>
              <Link to="/team">{t.common.meetTeam} <ArrowRight className="ml-1 h-4 w-4" /></Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="container mx-auto px-4 py-16">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold tracking-tight">{t.testimonials.title}</h2>
          <p className="mt-2 text-muted-foreground">{t.testimonials.subtitle}</p>
        </div>
        <div className="grid md:grid-cols-2 gap-4">
          {t.testimonials.list.map((item, i) => (
            <Card key={i} className="hover:shadow-md transition-shadow">
              <CardContent className="p-6">
                <div className="flex gap-1 mb-3">
                  {[...Array(5)].map((_, s) => (
                    <Star key={s} className="h-4 w-4 fill-accent text-accent" />
                  ))}
                </div>
                <p className="text-foreground/80 italic leading-relaxed">"{item.quote}"</p>
                <p className="mt-4 font-semibold text-sm">{item.name}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <Separator />

      {/* Admission CTA */}
      <section className="bg-primary/5 py-16">
        <div className="container mx-auto px-4 text-center">
          <Badge className="mb-4 bg-primary/20 text-primary border-primary/30">{t.hero.admissionOpen}</Badge>
          <h2 className="text-3xl font-bold tracking-tight">{t.admissions.title}</h2>
          <p className="mt-2 text-muted-foreground max-w-xl mx-auto">{t.admissions.subtitle}</p>
          <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl mx-auto">
            {t.admissions.eligibilityList.map((item, i) => (
              <Card key={i}>
                <CardContent className="p-4 text-center">
                  <p className="font-semibold text-sm">{item.level}</p>
                  <p className="text-xs text-muted-foreground mt-1">{item.age}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
            <Button
              size="lg"
              onClick={() => openWhatsApp(
                language === 'en'
                  ? 'Hi, I am interested in admission for the 2026-27 session at Juniper Grove. Please share details.'
                  : 'नमस्ते, मैं जूनिपर ग्रोव में 2026-27 सत्र के लिए प्रवेश में रुचि रखता/रखती हूं। कृपया विवरण साझा करें।'
              )}
            >
              {t.common.enquireNow} <ArrowRight className="ml-1 h-4 w-4" />
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link to="/admissions">{t.common.viewMore}</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Gallery Preview */}
      <section className="container mx-auto px-4 py-16">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold tracking-tight">{t.gallery.title}</h2>
          <p className="mt-2 text-muted-foreground">{t.gallery.subtitle}</p>
        </div>
        <div className="grid grid-cols-3 gap-2 md:gap-4">
          {['/facility-classroom.webp', '/gallery-event.webp', '/gallery-art.webp', '/gallery-outdoor-play.webp', '/facility-music.webp', '/programs-fern.webp'].map((img, i) => (
            <div key={i} className="rounded-lg overflow-hidden aspect-square">
              <img src={img} alt="" className="w-full h-full object-cover hover:scale-105 transition-transform duration-300" />
            </div>
          ))}
        </div>
        <div className="mt-8 text-center">
          <Button variant="outline" asChild>
            <Link to="/gallery">{t.common.viewGallery} <ArrowRight className="ml-1 h-4 w-4" /></Link>
          </Button>
        </div>
      </section>

      <Separator />

      {/* FAQ Preview */}
      <section className="container mx-auto px-4 py-16">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold tracking-tight">{t.faq.title}</h2>
        </div>
        <div className="max-w-2xl mx-auto">
          <Accordion type="single" collapsible>
            {t.faq.list.slice(0, 4).map((item, i) => (
              <AccordionItem key={i} value={`faq-${i}`}>
                <AccordionTrigger className="text-left">{item.q}</AccordionTrigger>
                <AccordionContent>{item.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
          <div className="mt-6 text-center">
            <Button variant="link" asChild>
              <Link to="/faq">{t.common.viewAll} <ArrowRight className="ml-1 h-4 w-4" /></Link>
            </Button>
          </div>
        </div>
      </section>

      <Separator />

      {/* Location */}
      <section className="container mx-auto px-4 py-16">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold tracking-tight">{t.contact.title}</h2>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <MapPin className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
              <div>
                <p className="font-medium">{t.contact.address}</p>
                <p className="text-sm text-muted-foreground">{t.contact.addressText}</p>
                <p className="text-sm text-muted-foreground">{t.contact.landmark}</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Phone className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
              <div>
                <p className="font-medium">{t.contact.phone}</p>
                <a href="tel:+919289934130" className="text-sm text-muted-foreground hover:text-primary">{t.contact.phoneNumber}</a>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Clock className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
              <div>
                <p className="font-medium">{t.contact.hours}</p>
                <p className="text-sm text-muted-foreground whitespace-pre-line">{t.contact.hoursText}</p>
              </div>
            </div>
            <Button asChild className="mt-4">
              <Link to="/contact">{t.common.sendMessage} <ArrowRight className="ml-1 h-4 w-4" /></Link>
            </Button>
          </div>
          <div className="rounded-xl overflow-hidden h-64 md:h-auto bg-muted">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3507.8!2d77.0874!3d28.4257!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjjCsDI1JzMyLjUiTiA3N8KwMDUnMTQuNiJF!5e0!3m2!1sen!2sin!4v1"
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: 256 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Juniper Grove Location"
            />
          </div>
        </div>
      </section>
    </div>
  )
}
