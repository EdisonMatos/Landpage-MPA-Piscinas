import SectionContent from '../sectionElements/SectionContent'
import imgCta from '../../assets/importAssets/CtaWhatsapp.webp'
import imgBackground from '../../assets/importAssets/bg2.webp'
import WhatsAppIcon from '../../assets/importAssets/WhatsAppIcon.webp'
import MotionDivUpToDown from '../animation/MotionDivUpToDown'
import MotionDivDownToUp from '../animation/MotionDivDownToUp'
import whatsappNumber from '../../abstractions/whats'
import MotionDivRightToLeft from '../animation/MotionDivRightToLeft'

const whatsappContactLink = `https://wa.me/` + `${whatsappNumber}`

export default function CtaWhatsapp() {
  return (
    <div
      className="mt-12 phone1:mt-[15%] phone2:mt-[20%] phone3:mt-[20%] bg-center bg-cover tablet1:mt-28"
      style={{
        backgroundImage: `url(${imgBackground})`,
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: 'fixed',
        backgroundColor: '',
      }}
      id="contact"
    >
      <SectionContent>
        <div className="flex justify-center w-full font-mainFont">
          <div className="w-[88%] max-w-[1110px] flex flex-row items-end justify-between h-28 phone1:h-40 phone3:h-48 desktop1:h-60">
            <div className="flex flex-col w-full  justify-evenly items-left h-28 phone1:h-40 phone3:h-48 desktop1:h-52 desktop1:mb-[24px]">
              <h1 className="text-left text-white text-paragraph1 phone1:text-paragraph4 phone3:text-paragraph5 max-w-32 phone3:max-w-none font-poppins tablet1:text-title2 tablet2:text-title4 desktop1:text-title5 desktop2:text-title6">
                <MotionDivUpToDown>
                  <p>
                    Contate-nos através do <strong>Whatsapp</strong>
                  </p>
                </MotionDivUpToDown>
              </h1>
              <MotionDivDownToUp>
                <div className="w-full">
                  <button className="w-full">
                    <a
                      href={whatsappContactLink}
                      className="flex flex-row items-center justify-around w-[90%] h-[32px] phone1:h-[48px] px-[8px] phone3:px-[16px] tablet1:px-[20px] transition rounded-[10px] phone3:rounded-[30px] tablet1:rounded-[40px] max-w-[128px] tablet1:h-[64px] phone3:max-w-[192px] tablet1:max-w-[380px] phone3:w-[90%] bg-red-700 hover:bg-red-900"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <img
                        src={WhatsAppIcon}
                        className="h-[24px] w-[24px]"
                        width={36}
                        height={36}
                        alt="Icone de WhatsApp"
                      ></img>
                      <p className="text-white text-center text-paragraph1 phone3:text-paragraph2 phone3:pr-[5px] tablet1:pr-[3%] tablet1:text-title1">
                        Fale com um consultor
                      </p>
                    </a>
                  </button>
                </div>
              </MotionDivDownToUp>
            </div>
            <div className="phone1:min-h-[197px] phone1:max-h-[229.39px] phone2:min-h-[229.40px] phone2:max-h-[261px] phone3:min-h-[262px] phone3:max-h-[334px] tablet1:min-h-[235px] tablet1:max-h-[292px] tablet2:min-h-[292px] tablet2:max-h-[335px] desktop1:min-h-[335px] desktop3:max-h-[335px] w-[90%] max-w-40 phone1:w-[100%] phone1:max-w-none phone3:max-w-60 tablet1:w-[45%]">
              <MotionDivRightToLeft>
                <img alt="Foto Pessoa" src={imgCta} width={240} height={335} />
              </MotionDivRightToLeft>
            </div>
          </div>
        </div>
      </SectionContent>
    </div>
  )
}
