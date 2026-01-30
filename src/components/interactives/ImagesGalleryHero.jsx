import React from 'react'
import ImageGallery from 'react-image-gallery'
import PropTypes from 'prop-types'
import 'react-image-gallery/styles/css/image-gallery.css'

export default function ImagesGalleryHero(props) {
  const { slide1, slide2, slide3, slide4, slide5, slide6, slide7, slide8 } =
    props

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

  const images = [
    {
      original: slide1,
      originalAlt: 'Produto para limpeza de piscina em São Bernardo do Campo',
    },
    {
      original: slide2,
      originalAlt: 'Produto para tratamento de água de piscina em São Paulo',
    },
    {
      original: slide3,
      originalAlt: 'Cloros para tratamento de piscinas no ABC Paulista',
    },
    {
      original: slide4,
      originalAlt: 'Cloros para tratamento de piscinas no Grande ABC Paulista',
    },
    {
      original: slide5,
      originalAlt: 'Cloros para tratamento de piscinas em São Bernardo',
    },
    {
      original: slide6,
      originalAlt: 'Produtos auxiliares para piscina em SBC - SP',
    },
    {
      original: slide7,
      originalAlt: 'Construção de piscinas na cidade de São Paulo',
    },
    {
      original: slide8,
      originalAlt: 'Acessórios e produtos para piscinas em SBC',
    },
  ]

  return (
    <div>
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
      />
    </div>
  )
}
