import PropTypes from 'prop-types'

export default function ImgCodeDescCard(props) {
  const { img, description, code, alt } = props

  ImgCodeDescCard.propTypes = {
    img: PropTypes.any,
    description: PropTypes.any,
    code: PropTypes.any,
    alt: PropTypes.any,
  }

  return (
    <div className="w-full relative min-h-[360px] phone3:w-[46%] tablet1:w-[47%] tablet2:w-[30.5%] desktop1:w-[30.6%] desktop3:w-[31%] bg-white p-[15px] rounded-[10px] flex flex-col justify-between gap-[10px] overflow-hidden">
      <div className="flex justify-center items-center h-[200px] ">
        <img src={img} alt={alt} className="max-h-[190px] max-w-[150px]" />
      </div>
      <p className="font-medium text-left font-mainFont text-paragraph3 text-quaternary">
        Código: {code}
      </p>
      <h3 className="font-medium text-left text-black font-mainFont text-paragraph3">
        Descrição
      </h3>
      <p className="text-left font-mainFont text-paragraph3 text-quaternary">
        {description}
      </p>

      <div className="bg-gradient-to-bl from-red-400 to-red-700 w-full absolute bottom-0 right-0 h-2"></div>
    </div>
  )
}
