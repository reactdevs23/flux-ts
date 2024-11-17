import React from "react";
import Image from "next/image";

// Define the type for the Slide component props
interface SlideProps {
  name: string;
  img: string;
  feedback: string;
  country: string;
}

const Slide: React.FC<SlideProps> = ({ name, img, feedback, country }) => {
  return (
    <div className="flex items-center h-full">
      <div className="flex gap-4 lg:gap-6  bg-white p-6 md:p-8 rounded-[19px]">
        <h2 className="opacity-40 	 font-unbounded text-gray text-[50px] md:text-[70px] lg:text-[90px] xl:text-[110px] leading-none -mt-4 lg:-mt-2 inline-block font-medium leading-none">
          “
        </h2>
        <div className="flex flex-col gap-4 lg:gap-6">
          <p className="text-base md:text-xl text-black font-medium">
            {feedback}
          </p>
          <div className="flex items-center gap-2">
            <Image
              src={img}
              width={100}
              height={100}
              alt={name}
              className="w-8 h-8 md:w-11 md:h-11 rounded-full border-1 border-white object-cover object-center"
            />
            <div className="flex flex-col">
              <p className="text-black opacity-50 text-[14.784px] md:text-xl font-medium leading-[100%] md:leading-[90%]">
                {name}
              </p>
              <p className="text-black opacity-50 text-[11.264px] md:text-base font-medium">
                {country}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slide;
