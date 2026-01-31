import React, { useEffect, useState } from 'react'
import ImageGallery from 'react-image-gallery'
import PropTypes from 'prop-types'
import 'react-image-gallery/styles/css/image-gallery.css'

export default function ImagesGalleryHero({
  slide1,
  slide2,
  slide3,
  slide4,
  slide5,
  slide6,
  slide7,
  slide8,
}) {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const images = [
    {
      original: slide1,
      originalAlt: 'Produto para limpeza de piscina em São Bernardo do Campo',
      loading: 'eager', // primeira imagem
    },
    {
      original: slide2,
      originalAlt: 'Produto para tratamento de água de piscina em São Paulo',
      loading: 'lazy',
    },
    {
      original: slide3,
      originalAlt: 'Cloros para tratamento de piscinas no ABC Paulista',
      loading: 'lazy',
    },
    {
      original: slide4,
      originalAlt: 'Cloros para tratamento de piscinas no Grande ABC Paulista',
      loading: 'lazy',
    },
    {
      original: slide5,
      originalAlt: 'Cloros para tratamento de piscinas em São Bernardo',
      loading: 'lazy',
    },
    {
      original: slide6,
      originalAlt: 'Produtos auxiliares para piscina em SBC - SP',
      loading: 'lazy',
    },
    {
      original: slide7,
      originalAlt: 'Construção de piscinas na cidade de São Paulo',
      loading: 'lazy',
    },
    {
      original: slide8,
      originalAlt: 'Acessórios e produtos para piscinas em SBC',
      loading: 'lazy',
    },
  ]

  if (!mounted) {
    return (
      <img
        src={slide1}
        alt="Produto para limpeza de piscina em São Bernardo do Campo"
        className="w-full h-full object-cover rounded-lg"
        fetchpriority="high"
        decoding="async"
      />
    )
  }

  return (
    <ImageGallery
      items={images}
      showBullets={false}
      autoPlay={true}
      showFullscreenButton={false}
      useBrowserFullscreen={false}
      showPlayButton={false}
      showThumbnails={false}
      showNav={false}
      slideInterval={2500}
      lazyLoad={true}
    />
  )
}

ImagesGalleryHero.propTypes = {
  slide1: PropTypes.any,
  slide2: PropTypes.any,
  slide3: PropTypes.any,
  slide4: PropTypes.any,
  slide5: PropTypes.any,
  slide6: PropTypes.any,
  slide7: PropTypes.any,
  slide8: PropTypes.any,
}
