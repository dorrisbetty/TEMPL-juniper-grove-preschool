import { useLanguage } from '@/lib/i18n'
import { openWhatsApp } from '@/lib/whatsapp'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Separator } from '@/components/ui/separator'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { ArrowRight, Baby, Sprout, Leaf, TreePine, GraduationCap, Clock, CheckCircle2 } from 'lucide-react'

export function ProgramsPage() {
  const { t, language } = useLanguage()

  const programKeys = ['acorn', 'willow', 'fern', 'cedar', 'oak'] as const
  const programImages: Record<string, string> = {
    acorn: '/programs-acorn.webp',
    willow: '/programs-willow.webp',
    fern: '/programs-fern.webp',
    cedar: '/programs-cedar.webp',
    oak: '/programs-oak.webp',
  }
  const programIcons = [Baby, Sprout, Leaf, TreePine, GraduationCap]

  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="bg-primary/5 py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-extrabold tracking-tight">{t.programs.title}</h1>
          <p className="mt-2 text-lg text-muted-foreground">{t.programs.subtitle}</p>
          <p className="mt-4 text-foreground/80 max-w-2xl leading-relaxed">{t.programs.intro}</p>
        </div>
      </section>

      {/* Programs */}
      <section className="container mx-auto px-4 py-16">
        <div className="space-y-12">
          {programKeys.map((key, idx) => {
            const program = t.programs[key]
            const Icon = programIcons[idx]
            const isEven = idx % 2 === 0
            return (
              <Card key={key} className="overflow-hidden">
                <div className={`grid md:grid-cols-2 ${isEven ? '' : 'md:direction-rtl'}`}>
                  <div className="relative h-64 md:h-auto">
                    <img src={programImages[key]} alt={program.name} className="w-full h-full object-cover" />
                  </div>
                  <CardContent className="p-6 md:p-8 flex flex-col justify-center">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                        <Icon className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold">{program.name}</h3>
                        <Badge variant="secondary" className="mt-1">{program.age}</Badge>
                      </div>
                    </div>
                    <p className="text-muted-foreground leading-relaxed mt-3">{program.description}</p>
                    <div className="mt-4 space-y-2">
                      {program.features.map((f, i) => (
                        <div key={i} className="flex items-center gap-2 text-sm">
                          <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0" />
                          <span>{f}</span>
                        </div>
                      ))}
                    </div>
                    <Button
                      className="mt-6 w-fit"
                      onClick={() => openWhatsApp(
                        language === 'en'
                          ? `Hi, I would like to know more about the ${program.name} program (${program.age}) at Juniper Grove.`
                          : `नमस्ते, मैं जूनिपर ग्रोव में ${program.name} कार्यक्रम (${program.age}) के बारे में और जानना चाहता/चाहती हूं।`
                      )}
                    >
                      {t.common.enquireNow} <ArrowRight className="ml-1 h-4 w-4" />
                    </Button>
                  </CardContent>
                </div>
              </Card>
            )
          })}
        </div>
      </section>

      <Separator />

      {/* Schedule */}
      <section className="bg-muted/30 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold tracking-tight text-center mb-8">{t.programs.schedule}</h2>
          <Tabs defaultValue="half" className="max-w-2xl mx-auto">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="half">{t.programs.halfDay}</TabsTrigger>
              <TabsTrigger value="full">{t.programs.fullDay}</TabsTrigger>
            </TabsList>
            <TabsContent value="half" className="mt-6">
              <Card>
                <CardContent className="p-6">
                  <div className="space-y-4">
                    {t.programs.halfDaySchedule.map((item, i) => (
                      <div key={i} className="flex items-center gap-4">
                        <Clock className="h-4 w-4 text-primary flex-shrink-0" />
                        <span className="text-sm font-mono text-muted-foreground min-w-[80px]">{item.time}</span>
                        <span className="text-sm font-medium">{item.activity}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="full" className="mt-6">
              <Card>
                <CardContent className="p-6">
                  <div className="space-y-4">
                    {t.programs.fullDaySchedule.map((item, i) => (
                      <div key={i} className="flex items-center gap-4">
                        <Clock className="h-4 w-4 text-primary flex-shrink-0" />
                        <span className="text-sm font-mono text-muted-foreground min-w-[80px]">{item.time}</span>
                        <span className="text-sm font-medium">{item.activity}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* CTA */}
      <section className="container mx-auto px-4 py-16 text-center">
        <h2 className="text-2xl font-bold">{t.programs.findProgram}</h2>
        <p className="mt-2 text-muted-foreground max-w-xl mx-auto">{t.programs.findProgramDesc}</p>
        <Button
          size="lg"
          className="mt-6"
          onClick={() => openWhatsApp(
            language === 'en'
              ? 'Hi, I need help choosing the right program for my child at Juniper Grove. Please guide me.'
              : 'नमस्ते, मुझे अपने बच्चे के लिए जूनिपर ग्रोव में सही कार्यक्रम चुनने में मदद चाहिए।'
          )}
        >
          {t.common.enquireNow} <ArrowRight className="ml-1 h-4 w-4" />
        </Button>
      </section>
    </div>
  )
}
