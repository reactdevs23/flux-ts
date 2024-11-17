import React from "react";

import HeroSection from "@/components/HeroSection/HeroSection";
import DiverseOutput from "@/components/DiverseOutput/DiverseOutput";

import PrecisePromt from "@/components/PrecisePromt/PrecisePromt";
import StartJourney from "@/components/StartJourney/StartJourney";
import Testimonials from "@/components/Testimonials/Testimonials";
import TextGeneration from "@/components/TextGeneration/TextGeneration";
import UniqueAdvantages from "@/components/UniqueAdvantages/UniqueAdvantages";
import ImageQuality from "@/components/ImageQuality/ImageQuality";

const Home: React.FC = () => {
  return (
    <>
      <HeroSection />
      <Testimonials />
      <PrecisePromt />
      <ImageQuality />
      <TextGeneration />
      <DiverseOutput />
      <UniqueAdvantages />
      <StartJourney />
    </>
  );
};

export default Home;
