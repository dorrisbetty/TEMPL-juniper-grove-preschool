import { useState } from 'react'
import { useLanguage } from '@/lib/i18n'
import { openWhatsApp } from '@/lib/whatsapp'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Separator } from '@/components/ui/separator'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { ArrowRight, CheckCircle2, FileText, Bus } from 'lucide-react'

export function AdmissionsPage() {
  const { t, language } = useLanguage()
  const [form, setForm] = useState({ childName: '', childAge: '', parentName: '', phone: '', program: '' })

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    const message = language === 'en'
      ? `Hi, I am interested in admission at Juniper Grove for the 2026-27 session.\n\nChild's Name: ${form.childName}\nChild's Age: ${form.childAge}\nParent's Name: ${form.parentName}\nPhone: ${form.phone}\nPreferred Program: ${form.program}\n\nPlease guide me through the process.`
      : `नमस्ते, मैं 2026-27 सत्र के लिए जूनिपर ग्रोव में प्रवेश में रुचि रखता/रखती हूं।\n\nबच्चे का नाम: ${form.childName}\nबच्चे की उम्र: ${form.childAge}\nअभिभावक का नाम: ${form.parentName}\nफ़ोन: ${form.phone}\nपसंदीदा कार्यक्रम: ${form.program}\n\nकृपया प्रक्रिया में मेरा मार्गदर्शन करें।`
    openWhatsApp(message)
  }

  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="bg-primary/5 py-16">
        <div className="container mx-auto px-4">
          <Badge className="mb-3 bg-primary/20 text-primary border-primary/30">{t.hero.admissionOpen}</Badge>
          <h1 className="text-4xl font-extrabold tracking-tight">{t.admissions.title}</h1>
          <p className="mt-2 text-lg text-muted-foreground">{t.admissions.subtitle}</p>
        </div>
      </section>

      {/* Eligibility */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-2xl font-bold text-center mb-8">{t.admissions.eligibility}</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
          {t.admissions.eligibilityList.map((item, i) => (
            <Card key={i} className="text-center">
              <CardContent className="p-6">
                <h3 className="font-bold text-lg">{item.level}</h3>
                <p className="text-sm text-muted-foreground mt-1">{item.age}</p>
              </CardContent>
            </Card>
          ))}
        </div>
        <div className="text-center mt-6">
          <Badge variant="outline" className="text-base px-4 py-2">{t.admissions.registrationFee}: {t.admissions.registrationFeeAmount}</Badge>
        </div>
      </section>

      <Separator />

      {/* Admission Process */}
      <section className="bg-muted/30 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-center mb-10">{t.admissions.process}</h2>
          <div className="max-w-3xl mx-auto">
            <div className="space-y-6">
              {t.admissions.processSteps.map((step, i) => (
                <div key={i} className="flex gap-4 items-start">
                  <div className="w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center flex-shrink-0 font-bold">
                    {step.step}
                  </div>
                  <div className="pt-1">
                    <h3 className="font-semibold">{step.title}</h3>
                    <p className="text-sm text-muted-foreground mt-1">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Documents */}
      <section className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <div className="flex items-center gap-2 mb-6">
              <FileText className="h-5 w-5 text-primary" />
              <h2 className="text-2xl font-bold">{t.admissions.documents}</h2>
            </div>
            <div className="space-y-3">
              {t.admissions.documentsList.map((doc, i) => (
                <div key={i} className="flex items-center gap-3">
                  <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0" />
                  <span className="text-sm">{doc}</span>
                </div>
              ))}
            </div>
          </div>
          <div>
            <div className="flex items-center gap-2 mb-6">
              <Bus className="h-5 w-5 text-primary" />
              <h2 className="text-2xl font-bold">{t.admissions.transport}</h2>
            </div>
            <p className="text-muted-foreground leading-relaxed">{t.admissions.transportText}</p>
            <Button
              variant="outline"
              className="mt-4"
              onClick={() => openWhatsApp(
                language === 'en'
                  ? 'Hi, I would like to know about the transportation facility at Juniper Grove. Which sectors are covered?'
                  : 'नमस्ते, मैं जूनिपर ग्रोव की परिवहन सुविधा के बारे में जानना चाहता/चाहती हूं। कौन से सेक्टर कवर होते हैं?'
              )}
            >
              {t.common.enquireNow}
            </Button>
          </div>
        </div>
      </section>

      <Separator />

      {/* Inquiry Form */}
      <section className="bg-muted/30 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-lg mx-auto">
            <h2 className="text-2xl font-bold text-center mb-2">{t.admissions.formTitle}</h2>
            <p className="text-sm text-muted-foreground text-center mb-8">{t.admissions.formDesc}</p>
            <Card>
              <CardContent className="p-6">
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <Label htmlFor="childName">{t.common.childName}</Label>
                    <Input id="childName" value={form.childName} onChange={(e) => setForm({ ...form, childName: e.target.value })} required />
                  </div>
                  <div>
                    <Label htmlFor="childAge">{t.common.childAge}</Label>
                    <Input id="childAge" value={form.childAge} onChange={(e) => setForm({ ...form, childAge: e.target.value })} required placeholder="e.g. 3 years" />
                  </div>
                  <div>
                    <Label htmlFor="parentName">{t.common.parentName}</Label>
                    <Input id="parentName" value={form.parentName} onChange={(e) => setForm({ ...form, parentName: e.target.value })} required />
                  </div>
                  <div>
                    <Label htmlFor="phone">{t.common.phone}</Label>
                    <Input id="phone" type="tel" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} required />
                  </div>
                  <div>
                    <Label htmlFor="program">{t.common.preferredProgram}</Label>
                    <select
                      id="program"
                      value={form.program}
                      onChange={(e) => setForm({ ...form, program: e.target.value })}
                      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                      required
                    >
                      <option value="">{t.common.selectProgram}</option>
                      <option value={t.programs.acorn.name}>{t.programs.acorn.name} ({t.programs.acorn.age})</option>
                      <option value={t.programs.willow.name}>{t.programs.willow.name} ({t.programs.willow.age})</option>
                      <option value={t.programs.fern.name}>{t.programs.fern.name} ({t.programs.fern.age})</option>
                      <option value={t.programs.cedar.name}>{t.programs.cedar.name} ({t.programs.cedar.age})</option>
                      <option value={t.programs.oak.name}>{t.programs.oak.name} ({t.programs.oak.age})</option>
                    </select>
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
    </div>
  )
}
