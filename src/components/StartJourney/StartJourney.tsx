import React from "react";

const StartJourney: React.FC = () => {
  return (
    <section className="section-spacing max-w-[1061px] md:w-full w-11/12 mx-auto flex flex-col gap-2 sm:gap-4 md:gap-8">
      <h2 className="heading text-center">Start Your Creative Journey Now</h2>
      <p className="text text-center w-full max-w-[818px] mx-auto">
        At flux-image.com, we not only provide top-tier AI image generation
        technology but also offer comprehensive support for your creations. The
        one-click Markdown export feature streamlines your workflow, while our
        unlimited bandwidth image hosting ensures you can share your work
        freely.
      </p>
      <button className="button">Generate Now</button>
    </section>
  );
};

export default StartJourney;
