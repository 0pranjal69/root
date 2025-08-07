import React from "react";
import { Link } from "react-router-dom";
import Footer from "./Footer";
import Cata from "./Cata";

function Pots() {
  const potGroups = [
    {
      pot1: { img: "/pot1.jpg", title: "VESSEL", subtitle: "(floor pot)" },
      pot2: { img: "/final 2 .jpg", title: "petalia", subtitle: "(floor pot)" },
      pot3: { img: "/pot3.jpg", title: "Lunara", subtitle: "(table POT)" },
      pot4: { img: "/pot4.jpg", title: "Terra", subtitle: "(floor pot)" },
    },
    {
      pot1: { img: "/pot5.jpg", title: "Bloomia", subtitle: "(floor pot)" },
      pot2: { img: "/pot6.jpg", title: "Lotus", subtitle: "(table pot)" },
      pot3: { img: "/pot7.jpg", title: "squara", subtitle: "(table pot)" },
      pot4: { img: "/pot8.jpg", title: "conica", subtitle: "(table pot)" },
    },
    {
      pot1: { img: "/pot9.jpg", title: "vine", subtitle: "(floor pot)" },
      pot2: { img: "/pot10.jpg", title: "Tanno", subtitle: "(floor pot)" },
      pot3: { img: "/pot11.jpg", title: "Ova", subtitle: "(floor pot)" },
      pot4: { img: "/q mark.jpg", title: "Coming soon", subtitle: "(under process)" },
    },
  ];

  const formatTitleForUrl = (title) =>
    title.toLowerCase().replace(/\s+/g, "-");

  return (
    <div className="w-full bg-[#efecdb]">
      <div className="head w-full bebas text-[#EFECDB] text-4xl leading-none flex flex-wrap items-center">
        <div className="text w-full sm:w-max px-6 py-3 bg-[#047A8E] sm:mr-2">
          <h1>TYPES OF POTS</h1>
        </div>
        <h1 className="text-[#047A8E] px-6 sm:px-0 py-2">WE OFFER:</h1>
      </div>

      {potGroups.map((group, groupIndex) => (
        <div key={groupIndex} className="px-4 sm:px-10">
          {/* Top Row */}
          <div className="flex flex-col md:flex-row justify-center items-center w-full gap-6 py-6">
            {/* pot1 */}
            <div className="flex flex-col md:flex-row w-full md:w-1/2 gap-4">
              <Link
                to={`/pot/${formatTitleForUrl(group.pot1.title)}`}
                className="w-full md:w-[70%] relative overflow-hidden"
              >
                <img
                  src={group.pot1.img}
                  alt={group.pot1.title}
                  className="w-full h-auto object-cover border-2 border-[#047A8E] rounded-2xl"
                />
                <span className="absolute inset-0 bg-[#00000055] opacity-0 hover:opacity-100 flex justify-center items-center text-2xl md:text-4xl rounded-2xl amatic text-white transition-opacity duration-300">
                  <h1 className="text-center px-4">Click here to see more</h1>
                </span>
              </Link>
              <div className="text bebas text-[#047A8E]">
                <h1 className="text-2xl md:text-4xl">{group.pot1.title}</h1>
                <h2 className="text-sm md:text-[17px]">{group.pot1.subtitle}</h2>
              </div>
            </div>

            {/* pot2 */}
            <div className="flex flex-col-reverse md:flex-row w-full md:w-1/2 gap-4">
              <div className="text bebas text-right text-[#047A8E]">
                <h1 className="text-2xl md:text-4xl">{group.pot2.title}</h1>
                <h2 className="text-sm md:text-[17px]">{group.pot2.subtitle}</h2>
              </div>
              <Link
                to={`/pot/${formatTitleForUrl(group.pot2.title)}`}
                className="w-full md:w-[70%] relative overflow-hidden"
              >
                <img
                  src={group.pot2.img}
                  alt={group.pot2.title}
                  className="w-full h-auto object-cover border-2 border-[#047A8E] rounded-2xl"
                />
                <span className="absolute inset-0 bg-[#00000055] opacity-0 hover:opacity-100 flex justify-center items-center text-2xl md:text-4xl rounded-2xl amatic text-white transition-opacity duration-300">
                  <h1 className="text-center px-4">Click here to see more</h1>
                </span>
              </Link>
            </div>
          </div>

          {/* Bottom Row */}
          <div className="flex flex-col md:flex-row justify-center items-center w-full gap-6 py-6">
            {/* pot3 */}
            <div className="flex flex-col-reverse md:flex-row w-full md:w-1/2 gap-4">
              <div className="text bebas text-right text-[#047A8E]">
                <h1 className="text-2xl md:text-4xl">{group.pot3.title}</h1>
                <h2 className="text-sm md:text-[17px]">{group.pot3.subtitle}</h2>
              </div>
              <Link
                to={`/pot/${formatTitleForUrl(group.pot3.title)}`}
                className="w-full md:w-[70%] relative overflow-hidden"
              >
                <img
                  src={group.pot3.img}
                  alt={group.pot3.title}
                  className="w-full h-auto object-cover border-2 border-[#047A8E] rounded-2xl"
                />
                <span className="absolute inset-0 bg-[#00000055] opacity-0 hover:opacity-100 flex justify-center items-center text-2xl md:text-4xl rounded-2xl amatic text-white transition-opacity duration-300">
                  <h1 className="text-center px-4">Click here to see more</h1>
                </span>
              </Link>
            </div>

            {/* pot4 */}
            <div className="flex flex-col md:flex-row w-full md:w-1/2 gap-4">
              <Link
                to={`/pot/${formatTitleForUrl(group.pot4.title)}`}
                className="w-full md:w-[70%] relative overflow-hidden"
              >
                <img
                  src={group.pot4.img}
                  alt={group.pot4.title}
                  className="w-full h-auto object-cover border-2 border-[#047A8E] rounded-2xl"
                />
                <span className="absolute inset-0 bg-[#00000055] opacity-0 hover:opacity-100 flex justify-center items-center text-2xl md:text-4xl rounded-2xl amatic text-white transition-opacity duration-300">
                  <h1 className="text-center px-4">Click here to see more</h1>
                </span>
              </Link>
              <div className="text bebas text-[#047A8E]">
                <h1 className="text-2xl md:text-4xl">{group.pot4.title}</h1>
                <h2 className="text-sm md:text-[17px]">{group.pot4.subtitle}</h2>
              </div>
            </div>
          </div>
        </div>
      ))}

      <Cata />
      <Footer />
    </div>
  );
}

export default Pots;
