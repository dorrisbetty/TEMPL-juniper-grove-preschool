import { useState } from 'react'
import { useLanguage } from '@/lib/i18n'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'

const galleryItems = [
  { src: '/facility-classroom.webp', category: 'classrooms' },
  { src: '/facility-outdoor.webp', category: 'outdoor' },
  { src: '/gallery-event.webp', category: 'events' },
  { src: '/gallery-art.webp', category: 'art' },
  { src: '/gallery-outdoor-play.webp', category: 'outdoor' },
  { src: '/facility-library.webp', category: 'classrooms' },
  { src: '/facility-artroom.webp', category: 'art' },
  { src: '/facility-music.webp', category: 'classrooms' },
  { src: '/programs-acorn.webp', category: 'classrooms' },
  { src: '/programs-willow.webp', category: 'classrooms' },
  { src: '/programs-fern.webp', category: 'art' },
  { src: '/programs-cedar.webp', category: 'classrooms' },
  { src: '/programs-oak.webp', category: 'classrooms' },
  { src: '/hero-main.webp', category: 'events' },
]

export function GalleryPage() {
  const { t } = useLanguage()
  const [activeTab, setActiveTab] = useState('all')

  const filtered = activeTab === 'all' ? galleryItems : galleryItems.filter(item => item.category === activeTab)

  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="bg-primary/5 py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-extrabold tracking-tight">{t.gallery.title}</h1>
          <p className="mt-2 text-lg text-muted-foreground">{t.gallery.subtitle}</p>
        </div>
      </section>

      {/* Gallery */}
      <section className="container mx-auto px-4 py-16">
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="flex flex-wrap gap-1 h-auto mb-8">
            {(Object.keys(t.gallery.categories) as Array<keyof typeof t.gallery.categories>).map((key) => (
              <TabsTrigger key={key} value={key} className="text-sm">
                {t.gallery.categories[key]}
              </TabsTrigger>
            ))}
          </TabsList>
          <TabsContent value={activeTab} className="mt-0">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
              {filtered.map((item, i) => (
                <div key={i} className="rounded-xl overflow-hidden aspect-square group cursor-pointer">
                  <img
                    src={item.src}
                    alt=""
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </section>
    </div>
  )
}
