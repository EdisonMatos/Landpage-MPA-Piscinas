import { useState } from 'react'
import Checkbox from '@mui/material/Checkbox'
import FormControlLabel from '@mui/material/FormControlLabel'
import ImgCodeDescButtonCard from '../cards/ImgCodeDescButtonCard'
import HthProducts from '../util/productsData/hth/HthProducts'

export default function ProductsList() {
  const [selectedCategory, setSelectedCategory] = useState('all')

  const handleCheckboxChange = (category) => {
    setSelectedCategory(category)
  }

  return (
    <div className="bg-quinary">
      <div className="w-[88%] max-w-[1110px] mx-auto py-[26px] phone3:py-[48px] flex flex-row">
        <div className="flex flex-col items-start justify-between tablet2:flex-col desktop1:flex-row font-mainFont">
          <div className="w-full desktop1:w-[21%]">
            <h3 className="mb-[10px] w-full text-center bg-white rounded-[10px] p-[15px] tablet2:mb-[10px] font-semibold text-paragraph5 desktop1:text-paragraph4 text-secondary desktop1:w-auto">
              Filtrar por categoria
            </h3>
            <div className="bg-white w-full desktop1:flex-col mb-[32px] flex flex-col phone3:justify-evenly phone3:flex-row p-[20px] phone3:p-4 rounded-[10px]">
              <FormControlLabel
                control={
                  <Checkbox
                    checked={selectedCategory === 'all'}
                    onChange={() => handleCheckboxChange('all')}
                  />
                }
                label={<span className="font-mainFont">Todos</span>}
              />
              <FormControlLabel
                control={
                  <Checkbox
                    checked={selectedCategory === 'cloros'}
                    onChange={() => handleCheckboxChange('cloros')}
                  />
                }
                label={<span className="font-mainFont">Cloros</span>}
              />
              <FormControlLabel
                control={
                  <Checkbox
                    checked={selectedCategory === 'auxiliares'}
                    onChange={() => handleCheckboxChange('auxiliares')}
                  />
                }
                label={<span className="font-mainFont">Auxiliares</span>}
              />
            </div>
          </div>
          <div className="flex flex-wrap items-start justify-start w-full gap-7 desktop1:w-[76%]">
            {(selectedCategory === 'cloros' || selectedCategory === 'all') && (
              <>
                <ImgCodeDescButtonCard
                  img={HthProducts.cloros.hthCloros1.img}
                  code={HthProducts.cloros.hthCloros1.code}
                  description={HthProducts.cloros.hthCloros1.description}
                  alt={HthProducts.cloros.hthCloros1.description}
                  button1Label="Baixar Ficha FISPQ"
                  button1Link={HthProducts.cloros.hthCloros1.fispqLink}
                  category={HthProducts.cloros.hthCloros1.category}
                />
                <ImgCodeDescButtonCard
                  img={HthProducts.cloros.hthCloros2.img}
                  code={HthProducts.cloros.hthCloros2.code}
                  description={HthProducts.cloros.hthCloros2.description}
                  alt={HthProducts.cloros.hthCloros2.description}
                  button1Label="Baixar Ficha FISPQ"
                  button1Link={HthProducts.cloros.hthCloros2.fispqLink}
                  category={HthProducts.cloros.hthCloros2.category}
                />
                {/* <ImgCodeDescButtonCard
                  img={HthProducts.cloros.hthCloros3.img}
                  code={HthProducts.cloros.hthCloros3.code}
                  description={HthProducts.cloros.hthCloros3.description}
                  alt={HthProducts.cloros.hthCloros3.description}
                  button1Label="Baixar Ficha FISPQ"
                  button1Link={HthProducts.cloros.hthCloros3.fispqLink}
                  category={HthProducts.cloros.hthCloros3.category}
                /> */}
                {/* <ImgCodeDescButtonCard
                  img={HthProducts.cloros.hthCloros4.img}
                  code={HthProducts.cloros.hthCloros4.code}
                  description={HthProducts.cloros.hthCloros4.description}
                  alt={HthProducts.cloros.hthCloros4.description}
                  button1Label="Baixar Ficha FISPQ"
                  button1Link={HthProducts.cloros.hthCloros4.fispqLink}
                  category={HthProducts.cloros.hthCloros4.category}
                /> */}
                {/* <ImgCodeDescButtonCard
                  img={HthProducts.cloros.hthCloros5.img}
                  code={HthProducts.cloros.hthCloros5.code}
                  description={HthProducts.cloros.hthCloros5.description}
                  alt={HthProducts.cloros.hthCloros5.description}
                  button1Label="Baixar Ficha FISPQ"
                  button1Link={HthProducts.cloros.hthCloros5.fispqLink}
                  category={HthProducts.cloros.hthCloros5.category}
                /> */}
                <ImgCodeDescButtonCard
                  img={HthProducts.cloros.hthCloros6.img}
                  code={HthProducts.cloros.hthCloros6.code}
                  description={HthProducts.cloros.hthCloros6.description}
                  alt={HthProducts.cloros.hthCloros6.description}
                  button1Label="Baixar Ficha FISPQ"
                  button1Link={HthProducts.cloros.hthCloros6.fispqLink}
                  category={HthProducts.cloros.hthCloros6.category}
                />
                {/* <ImgCodeDescButtonCard
                  img={HthProducts.cloros.hthCloros7.img}
                  code={HthProducts.cloros.hthCloros7.code}
                  description={HthProducts.cloros.hthCloros7.description}
                  alt={HthProducts.cloros.hthCloros7.description}
                  button1Label="Baixar Ficha FISPQ"
                  button1Link={HthProducts.cloros.hthCloros7.fispqLink}
                  category={HthProducts.cloros.hthCloros7.category}
                /> */}
                <ImgCodeDescButtonCard
                  img={HthProducts.cloros.hthCloros8.img}
                  code={HthProducts.cloros.hthCloros8.code}
                  description={HthProducts.cloros.hthCloros8.description}
                  alt={HthProducts.cloros.hthCloros8.description}
                  button1Label="Baixar Ficha FISPQ"
                  button1Link={HthProducts.cloros.hthCloros8.fispqLink}
                  category={HthProducts.cloros.hthCloros8.category}
                />
                <ImgCodeDescButtonCard
                  img={HthProducts.cloros.hthCloros9.img}
                  code={HthProducts.cloros.hthCloros9.code}
                  description={HthProducts.cloros.hthCloros9.description}
                  alt={HthProducts.cloros.hthCloros9.description}
                  button1Label="Baixar Ficha FISPQ"
                  button1Link={HthProducts.cloros.hthCloros9.fispqLink}
                  category={HthProducts.cloros.hthCloros9.category}
                />
                <ImgCodeDescButtonCard
                  img={HthProducts.cloros.hthCloros10.img}
                  code={HthProducts.cloros.hthCloros10.code}
                  description={HthProducts.cloros.hthCloros10.description}
                  alt={HthProducts.cloros.hthCloros10.description}
                  button1Label="Baixar Ficha FISPQ"
                  button1Link={HthProducts.cloros.hthCloros10.fispqLink}
                  category={HthProducts.cloros.hthCloros10.category}
                />
                <ImgCodeDescButtonCard
                  img={HthProducts.cloros.hthCloros11.img}
                  code={HthProducts.cloros.hthCloros11.code}
                  description={HthProducts.cloros.hthCloros11.description}
                  alt={HthProducts.cloros.hthCloros11.description}
                  button1Label="Baixar Ficha FISPQ"
                  button1Link={HthProducts.cloros.hthCloros11.fispqLink}
                  category={HthProducts.cloros.hthCloros11.category}
                />
                <ImgCodeDescButtonCard
                  img={HthProducts.cloros.hthCloros12.img}
                  code={HthProducts.cloros.hthCloros12.code}
                  description={HthProducts.cloros.hthCloros12.description}
                  alt={HthProducts.cloros.hthCloros12.description}
                  button1Label="Baixar Ficha FISPQ"
                  button1Link={HthProducts.cloros.hthCloros12.fispqLink}
                  category={HthProducts.cloros.hthCloros12.category}
                />
                <ImgCodeDescButtonCard
                  img={HthProducts.cloros.hthCloros13.img}
                  code={HthProducts.cloros.hthCloros13.code}
                  description={HthProducts.cloros.hthCloros13.description}
                  alt={HthProducts.cloros.hthCloros13.description}
                  button1Label="Baixar Ficha FISPQ"
                  button1Link={HthProducts.cloros.hthCloros13.fispqLink}
                  category={HthProducts.cloros.hthCloros13.category}
                />
              </>
            )}
            {(selectedCategory === 'auxiliares' ||
              selectedCategory === 'all') && (
              <>
                <ImgCodeDescButtonCard
                  img={HthProducts.auxiliares.hthAuxiliares1.img}
                  code={HthProducts.auxiliares.hthAuxiliares1.code}
                  description={
                    HthProducts.auxiliares.hthAuxiliares1.description
                  }
                  alt={HthProducts.auxiliares.hthAuxiliares1.description}
                  button1Label="Baixar Ficha FISPQ"
                  button1Link={HthProducts.auxiliares.hthAuxiliares1.fispqLink}
                  category={HthProducts.auxiliares.hthAuxiliares1.category}
                />
                <ImgCodeDescButtonCard
                  img={HthProducts.auxiliares.hthAuxiliares2.img}
                  code={HthProducts.auxiliares.hthAuxiliares2.code}
                  description={
                    HthProducts.auxiliares.hthAuxiliares2.description
                  }
                  alt={HthProducts.auxiliares.hthAuxiliares2.description}
                  button1Label="Baixar Ficha FISPQ"
                  button1Link={HthProducts.auxiliares.hthAuxiliares2.fispqLink}
                  category={HthProducts.auxiliares.hthAuxiliares2.category}
                />
                <ImgCodeDescButtonCard
                  img={HthProducts.auxiliares.hthAuxiliares3.img}
                  code={HthProducts.auxiliares.hthAuxiliares3.code}
                  description={
                    HthProducts.auxiliares.hthAuxiliares3.description
                  }
                  alt={HthProducts.auxiliares.hthAuxiliares3.description}
                  button1Label="Baixar Ficha FISPQ"
                  button1Link={HthProducts.auxiliares.hthAuxiliares3.fispqLink}
                  category={HthProducts.auxiliares.hthAuxiliares3.category}
                />
                <ImgCodeDescButtonCard
                  img={HthProducts.auxiliares.hthAuxiliares4.img}
                  code={HthProducts.auxiliares.hthAuxiliares4.code}
                  description={
                    HthProducts.auxiliares.hthAuxiliares4.description
                  }
                  alt={HthProducts.auxiliares.hthAuxiliares4.description}
                  button1Label="Baixar Ficha FISPQ"
                  button1Link={HthProducts.auxiliares.hthAuxiliares4.fispqLink}
                  category={HthProducts.auxiliares.hthAuxiliares4.category}
                />
                <ImgCodeDescButtonCard
                  img={HthProducts.auxiliares.hthAuxiliares5.img}
                  code={HthProducts.auxiliares.hthAuxiliares5.code}
                  description={
                    HthProducts.auxiliares.hthAuxiliares5.description
                  }
                  alt={HthProducts.auxiliares.hthAuxiliares5.description}
                  button1Label="Baixar Ficha FISPQ"
                  button1Link={HthProducts.auxiliares.hthAuxiliares5.fispqLink}
                  category={HthProducts.auxiliares.hthAuxiliares5.category}
                />
                <ImgCodeDescButtonCard
                  img={HthProducts.auxiliares.hthAuxiliares6.img}
                  code={HthProducts.auxiliares.hthAuxiliares6.code}
                  description={
                    HthProducts.auxiliares.hthAuxiliares6.description
                  }
                  alt={HthProducts.auxiliares.hthAuxiliares6.description}
                  button1Label="Baixar Ficha FISPQ"
                  button1Link={HthProducts.auxiliares.hthAuxiliares6.fispqLink}
                  category={HthProducts.auxiliares.hthAuxiliares6.category}
                />
                <ImgCodeDescButtonCard
                  img={HthProducts.auxiliares.hthAuxiliares7.img}
                  code={HthProducts.auxiliares.hthAuxiliares7.code}
                  description={
                    HthProducts.auxiliares.hthAuxiliares7.description
                  }
                  alt={HthProducts.auxiliares.hthAuxiliares7.description}
                  button1Label="Baixar Ficha FISPQ"
                  button1Link={HthProducts.auxiliares.hthAuxiliares7.fispqLink}
                  category={HthProducts.auxiliares.hthAuxiliares7.category}
                />
                <ImgCodeDescButtonCard
                  img={HthProducts.auxiliares.hthAuxiliares8.img}
                  code={HthProducts.auxiliares.hthAuxiliares8.code}
                  description={
                    HthProducts.auxiliares.hthAuxiliares8.description
                  }
                  alt={HthProducts.auxiliares.hthAuxiliares8.description}
                  button1Label="Baixar Ficha FISPQ"
                  button1Link={HthProducts.auxiliares.hthAuxiliares8.fispqLink}
                  category={HthProducts.auxiliares.hthAuxiliares8.category}
                />
                <ImgCodeDescButtonCard
                  img={HthProducts.auxiliares.hthAuxiliares9.img}
                  code={HthProducts.auxiliares.hthAuxiliares9.code}
                  description={
                    HthProducts.auxiliares.hthAuxiliares9.description
                  }
                  alt={HthProducts.auxiliares.hthAuxiliares9.description}
                  button1Label="Baixar Ficha FISPQ"
                  button1Link={HthProducts.auxiliares.hthAuxiliares9.fispqLink}
                  category={HthProducts.auxiliares.hthAuxiliares9.category}
                />
                <ImgCodeDescButtonCard
                  img={HthProducts.auxiliares.hthAuxiliares10.img}
                  code={HthProducts.auxiliares.hthAuxiliares10.code}
                  description={
                    HthProducts.auxiliares.hthAuxiliares10.description
                  }
                  alt={HthProducts.auxiliares.hthAuxiliares10.description}
                  button1Label="Baixar Ficha FISPQ"
                  button1Link={HthProducts.auxiliares.hthAuxiliares10.fispqLink}
                  category={HthProducts.auxiliares.hthAuxiliares10.category}
                />
                <ImgCodeDescButtonCard
                  img={HthProducts.auxiliares.hthAuxiliares11.img}
                  code={HthProducts.auxiliares.hthAuxiliares11.code}
                  description={
                    HthProducts.auxiliares.hthAuxiliares11.description
                  }
                  alt={HthProducts.auxiliares.hthAuxiliares11.description}
                  button1Label="Baixar Ficha FISPQ"
                  button1Link={HthProducts.auxiliares.hthAuxiliares11.fispqLink}
                  category={HthProducts.auxiliares.hthAuxiliares11.category}
                />
                <ImgCodeDescButtonCard
                  img={HthProducts.auxiliares.hthAuxiliares12.img}
                  code={HthProducts.auxiliares.hthAuxiliares12.code}
                  description={
                    HthProducts.auxiliares.hthAuxiliares12.description
                  }
                  alt={HthProducts.auxiliares.hthAuxiliares12.description}
                  button1Label="Baixar Ficha FISPQ"
                  button1Link={HthProducts.auxiliares.hthAuxiliares12.fispqLink}
                  category={HthProducts.auxiliares.hthAuxiliares12.category}
                />
                <ImgCodeDescButtonCard
                  img={HthProducts.auxiliares.hthAuxiliares13.img}
                  code={HthProducts.auxiliares.hthAuxiliares13.code}
                  description={
                    HthProducts.auxiliares.hthAuxiliares13.description
                  }
                  alt={HthProducts.auxiliares.hthAuxiliares13.description}
                  button1Label="Baixar Ficha FISPQ"
                  button1Link={HthProducts.auxiliares.hthAuxiliares13.fispqLink}
                  category={HthProducts.auxiliares.hthAuxiliares13.category}
                />
                <ImgCodeDescButtonCard
                  img={HthProducts.auxiliares.hthAuxiliares14.img}
                  code={HthProducts.auxiliares.hthAuxiliares14.code}
                  description={
                    HthProducts.auxiliares.hthAuxiliares14.description
                  }
                  alt={HthProducts.auxiliares.hthAuxiliares14.description}
                  button1Label="Baixar Ficha FISPQ"
                  button1Link={HthProducts.auxiliares.hthAuxiliares14.fispqLink}
                  category={HthProducts.auxiliares.hthAuxiliares14.category}
                />
                <ImgCodeDescButtonCard
                  img={HthProducts.auxiliares.hthAuxiliares15.img}
                  code={HthProducts.auxiliares.hthAuxiliares15.code}
                  description={
                    HthProducts.auxiliares.hthAuxiliares15.description
                  }
                  alt={HthProducts.auxiliares.hthAuxiliares15.description}
                  button1Label="Baixar Ficha FISPQ"
                  button1Link={HthProducts.auxiliares.hthAuxiliares15.fispqLink}
                  category={HthProducts.auxiliares.hthAuxiliares15.category}
                />
                <ImgCodeDescButtonCard
                  img={HthProducts.auxiliares.hthAuxiliares16.img}
                  code={HthProducts.auxiliares.hthAuxiliares16.code}
                  description={
                    HthProducts.auxiliares.hthAuxiliares16.description
                  }
                  alt={HthProducts.auxiliares.hthAuxiliares16.description}
                  button1Label="Baixar Ficha FISPQ"
                  button1Link={HthProducts.auxiliares.hthAuxiliares16.fispqLink}
                  category={HthProducts.auxiliares.hthAuxiliares16.category}
                />
                <ImgCodeDescButtonCard
                  img={HthProducts.auxiliares.hthAuxiliares17.img}
                  code={HthProducts.auxiliares.hthAuxiliares17.code}
                  description={
                    HthProducts.auxiliares.hthAuxiliares17.description
                  }
                  alt={HthProducts.auxiliares.hthAuxiliares17.description}
                  button1Label="Baixar Ficha FISPQ"
                  button1Link={HthProducts.auxiliares.hthAuxiliares17.fispqLink}
                  category={HthProducts.auxiliares.hthAuxiliares17.category}
                />
                <ImgCodeDescButtonCard
                  img={HthProducts.auxiliares.hthAuxiliares18.img}
                  code={HthProducts.auxiliares.hthAuxiliares18.code}
                  description={
                    HthProducts.auxiliares.hthAuxiliares18.description
                  }
                  alt={HthProducts.auxiliares.hthAuxiliares18.description}
                  button1Label="Baixar Ficha FISPQ"
                  button1Link={HthProducts.auxiliares.hthAuxiliares18.fispqLink}
                  category={HthProducts.auxiliares.hthAuxiliares18.category}
                />
                <ImgCodeDescButtonCard
                  img={HthProducts.auxiliares.hthAuxiliares19.img}
                  code={HthProducts.auxiliares.hthAuxiliares19.code}
                  description={
                    HthProducts.auxiliares.hthAuxiliares19.description
                  }
                  alt={HthProducts.auxiliares.hthAuxiliares19.description}
                  button1Label="Baixar Ficha FISPQ"
                  button1Link={HthProducts.auxiliares.hthAuxiliares19.fispqLink}
                  category={HthProducts.auxiliares.hthAuxiliares19.category}
                />
                <ImgCodeDescButtonCard
                  img={HthProducts.auxiliares.hthAuxiliares20.img}
                  code={HthProducts.auxiliares.hthAuxiliares20.code}
                  description={
                    HthProducts.auxiliares.hthAuxiliares20.description
                  }
                  alt={HthProducts.auxiliares.hthAuxiliares20.description}
                  button1Label="Baixar Ficha FISPQ"
                  button1Link={HthProducts.auxiliares.hthAuxiliares20.fispqLink}
                  category={HthProducts.auxiliares.hthAuxiliares20.category}
                />
                <ImgCodeDescButtonCard
                  img={HthProducts.auxiliares.hthAuxiliares21.img}
                  code={HthProducts.auxiliares.hthAuxiliares21.code}
                  description={
                    HthProducts.auxiliares.hthAuxiliares21.description
                  }
                  alt={HthProducts.auxiliares.hthAuxiliares21.description}
                  button1Label="Não possui Ficha FISPQ"
                  button1Link={HthProducts.auxiliares.hthAuxiliares21.fispqLink}
                  category={HthProducts.auxiliares.hthAuxiliares21.category}
                />
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
