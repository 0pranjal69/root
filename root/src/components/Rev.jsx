import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const TextRevealSmooth = () => {
  const [show, setShow] = useState(true);
  const text = "Roots";

  useEffect(() => {
    const timer = setTimeout(() => setShow(false), 1500); // Adjust hide timer accordingly
    return () => clearTimeout(timer);
  }, []);

  const variants = {
    initial: { maskPosition: "200% 0" },
    animate: { maskPosition: "50% 0" },
    exit: { maskPosition: "-100% 0" },
  };

  return (
    <div className=" flex items-center justify-center ">
      <AnimatePresence>
        {show && (
          <motion.div
            key="text"
            initial="initial"
            animate="animate"
            exit="exit"
            variants={variants}
            transition={{ duration: 1, ease: "easeInOut" }}  
            className="text-6xl font-bold text-[#78923b] righteous-regular  whitespace-nowrap"
            style={{
              WebkitMaskImage:
                "linear-gradient(to left, transparent 0%, black 30%, black 70%, transparent 100%)",
              maskImage:
                "linear-gradient(to left, transparent 0%, black 30%, black 70%, transparent 100%)",
              WebkitMaskRepeat: "no-repeat",
              maskRepeat: "no-repeat",
              WebkitMaskSize: "300% 100%",
              maskSize: "300% 100%",
            }}
          >
            {text}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default TextRevealSmooth;
