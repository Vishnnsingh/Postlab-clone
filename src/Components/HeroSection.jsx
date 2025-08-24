import React from "react";
import { motion } from "framer-motion";

const textVariants = {
  hidden: { opacity: 0, y: 100 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.4, duration: 0.8, ease: "easeOut" },
  }),
};

const HeroSection = () => {
  return (
    <div
      className="relative h-screen w-full bg-cover bg-center"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80')",
      }}
    >
     
      <div className="absolute inset-0 bg-black/40"></div>

      
      <div className="relative flex flex-col justify-center items-start h-full px-12 space-y-4">
        {["Built for Scale", "Creators", "Canada"].map((text, i) => (
          <motion.h1
            key={i}
            className="text-6xl md:text-7xl font-light text-white"
            variants={textVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.5 }}
            custom={i}
          >
            {text}
          </motion.h1>
        ))}
      </div>
    </div>
  );
};

export default HeroSection;
