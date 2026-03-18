"use client"

import React, {FunctionComponent, useRef, useState} from "react"
import {Swiper, SwiperSlide} from "swiper/react"
import { Swiper as SwiperType } from "swiper";
import {Autoplay, Pagination} from "swiper/modules"

import "swiper/css";
import "swiper/css/pagination"
import Image from "next/image"
import CarouselButton from "@/app/_home/CarouselButton"

const Carousel: FunctionComponent = () => {
  const swiperRef = useRef<SwiperType | null>(null)
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div className="relative z-10 min-w-full h-[600px] lg:min-w-[300px] md:h-[450px] md:col-start-1 md:row-start-2 md:row-span-2 lg:row-start-auto 3xl:min-w-[400px] 3xl:h-[600px]" onMouseOver={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
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
