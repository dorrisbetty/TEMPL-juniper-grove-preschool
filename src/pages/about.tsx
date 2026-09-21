import { Link } from 'react-router-dom'
import { useLanguage } from '@/lib/i18n'
import { openWhatsApp } from '@/lib/whatsapp'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Separator } from '@/components/ui/separator'
import { Sparkles, Heart, Shield, Palette, Users, ArrowRight, CheckCircle2 } from 'lucide-react'

export function AboutPage() {
  const { t, language } = useLanguage()

  const valueIcons = {
    curiosity: Sparkles,
    kindness: Heart,
    confidence: Shield,
    creativity: Palette,
    community: Users,
  }

  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="bg-primary/5 py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-extrabold tracking-tight">{t.about.title}</h1>
          <p className="mt-2 text-lg text-muted-foreground">{t.about.subtitle}</p>
        </div>
      </section>

      {/* Story */}
      <section className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-foreground/80 leading-relaxed text-lg">{t.about.story}</p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Badge variant="secondary">{t.about.established} 2018</Badge>
              <Badge variant="secondary">{t.about.type}</Badge>
              <Badge variant="secondary">{t.about.ageGroup}</Badge>
              <Badge variant="secondary">{t.about.medium}</Badge>
            </div>
          </div>
          <img src="/hero-main.webp" alt="School" className="rounded-xl w-full aspect-video object-cover" />
        </div>
      </section>

      <Separator />

      {/* Mission & Vision */}
      <section className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 gap-8">
          <Card className="bg-primary/5 border-primary/20">
            <CardContent className="p-8">
              <h3 className="text-xl font-bold">{t.about.mission}</h3>
              <p className="mt-3 text-muted-foreground leading-relaxed">{t.about.missionText}</p>
            </CardContent>
          </Card>
          <Card className="bg-accent/30 border-accent/50">
            <CardContent className="p-8">
              <h3 className="text-xl font-bold">{t.about.vision}</h3>
              <p className="mt-3 text-muted-foreground leading-relaxed">{t.about.visionText}</p>
            </CardContent>
          </Card>
        </div>
      </section>

      <Separator />

      {/* Leadership */}
      <section className="bg-muted/30 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold tracking-tight text-center mb-10">{t.team.leadership}</h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card>
              <CardContent className="p-6 flex flex-col items-center text-center">
                <img src="/team-aarushi.webp" alt={t.about.founderName} className="w-32 h-32 rounded-full object-cover mb-4" />
                <Badge className="mb-2">{t.about.founderTitle}</Badge>
                <h3 className="text-xl font-semibold">{t.about.founderName}</h3>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{t.about.founderBio}</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 flex flex-col items-center text-center">
                <img src="/team-ridhima.webp" alt={t.about.principalName} className="w-32 h-32 rounded-full object-cover mb-4" />
                <Badge className="mb-2">{t.about.principalTitle}</Badge>
                <h3 className="text-xl font-semibold">{t.about.principalName}</h3>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{t.about.principalBio}</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold tracking-tight text-center mb-4">{t.about.philosophy}</h2>
        <p className="text-center text-muted-foreground max-w-3xl mx-auto leading-relaxed">{t.about.philosophyText}</p>
      </section>

      <Separator />

      {/* Core Values */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold tracking-tight text-center mb-10">{t.values.title}</h2>
        <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
          {(Object.keys(valueIcons) as Array<keyof typeof valueIcons>).map((key) => {
            const Icon = valueIcons[key]
            return (
              <Card key={key} className="text-center">
                <CardContent className="p-6">
                  <div className="mx-auto w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-semibold">{t.values[key]}</h3>
                  <p className="text-sm text-muted-foreground mt-2">{t.values[`${key}Desc`]}</p>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </section>

      <Separator />

      {/* Highlights */}
      <section className="bg-muted/30 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold tracking-tight text-center mb-10">{t.about.highlights}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 max-w-3xl mx-auto">
            {t.about.highlightsList.map((item, i) => (
              <div key={i} className="flex items-center gap-3 p-3 rounded-lg bg-card">
                <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0" />
                <span className="text-sm">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Milestones */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold tracking-tight text-center mb-10">{t.about.milestones}</h2>
        <div className="max-w-2xl mx-auto space-y-4">
          {t.about.milestonesList.map((item, i) => (
            <div key={i} className="flex gap-4 items-start">
              <div className="flex flex-col items-center">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <span className="text-xs font-bold text-primary">{item.year}</span>
                </div>
                {i < t.about.milestonesList.length - 1 && <div className="w-px h-6 bg-border mt-1" />}
              </div>
              <p className="text-sm text-muted-foreground pt-2">{item.event}</p>
            </div>
          ))}
        </div>
      </section>

      <Separator />

      {/* CTA */}
      <section className="container mx-auto px-4 py-16 text-center">
        <h2 className="text-2xl font-bold">{t.programs.findProgram}</h2>
        <p className="mt-2 text-muted-foreground">{t.programs.findProgramDesc}</p>
        <div className="mt-6 flex gap-3 justify-center">
          <Button
            onClick={() => openWhatsApp(
              language === 'en'
                ? 'Hi, I would like to know more about Juniper Grove Early Learning House.'
                : 'नमस्ते, मैं जूनिपर ग्रोव के बारे में और जानना चाहता/चाहती हूं।'
            )}
          >
            {t.common.enquireNow} <ArrowRight className="ml-1 h-4 w-4" />
          </Button>
          <Button variant="outline" asChild>
            <Link to="/programs">{t.common.explorePrograms}</Link>
          </Button>
        </div>
      </section>
    </div>
  )
}
