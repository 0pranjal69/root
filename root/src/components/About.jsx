import React from "react";

function About() {
  return (
    <div className="min-h-screen bg-[#2c3419] w-full flex items-center justify-center px-4 py-8 sm:py-0">
      <div className="main rounded-[20px] flex flex-col md:flex-row items-center justify-center h-auto md:h-[80vh] w-full max-w-[1200px] bg-[#efecdb] overflow-hidden sm:text-[#adb987] text-[#41472c] relative">
        <div className="Information w-full md:w-1/3 h-auto md:h-full p-4 sm:p-6 flex flex-col justify-between gap-4">
          <div>
            <h1 className="text-xl sm:text-2xl font-bold">
              Roots-FRP Flower Pots Made
            </h1>
            <b>with</b>
            <h1 className="text-lg sm:text-xl leading-tight mt-1 italic">
              "Intention That Bringing Nature Home"
            </h1>
          </div>
          <div className="text-xs sm:text-sm leading-snug flex flex-col gap-2 mt-4">
            <p>
              "ROOTS by Sriijan Technologies" crafted fibre pots not just to
              hold plants, but to hold meaning. Every planter we make is
              designed with the belief that bringing nature into your home.
              Flower Pots are not just about decoration, it's about creating a
              space that feels alive, cared for, and connected.
            </p>
            <p>
              Our lightweight, durable fibre pots are customized with heart and
              purpose. They're made for people who don't just place plants
              around/inside the house, but who nurture them, who understand that
              greenery isn't just visual beauty, but a living presence that
              grows with you.
            </p>
            <p>
              These pots are more than functional. They are quiet companions in
              your everyday life that gentle reminders of care, patience, and
              love. With each fibre pot, you're not just choosing a container,
              you're choosing to invite life in, to take care, and to feel more
              grounded in your space.
            </p>
            <b>
              Bring home again your ROOTS (the fibre pot) that grows with you!
            </b>
          </div>
        </div>

        <div className="Address w-full md:w-1/3 h-auto md:h-full flex justify-start md:justify-end p-4 sm:p-6">
          <div className="w-full md:w-[80%] text-xs sm:text-sm font-semibold">
            <div className="flex flex-col gap-2">
              <p>Email: srijantechnologies22@gmail.com</p>
              <p>Contact: +91 9599194890 / 92</p>
              <p>
                Find us: S-207, 2ND Floor, Ajnara Bhawan, D-Block Market, Vivek
                Vihar, Ph-1, Delhi-10095
              </p>
            </div>
          </div>
        </div>

        <div className="image w-1/2 sm:relative absolute h-full right-0">
          <img
            src="/root-2.png"
            alt="img not found"
            className=" h-full absolute right-0 w-1/2 sm:opacity-100 opacity-50 z-0"
          />
        </div>
      </div>
    </div>
  );
}

export default About;
