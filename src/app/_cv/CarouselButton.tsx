import React, {FunctionComponent} from 'react'
import {SlArrowLeft, SlArrowRight} from 'react-icons/sl'

interface CarouselButtonProps {
    navigationDirection: 'prev' | 'next'
    onClickHandler: () => void
}

const CarouselButton: FunctionComponent<CarouselButtonProps> = ({navigationDirection, onClickHandler}) => {
  const classes = `top-[50%] transform absolute z-10 cursor-pointer ${navigationDirection === 'prev' ? '-left-20' : '-right-20'} flex justify-center items-center !bg-white/50 hover:!bg-white/70 p-2 rounded-full`

  return (
    <button
      className={classes}
      onClick={onClickHandler}>
        {navigationDirection === 'prev' ? <SlArrowLeft className="text-3xl"/> : <SlArrowRight className="text-3xl"/>}
    </button>
  )
}

export default CarouselButton
