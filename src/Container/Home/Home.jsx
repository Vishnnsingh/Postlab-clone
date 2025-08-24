import React, { useState, useEffect } from "react";
import CardsSection from "../../Components/CardsSection";
import InvestorsBuilders from "../../Components/InvestorsBuilders";
import HeroSection from "../../Components/HeroSection";
import MissionSection from "../../Components/MissionSection";

const Home = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

 
  useEffect(() => {
    const handleMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    
     <>
     <div
      className="relative min-h-screen bg-[#fdfdf7] flex flex-col overflow-hidden"
      style={{
        background: `radial-gradient(circle at ${position.x}px ${position.y}px, rgba(255, 255, 0, 0.4), transparent 50%)`,
      }}
    >
      
      <header className="flex justify-between items-start px-8 py-6">
       
        <h1 className="text-xl font-semibold">
          <span className="mr-1">&lt;/&gt;</span>PostLabs
        </h1>

        
        <p className="text-sm text-right max-w-xs leading-snug">
          We’re building the backbone of Canadian digital media — 
          a next-gen platform that gives creators the tools to thrive.
        </p>
      </header>

      
      <main className="flex-1 flex flex-col justify-center px-8">
        <h2 className="text-7xl font-bold max-w-4xl leading-tight text-black">
          The Future of <br /> News Starts Here
        </h2>
      </main>

    
      <div className="absolute bottom-10 right-16 text-black">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="80"
          height="80"
          viewBox="0 0 24 24"
          fill="none"
          stroke="black"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <line x1="12" y1="5" x2="12" y2="19" />
          <polyline points="19 12 12 19 5 12" />
        </svg>
      </div>
     
    </div>
     
      <CardsSection />
     
      <MissionSection />
      <HeroSection className="sticky top-0 z-20" />

      <InvestorsBuilders />
     </>
  );
};

export default Home;
