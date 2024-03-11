// WelcomeSection.jsx
import React from "react";

const WelcomeSection = () => {
  return (
    <div
      className="pr-5 mt-40 mr-5 text-5xl font-bold text-center leading-[76px] max-md:mt-10 max-md:max-w-full max-md:text-4xl max-md:leading-[49px] w-1/2 object-contain"
      id="welcome"
    >
      <p>
        Welcome to the World
        <br />
        of Extraordinary Travel
      </p>
      <div className="mx-5 mt-auto text-2xl font-semibold leading-8 text-center max-md:mr-2.5 max-md:max-w-full">
        If you're in search of exciting adventures, unforgettable experiences,
        and breathtaking places to explore, you've come to the right place!
      </div>
    </div>
  );
};

export default WelcomeSection;
