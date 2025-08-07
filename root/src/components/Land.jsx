import React, { useEffect, useState } from "react";
import Rev from "./Rev.jsx"; // Assuming Rev is another component you want to use

function Land() {
  const [visible, setVisible] = useState(true);
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    // Trigger the upward animation after a short delay
    setTimeout(() => {
      setAnimate(true);
    }, 2000);
    // slight delay to allow the initial render

    // Hide the component after 2s
    setTimeout(() => {
      setVisible(false);
    }, 3500);
  }, []);

  if (!visible) return null;

  return (
    <div
      className={`bg-[#efecdb] z-[20] fixed h-screen w-full flex items-center justify-center 
      transition-transform duration-1000 ease-in-out
      ${animate ? "-translate-y-full " : ""}`}
    >
      <Rev />
    </div>
  );
}

export default Land;
