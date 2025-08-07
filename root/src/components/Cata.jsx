import React from "react";
import { Link } from "react-router-dom";

function Cata() {
  return (
    <>
      <div className="h-screen w-full relative flex justify-center items-center">
        <img
          src="/cata.jpg"
          alt=""
          className="absolute h-full w-full brightness-32"
        />
        <Link to="/catalogue" className="amatic relative bg-[#101700] p-5 text-3xl rounded-3xl border-2 border-[#77933B] hover:border-0  cursor-pointer text-[#EFECDB] overflow-hidden group z-10 active:scale-95 transition-transform duration-150 ease-in-out">
          <span className="absolute w-full  h-full bg-[#778a4b] top-full left-0 group-hover:top-0 transition-all  ease-in-out z-0"></span>
          <span className="relative z-10">
            Click here to check out our catalogue
          </span>
        </Link>
      </div>
    </>
  );
}

export default Cata;
