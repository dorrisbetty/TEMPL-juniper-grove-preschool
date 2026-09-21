import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import { PageLayout } from '@/components/shared/page-layout'
import { HomePage } from '@/pages/home'
import { AboutPage } from '@/pages/about'
import { ProgramsPage } from '@/pages/programs'
import { AdmissionsPage } from '@/pages/admissions'
import { FacilitiesPage } from '@/pages/facilities'
import { TeamPage } from '@/pages/team'
import { GalleryPage } from '@/pages/gallery'
import { ContactPage } from '@/pages/contact'
import { FaqPage } from '@/pages/faq'

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])
  return null
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <PageLayout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/programs" element={<ProgramsPage />} />
          <Route path="/admissions" element={<AdmissionsPage />} />
          <Route path="/facilities" element={<FacilitiesPage />} />
          <Route path="/team" element={<TeamPage />} />
          <Route path="/gallery" element={<GalleryPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/faq" element={<FaqPage />} />
        </Routes>
      </PageLayout>
    </BrowserRouter>
  )
}
