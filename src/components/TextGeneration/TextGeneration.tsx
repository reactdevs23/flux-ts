import React from "react";
import Card from "./Card";
import { empmob, flusImage, realbeauty } from "@/images";

// Define a type for the data object passed to Card
interface DataItem {
  img: { src: string }; // img is an object with src field as a string
  title: string; // Title is a string
}

const TextGeneration: React.FC = () => {
  // Define the data with correct typing
  const data: DataItem[] = [
    { img: realbeauty, title: "Lavender Path to Serenity" },
    { img: empmob, title: "Lavender Path to Serenity" },
    { img: flusImage, title: "Lavender Path to Serenity" },
  ];

  return (
    <section className="container section-spacing flex flex-col gap-10 md:gap-16">
      <div
        className={"max-w-[882px] w-full flex flex-col gap-2 sm:gap-4 md:gap-6"}
      >
        <h2 className="heading">
          Perfect Text Generation, No More Garbled Characters
        </h2>
        <p className="text max-w-[773px] w-full">
          Need to add text to your images? FLUX.1 handles it with ease. Enjoy
          clear, readable text with perfect control over font, size, color, and
          position, making your designs more professional.
        </p>
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-8 lg:gap-6">
        {data.map((el, i) => (
          <Card {...el} key={i} />
        ))}
      </div>
    </section>
  );
};

export default TextGeneration;
