import { car, ocean, spaceShip, doll, girl } from "@/images";
import Image from "next/image";
import React from "react";

// Define the type for image objects
type ImageType = {
  src: string;
  alt: string;
};

const HeroSection = () => {
  // Create an array of images with the defined type
  const images: ImageType[] = [
    { src: car.src, alt: "Car" },
    { src: spaceShip.src, alt: "Space Ship" },
    { src: girl.src, alt: "Girl" },
    { src: doll.src, alt: "Doll" },
    { src: ocean.src, alt: "Ocean" },
  ];

  return (
    <section className="bg-primary-gradient relative z-10 pt-32 lg:pt-48 pb-12 md:pb-20 flex flex-col gap-16 w-full">
      <div className="mx-auto max-w-[850px] flex flex-col gap-6 xl:gap-10 container">
        <h1 className="heading text-center">
          FLUX.1: Revolutionary AI Image Generation
        </h1>
        <p className="text text-center font-medium max-w-[620px] mx-auto">
          We bring you the cutting-edge FLUX.1 AI image generation technology.
          Unleash your creativity and experience unparalleled freedom in image
          creation.
        </p>
        <button className="button">Generate Now</button>
      </div>
      <div className="grid grid-cols-2 grid-rows-1 sm:grid-cols-7 gap-2 sm:gap-4 w-full container">
        {images.map((image, index) => (
          <div
            key={index}
            className={`w-full h-full hero-img${
              index + 1
            } rounded-2xl overflow-hidden`}
          >
            <Image
              src={image.src}
              width={800}
              height={500}
              alt={image.alt}
              className="w-full h-full rounded-2xl object-cover object-center origin-center transition-transform duration-500 cursor-pointer hover:scale-110 rounded-[15px]"
            />
          </div>
        ))}
      </div>
      <div className="hero-overlay-1"></div>
      <div className="hero-overlay-2"></div>
    </section>
  );
};

export default HeroSection;
