import { useState, useEffect } from 'react'
import AboutUs from '../components/sections/AboutUs'
import BackToTopButton from '../components/interactives/BackToTopButton'
import FloatingWhatsappButton from '../components/interactives/FloatingWhatsappButton'
import BannersCarousel from '../components/sections/BannersCarouselDesktop'
import OurProducts from '../components/sections/OurProducts'
import FrequentlyAskedQuestions from '../components/sections/FrenquentlyAskedQuestions'
import Courses from '../components/sections/Courses'
import AvoidAccidents from '../components/sections/AvoidAcidents'
import Numbers from '../components/sections/Numbers'
import NavbarSection from '../components/sections/NavbarSection'
import HeroSection from '../components/sections/HeroSection'
import CtaWhatsapp from '../components/sections/CtaWhatsapp'
import Footer from '../components/sections/Footer'
import PhoneBannersCarousel from '../components/sections/BannersCarouselPhone'
import TabletBannersCarousel from '../components/sections/BannersCarouselTablet'

export default function ImportPage() {
  const [carouselComponent, setCarouselComponent] = useState(null)

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth
      if (width <= 639) {
        setCarouselComponent(<PhoneBannersCarousel />)
      } else if (width >= 640 && width <= 1023) {
        setCarouselComponent(<TabletBannersCarousel />)
      } else {
        setCarouselComponent(<BannersCarousel />)
      }
    }

    handleResize()

    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return (
    <div>
      <NavbarSection />
      <HeroSection />
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
    </div>
  )
}
