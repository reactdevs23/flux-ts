import { imageHostingIcon, markdownexportIcon } from "@/images";
import Image from "next/image";
import React from "react";

// Define types for each data item
interface DataItem {
  icon?: { src: string }; // The icon can either be an object with src property or undefined
  iconText?: string; // Optional text for the icon
  title: string;
  info: string;
}

const UniqueAdvantages: React.FC = () => {
  const data: DataItem[] = [
    {
      icon: markdownexportIcon,
      title: "One-Click Markdown Export",
      info: "From pixel art to photorealistic images, meeting various creative needs",
    },
    {
      iconText: "6x",
      title: "Efficient Generation",
      info: "6 times faster than the previous generation, quickly realizing your ideas",
    },
    {
      iconText: "2 MP",
      title: "UP to 2.0 Million Pixels",
      info: "Supporting 0.1 to 2.0 million pixels, adapting to different scenarios",
    },
    {
      icon: imageHostingIcon,
      title: "Unlimited Bandwidth Image Hosting",
      info: "From pixel art to photorealistic images, meeting various creative needs",
    },
  ];

  return (
    <section className="section-spacing container mx-auto flex flex-col gap-10 sm:gap-12 md:gap-16">
      <h2 className="heading text-center">More Unique Advantages</h2>

      <div className="grid max-w-[480px] mx-auto sm:gap-y-8 md:max-w-full md:grid-cols-2 gap-y-12 lg:gap-y-16 gap-x-16 lg:gap-x-24">
        {data.map((el, i) => (
          <div className="flex flex-col gap-2" key={i}>
            {el.icon && (
              <Image
                src={el.icon.src}
                width={58}
                height={36}
                alt={el.title}
                className="w-[45px]"
              />
            )}
            {el.iconText && (
              <h3 className="text-[#16C66E] font-bold text-3xl leading-tight">
                {el.iconText}
              </h3>
            )}
            <h3 className="text-xl text-black font-bold leading-tight">
              {el.title}
            </h3>
            <p className="font-normal text-base md:text-xl text-black">
              {el.info}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default UniqueAdvantages;
