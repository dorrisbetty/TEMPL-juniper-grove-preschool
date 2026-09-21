import { useLanguage } from '@/lib/i18n'
import { openWhatsApp } from '@/lib/whatsapp'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Separator } from '@/components/ui/separator'
import { ArrowRight, Users } from 'lucide-react'

export function TeamPage() {
  const { t, language } = useLanguage()

  const teamPhotos = ['/team-meher.webp', '/team-nishka.webp', '/team-yashvi.webp', '/team-tvesha.webp', '/team-armaan.webp']

  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="bg-primary/5 py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-extrabold tracking-tight">{t.team.title}</h1>
          <p className="mt-2 text-lg text-muted-foreground">{t.team.subtitle}</p>
          <p className="mt-4 text-foreground/80 max-w-2xl leading-relaxed">{t.team.intro}</p>
        </div>
      </section>

      {/* Leadership */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-2xl font-bold text-center mb-10">{t.team.leadership}</h2>
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <Card className="overflow-hidden">
            <div className="h-64">
              <img src="/team-aarushi.webp" alt={t.about.founderName} className="w-full h-full object-cover" />
            </div>
            <CardContent className="p-6">
              <Badge className="mb-2">{t.about.founderTitle}</Badge>
              <h3 className="text-xl font-bold">{t.about.founderName}</h3>
              <p className="text-sm text-muted-foreground mt-3 leading-relaxed">{t.about.founderBio}</p>
            </CardContent>
          </Card>
          <Card className="overflow-hidden">
            <div className="h-64">
              <img src="/team-ridhima.webp" alt={t.about.principalName} className="w-full h-full object-cover" />
            </div>
            <CardContent className="p-6">
              <Badge className="mb-2">{t.about.principalTitle}</Badge>
              <h3 className="text-xl font-bold">{t.about.principalName}</h3>
              <p className="text-sm text-muted-foreground mt-3 leading-relaxed">{t.about.principalBio}</p>
            </CardContent>
          </Card>
        </div>
      </section>

      <Separator />

      {/* Teaching Team */}
      <section className="bg-muted/30 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-center mb-10">{t.team.teachingTeam}</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {t.team.members.map((member, i) => (
              <Card key={i} className="text-center">
                <CardContent className="p-6">
                  <img src={teamPhotos[i]} alt={member.name} className="w-24 h-24 rounded-full mx-auto object-cover mb-4" />
                  <h3 className="font-semibold">{member.name}</h3>
                  <p className="text-xs text-muted-foreground mt-1">{member.role}</p>
                  <Badge variant="secondary" className="mt-2 text-xs">{member.spec}</Badge>
                  <p className="text-xs text-primary mt-2 font-medium">{member.exp} {t.team.experience}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Ratio */}
      <section className="container mx-auto px-4 py-16">
        <Card className="max-w-2xl mx-auto bg-primary/5 border-primary/20">
          <CardContent className="p-8 text-center">
            <Users className="h-8 w-8 text-primary mx-auto mb-4" />
            <h3 className="text-xl font-bold">{t.team.ratio}</h3>
            <p className="text-4xl font-extrabold text-primary mt-2">{t.team.ratioValue}</p>
            <p className="text-muted-foreground mt-3">{t.team.ratioDesc}</p>
          </CardContent>
        </Card>
      </section>

      <Separator />

      {/* Join Team */}
      <section className="container mx-auto px-4 py-16 text-center">
        <h2 className="text-2xl font-bold">{t.team.joinUs}</h2>
        <p className="mt-2 text-muted-foreground">{t.team.joinUsDesc}</p>
        <Button
          size="lg"
          className="mt-6"
          onClick={() => openWhatsApp(
            language === 'en'
              ? 'Hi, I am interested in career opportunities at Juniper Grove Early Learning House. Please share details about available positions.'
              : 'नमस्ते, मैं जूनिपर ग्रोव में करियर के अवसरों में रुचि रखता/रखती हूं। कृपया उपलब्ध पदों के बारे में बताएं।'
          )}
        >
          {t.common.enquireNow} <ArrowRight className="ml-1 h-4 w-4" />
        </Button>
      </section>
    </div>
  )
}
