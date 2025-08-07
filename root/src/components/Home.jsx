import React from "react";
import HomeHero from "./HomeHero";
import Pots from "./Pots";

function Home() {
  return (
    <>
      <HomeHero />

      <div className="w-full bg-[#efecdb] flex flex-col lg:flex-row items-center justify-between px-4 sm:px-10 py-10 gap-10">
        <div className="w-full lg:w-1/2 flex items-center justify-center">
          <div className="text max-w-lg">
            <div className="head">
              <h1
                className="text-[#047A8E] font-bold text-2xl sm:text-3xl md:text-4xl tracking-wide uppercase amatic"
                style={{
                  textShadow: "0px 6px 4.4px rgba(0, 0, 0, 0.25)",
                }}
              >
                Bring home again your roots
                <br />
                <span className="text-xl md:text-3xl block">
                  (The fibre pot) that grows with you.
                </span>
              </h1>
            </div>
            <div className="para mt-6">
              <p className="text-gray-800 text-sm md:text-base text-justify leading-7">
                "ROOTS by Srijan Technologies" crafted fibre pots not just to
                hold plants, but to hold meaning. Every planter we make is
                designed with the belief that bringing nature into your home.
                Fibre Pots are not just about decoration, it’s about creating a
                space that feels alive, cared for, and connected. Our
                lightweight, durable fibre pots are customized with heart and
                purpose. They’re made for people who don’t just place plants
                around inside the house, but with them, who understand that
                greenery isn’t just visual beauty, but a living presence that
                grows with you. These pots are more than functional. They are
                quiet companions in your everyday life that gentle reminders of
                care, patience, and love. With each fibre pot, you’re not just
                choosing a container; you’re choosing to invite life in, to take
                care, and to feel more grounded in your space.
              </p>
            </div>
          </div>
        </div>

      
        <div className="w-full lg:w-1/2 flex items-center justify-center relative">
          <div className="relative flex justify-center items-center w-full h-full">
            <img
              src="/blue pot.png"
              alt="blue pot"
              className="h-64 sm:h-62 md:h-80 lg:h-[80%] object-contain rotate-[-15deg] z-10"
            />
            <img
              src="/black pot.png"
              alt="black pot"
              className="absolute top-0 sm:-right-10 right-0 h-64 sm:h-72 md:h-80 lg:h-[90%] object-contain opacity-80"
            />
          </div>
        </div>
      </div>

      <Pots />
    </>
  );
}

export default Home;
