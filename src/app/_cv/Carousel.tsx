'use client'

import React, {FunctionComponent, useRef, useState} from 'react'
import {Swiper, SwiperSlide} from 'swiper/react'
import { Swiper as SwiperType } from "swiper";
import {Autoplay, Pagination} from 'swiper/modules'

import 'swiper/css';
import 'swiper/css/pagination'
import Image from 'next/image'
import CarouselButton from './CarouselButton';

const Carousel: FunctionComponent = () => {
  const swiperRef = useRef<SwiperType | null>(null)

  return (
    <div className='w-[1200px] bg-transparent'>
      <Swiper
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        cssMode={true}
        loop={true}
        modules={[Pagination]}
        pagination={{
          clickable: true,
          horizontalClass: 'project-pagination'
        }}
        className='!overflow-visible'
        direction={'horizontal'}
      >
        <SwiperSlide>
          <img src="/images/Screenshot 2025-09-10 133108.png" alt="item" className='w-full' />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/images/Screenshot 2025-09-10 133108.png" alt="item" className='w-full' />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/images/Screenshot 2025-09-10 133108.png" alt="item" className='w-full' />
        </SwiperSlide>
        <CarouselButton navigationDirection={'prev'} onClickHandler={() => swiperRef.current!.slidePrev()} />
        <CarouselButton navigationDirection={'next'} onClickHandler={() => swiperRef.current!.slideNext()} />
      </Swiper>
    </div>
  )
}

export default Carousel
