import ImagesGallery2Slides from '../interactives/ImagesGallery2Slides'
import imgAtendimentoPhone from '../../assets/banners/bannersCarousel/atendimento-phone.webp'
import imgEntregasPhone from '../../assets/banners/bannersCarousel/entregas-phone.webp'
import MotionDivLeftToRight from '../animation/MotionDivLeftToRight'

export default function PhoneBannersCarousel() {
  return (
    <MotionDivLeftToRight>
      <div className="full py-[26px] phone3:py-[48px] flex justify-center">
        <div className="w-full max-w-[1110px] h-auto overflow-hidden">
          <ImagesGallery2Slides
            slide1={imgAtendimentoPhone}
            slide2={imgEntregasPhone}
          />
        </div>
      </div>
    </MotionDivLeftToRight>
  )
}
