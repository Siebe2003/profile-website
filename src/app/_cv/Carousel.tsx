'use client'

import React, {FunctionComponent, useRef} from 'react'
import {Swiper, SwiperSlide} from 'swiper/react'
import { Swiper as SwiperType } from "swiper";
import {Pagination} from 'swiper/modules'

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
          <Image src="/images/Screenshot 2025-09-10 133108.png" alt="item" className='w-full' height={2000} width={1000} />
        </SwiperSlide>
        <SwiperSlide>
          <Image src="/images/Screenshot 2025-09-10 133108.png" alt="item" className='w-full' height={2000} width={1000} />
        </SwiperSlide>
        <SwiperSlide>
          <Image src="/images/Screenshot 2025-09-10 133108.png" alt="item" className='w-full' height={2000} width={1000} />
        </SwiperSlide>
        <CarouselButton navigationDirection={'prev'} onClickHandler={() => swiperRef.current!.slidePrev()} />
        <CarouselButton navigationDirection={'next'} onClickHandler={() => swiperRef.current!.slideNext()} />
      </Swiper>
    </div>
  )
}

export default Carousel
