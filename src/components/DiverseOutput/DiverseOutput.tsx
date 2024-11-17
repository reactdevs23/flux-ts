"use client";

import { car, robotImg, sportsCar } from "@/images";
import Image from "next/image";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper/modules";
import Card from "./Card";

// Define the data item type
interface DataItem {
  title: string;
  info: string;
  img: { src: string }; // Assuming `img` is an object with a `src` property
}

const DiverseOutput: React.FC = () => {
  const data: DataItem[] = [
    {
      title: "Pixel Art",
      info: "From pixel art to photorealistic images, meeting various creative needs",
      img: sportsCar,
    },
    {
      title: "Pixel Art",
      info: "From pixel art to photorealistic images, meeting various creative needs",
      img: robotImg,
    },
    {
      title: "Pixel Art",
      info: "From pixel art to photorealistic images, meeting various creative needs",
      img: robotImg,
    },
    {
      title: "Pixel Art",
      info: "From pixel art to photorealistic images, meeting various creative needs",
      img: robotImg,
    },
  ];

  return (
    <section className="section-spacing container mx-auto flex flex-col items-center gap-8 sm:gap-12 md:gap-16">
      <div className="max-w-[882px] w-full flex flex-col gap-2 sm:gap-4 md:gap-6">
        <h2 className="heading text-center">Diverse Outputs</h2>
        <p className="text text-center">
          From pixel art to photorealistic images, meeting various creative
          needs
        </p>
      </div>

      <div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-6 md:gap-24 max-w-[450px] sm:max-w-full w-full">
          {/* For desktop */}
          <div className="hidden sm:flex flex-col gap-2">
            {data.map((el, i) => (
              <Card {...el} key={i} />
            ))}
          </div>
          {/* Slider for mobile devices */}
          <div className="block sm:hidden order-2">
            <Swiper
              slidesPerView={1}
              spaceBetween={16}
              pagination={{ clickable: true }}
              modules={[Pagination, Autoplay]}
              autoplay={{
                delay: 2500,
                pauseOnMouseEnter: true,
              }}
            >
              {data.map((el, i) => (
                <SwiperSlide key={i}>
                  <Card {...el} />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
          <div className="w-full overflow-hidden h-full rounded-[24px] md:rounded-[30px] order-1 md:order-2">
            <Image
              width={537}
              height={492}
              src={robotImg.src}
              alt="Generated Img"
              className="w-full h-full rounded-[24px] md:rounded-[30px] object-cover object-center origin-center transition-all cursor-pointer hover:scale-110"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default DiverseOutput;
