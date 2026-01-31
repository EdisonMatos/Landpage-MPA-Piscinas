import { useState, useEffect, lazy, Suspense } from 'react'

import NavbarSection from '../components/sections/NavbarSection'
import HeroSection from '../components/sections/HeroSection'

// LAZY
const AboutUs = lazy(() => import('../components/sections/AboutUs'))
const Numbers = lazy(() => import('../components/sections/Numbers'))
const OurProducts = lazy(() => import('../components/sections/OurProducts'))
const AvoidAccidents = lazy(
  () => import('../components/sections/AvoidAcidents'),
)
const CtaWhatsapp = lazy(() => import('../components/sections/CtaWhatsapp'))
const Courses = lazy(() => import('../components/sections/Courses'))
const FrequentlyAskedQuestions = lazy(
  () => import('../components/sections/FrenquentlyAskedQuestions'),
)
const Footer = lazy(() => import('../components/sections/Footer'))

const BackToTopButton = lazy(
  () => import('../components/interactives/BackToTopButton'),
)
const FloatingWhatsappButton = lazy(
  () => import('../components/interactives/FloatingWhatsappButton'),
)

// Carrosséis
const BannersCarouselDesktop = lazy(
  () => import('../components/sections/BannersCarouselDesktop'),
)
const PhoneBannersCarousel = lazy(
  () => import('../components/sections/BannersCarouselPhone'),
)
const TabletBannersCarousel = lazy(
  () => import('../components/sections/BannersCarouselTablet'),
)

export default function ImportPage() {
  const [carouselComponent, setCarouselComponent] = useState(null)
  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth

      if (width <= 639) {
        setCarouselComponent(<PhoneBannersCarousel />)
      } else if (width <= 1023) {
        setCarouselComponent(<TabletBannersCarousel />)
      } else {
        setCarouselComponent(<BannersCarouselDesktop />)
      }
    }

    handleResize()
    window.addEventListener('resize', handleResize)

    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return (
    <>
      {/* LCP */}
      <NavbarSection />

      <main>
        <HeroSection />

        {/* FORA DA LCP */}
        <Suspense fallback={null}>
          <AboutUs />
          <Numbers />
          <OurProducts />
          <AvoidAccidents />
          <CtaWhatsapp />
          <Courses />

          {carouselComponent}

          <FrequentlyAskedQuestions />
          <BackToTopButton />
          <FloatingWhatsappButton />
          <Footer />
        </Suspense>
      </main>
    </>
  )
}
