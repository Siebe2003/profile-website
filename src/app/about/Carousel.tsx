"use client"

import React, {FunctionComponent, useRef, useState} from "react"
import {Swiper, SwiperSlide} from "swiper/react"
import { Swiper as SwiperType } from "swiper"
import {Autoplay, Pagination} from "swiper/modules"

import "swiper/css";
import "swiper/css/pagination"
import Image from "next/image"
import CarouselButton from "@/app/about/CarouselButton"

const Carousel: FunctionComponent = () => {
  const swiperRef = useRef<SwiperType | null>(null)
  const [isHovered, setIsHovered] = useState(false)
  

  return (
    <div className="relative w-[300px] h-[500px] mx-auto block" onMouseOver={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
      <CarouselButton navigationDirection={"prev"} onClickHandler={() => swiperRef.current!.slidePrev()} isHovered={isHovered} />
      <Swiper
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        cssMode={true}
        pagination={{
          clickable: true
        }}
        loop={true}
        modules={[Pagination, Autoplay]}
        className="w-full h-full"
        direction={"vertical"}
        autoplay={{
          delay: 10000
        }}
      >
        <SwiperSlide>
          <Image src="/images/hero-image-01.jpg" alt="item" width={200} height={200} className="w-full z-10"/>
        </SwiperSlide>
        <SwiperSlide>
          <Image src="/images/hero-image-01.jpg" alt="item" width={200} height={200} className="w-full z-10"/>
        </SwiperSlide>
      </Swiper>
      <CarouselButton navigationDirection={"next"} onClickHandler={() => swiperRef.current!.slideNext()} isHovered={isHovered} />
    </div>
  )
}

export default Carousel
