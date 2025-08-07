import React from "react";

function HomeHero() {
  return (
    <div className="w-full pt-[100px] h-screen relative overflow-hidden">
      {/* Background image */}
      <img
        src="/final 2 .jpg"
        alt="not found"
        className="absolute h-full w-full object-cover brightness-30"
      />

      {/* Pot image and text */}
      <div className="absolute h-2/3 w-[80%] sm:w-[60%] md:w-[40%] lg:w-[30%] left-1/2 top-1/4 -translate-x-1/2">
        <img
          src="/root pot.png"
          alt="not found"
          className="h-full w-full relative z-10"
        />

        {/* Top quote */}
        <span className="absolute top-0 w-full left-1/2 -translate-x-1/2 text-white amatic text-5xl sm:text-3xl  md:text-5xl text-center font-bold mt-5 z-20">
          <h1>"Intention that Bringing</h1>
        </span>

        {/* Bottom quote */}
        <span className="absolute bottom-[10vh] w-full left-1/2 -translate-x-1/2 text-white amatic text-4xl sm:text-2xl md:text-4xl text-center font-bold z-20">
          <h1>Your nature home"</h1>
        </span>
      </div>
    </div>
  );
}

export default HomeHero;
