"use client";

import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { lavenderPath, sportsCar } from "@/images";
import { MdOutlineChevronLeft, MdOutlineChevronRight } from "react-icons/md";
import Slide from "./Slide";
import useSpacing from "@/Hook/Hook";

interface SlideData {
  img: any; // Image path or URL
  title: string;
}

const PrecisePromt = () => {
  const { dynamicPaddingLeft } = useSpacing(1232);
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const swiperRef = useRef<any>(null);

  const handleSlideChange = (swiper: any) => {
    setActiveIndex(swiper.activeIndex); // Track the active index
  };

  const data: SlideData[] = [
    { img: lavenderPath, title: "Lavender Path to Serenity" },
    { img: sportsCar, title: "Sleek Sports Car in Garage" },
    { img: lavenderPath, title: "Lavender Path to Serenity" },
    { img: sportsCar, title: "Sleek Sports Car in Garage" },
  ];

  return (
    <section className="bg-black700 py-4 sm:py-6 lg:py-10">
      <section
        className="spacing-left section-spacing screen1340:pl-auto screen1340:w-full ml-auto md:ml-auto py-32 flex flex-col gap-10 md:gap-10"
        style={
          {
            "--spacing-left": `${dynamicPaddingLeft}px`,
          } as React.CSSProperties
        }
      >
        <div className="max-w-[773px] w-full md:w-11/12 flex flex-col gap-2 sm:gap-4 md:gap-4">
          <h2 className=" text-white text-[40px] md:text-[50px] lg:text-6xl  font-bold leading-tight">
            Outstanding Image Quality, Lifelike Details
          </h2>
          <p className="text-base md:text-xl text-white ">
            FLUX.1 generates images that surpass similar products in quality.
            From delicate textures to subtle lighting, every pixel showcases
            extraord{" "}
          </p>
        </div>
        <Swiper
          modules={[Navigation]}
          onSlideChange={handleSlideChange}
          loop={true}
          slidesPerView={2}
          spaceBetween={30}
          breakpoints={{
            1281: {
              slidesPerView: 2.95,
            },
            1025: {
              slidesPerView: 2.3,
              spaceBetween: 30,
            },
            768: {
              slidesPerView: 1.9,
            },
            521: {
              slidesPerView: 1.4,
              spaceBetween: 24,
            },
            281: {
              spaceBetween: 12,
              slidesPerView: 1.1,
            },
          }}
          className="w-full px-4"
          ref={swiperRef}
        >
          {data?.map((el, i) => (
            <SwiperSlide key={i}>
              <Slide {...el} />
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Custom Navigation Buttons */}
        <div className="hidden md:flex justify-end gap-4 mx-auto max-w-[790px] w-full">
          <button
            className="arrowButton "
            onClick={() => swiperRef.current?.swiper.slidePrev()}
          >
            <MdOutlineChevronLeft className="text-black hover:text-green text-xl" />
          </button>
          <button
            className="arrowButton "
            onClick={() => swiperRef.current?.swiper.slideNext()}
          >
            <MdOutlineChevronRight className="text-black hover:text-green text-xl" />
          </button>
        </div>
      </section>
    </section>
  );
};

export default PrecisePromt;
