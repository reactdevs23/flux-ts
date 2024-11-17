import React from "react";

// Define the props type for Card component
interface CardProps {
  title: string;
  info: string;
}

const Card: React.FC<CardProps> = ({ title, info }) => {
  return (
    <div className="flex flex-col gap-2 py-3 md:border-b border-black border-opacity-10 transition-transform transition-all duration-300 ease-in-out duration-500 cursor-pointer group pb-12 sm:pb-3 last:border-0">
      <h3 className="text text-lg font-bold text-black group-hover:text-green">
        {title}
      </h3>
      <p className="text text-black group-hover:text-green]">{info}</p>
    </div>
  );
};

export default Card;
