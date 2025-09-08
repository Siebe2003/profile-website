import React, {FunctionComponent} from 'react'
import {SlArrowDown, SlArrowUp} from 'react-icons/sl'

interface CarouselButtonProps {
    navigationDirection: 'prev' | 'next'
    onClickHandler: () => void
    isHovered: boolean
}

const CarouselButton: FunctionComponent<CarouselButtonProps> = ({navigationDirection, onClickHandler, isHovered}) => {
  const classes = `absolute z-10 bg-white/30 active:bg-white/70 hover:bg-white/70 cursor-pointer w-full h-8 ${navigationDirection === 'prev' ? 'top-0' : 'bottom-0'} flex justify-center items-center ${!isHovered && '2xl:hidden'}`

  return (
    <button
      className={classes}
      onClick={onClickHandler}>
        {navigationDirection === 'prev' ? <SlArrowUp className="text-3xl"/> : <SlArrowDown className="text-3xl"/>}
    </button>
  )
}

export default CarouselButton
