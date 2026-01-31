import MotionDivLeftToRight from '../animation/MotionDivLeftToRight'
import WhatsAppIcon from '../../assets/importAssets/WhatsAppIcon.webp'
import ImagesGalleryHero from '../interactives/ImagesGalleryHero'
import MotionDivDownToUp from '../animation/MotionDivDownToUp'
import slide1 from '../../assets/banners/hero/slide1.webp'
import slide2 from '../../assets/banners/hero/slide2.webp'
import slide3 from '../../assets/banners/hero/slide3.webp'
import slide4 from '../../assets/banners/hero/slide4.webp'
import slide5 from '../../assets/banners/hero/slide5.webp'
import slide6 from '../../assets/banners/hero/slide6.webp'
import slide7 from '../../assets/banners/hero/slide7.webp'
import slide8 from '../../assets/banners/hero/slide8.webp'
import bgImage from '../../assets/importAssets/bg2.webp'
import whatsappNumber from '../../abstractions/whats'

const whatsappContactLink = `https://wa.me/` + `${whatsappNumber}`

export default function HeroSection() {
  return (
    <div className="font-mainFont" id="home">
      <div className="relative w-full overflow-hidden">
        <img
          src={bgImage}
          alt="imagem de fundo"
          fetchpriority="high"
          decoding="async"
          className="absolute inset-0 w-full h-full object-cover"
        />

        <div className="relative z-10 flex items-center">
          <div className="w-full text-white justify-evenly">
            <div className="h-40 desktop3:h-46" />

            <div className="flex flex-col desktop1:flex-row mx-auto mb-[40px] w-[88%] max-w-[1110px] items-center gap-10 tablet2:gap-14 desktop3:gap-20">
              <div className="desktop1:w-[650px] flex flex-col gap-8">
                <div>
                  <div className="font-black leading-none text-center desktop1:text-left text-title3 phone1:text-title5 phone3:text-title6 tablet1:text-title7 desktop1:text-[40px]">
                    <h1>BEM VINDO AO MUNDO DAS PISCINAS!</h1>
                  </div>
                </div>

                <div>
                  <div className="text-center desktop1:text-left phone1:w-full phone1:font-medium phone1:text-paragraph4">
                    <p>
                      Aqui você será atendido de forma humanizada por
                      profissionais qualificados e preparados para esclarecer
                      suas dúvidas.
                      <br /> Continue navegando e encontre o que você procura.
                    </p>
                  </div>
                </div>

                <div className="w-full phone2:w-full tablet2:w-auto">
                  <div>
                    <div className="flex justify-center w-full desktop1:justify-start">
                      <button
                        onClick={() =>
                          window.open(whatsappContactLink, '_blank')
                        }
                        className="flex flex-row items-center justify-around w-auto h-16 transition rounded-[40px] p-6 bg-red-700 hover:bg-red-900"
                      >
                        <div className="flex p-4 text-center items-center">
                          <img
                            src={WhatsAppIcon}
                            className="h-[24px] w-[24px] mr-[24px]"
                            width={36}
                            height={36}
                            alt="WhatsApp Icon"
                          />
                          <p className="flex items-center leading-none text-white text-title1">
                            Fale com um consultor
                          </p>
                        </div>
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* <div className="desktop1:w-[510px] desktop1:h-[350px] flex items-center">
                <div>
                  <ImagesGalleryHero
                    slide1={slide1}
                    slide2={slide2}
                    slide3={slide3}
                    slide4={slide4}
                    slide5={slide5}
                    slide6={slide6}
                    slide7={slide7}
                    slide8={slide8}
                  />
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
