import Image from "next/image";
import React from "react";

// Define prop types for the Slide component
interface SlideProps {
  img: string; // Image path or URL
  title: string;
}

const Slide: React.FC<SlideProps> = ({ img, title }) => {
  return (
    <div className="flex flex-col gap-4 lg:gap-6 items-start h-full">
      <div className="overflow-hidden w-full h-full rounded-[24px] md:rounded-[30px]">
        <Image
          src={img}
          width={684}
          height={490}
          alt={title}
          className="w-full h-full rounded-[24px] md:rounded-[30px] object-cover object-center origin-center transition-transform duration-500 cursor-pointer hover:scale-110"
        />
      </div>
      <div className="flex flex-col sm:gap-1">
        <p className="text-green text-sm md:text-base font-bold leading-[100%] md:leading-[90%]">
          Prompt:
        </p>
        <p className="text-white text-base md:text-xl font-medium">{title}</p>
      </div>
    </div>
  );
};

export default Slide;
