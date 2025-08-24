import React, { useEffect, useState } from "react";

const MissionSection = () => {
  const [scale, setScale] = useState(1);

  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById("video-section");
      if (!section) return;

      const rect = section.getBoundingClientRect();
      const windowHeight = window.innerHeight;

 
      const progress = Math.min(
        Math.max((windowHeight - rect.top) / (windowHeight + rect.height), 0),
        1
      );

      const newScale = 1 + progress * 1.5;
      setScale(newScale);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
     
      <section className="relative min-h-screen flex flex-col items-center justify-center bg-[#fdfdf7] px-6 text-center overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-40 bg-gradient-to-b from-[#fdfdf7] to-transparent pointer-events-none z-10"></div>

        <h2 className="text-3xl md:text-5xl font-normal leading-snug max-w-3xl text-black relative z-0">
          Post Labs is rethinking <br />
          how digital media works <br />
          for Canadians. Our <br />
          mission is simple: make <br />
          journalism profitable, <br />
          sustainable, and trusted –{" "}
          <span className="text-gray-400">
            built for Canadians, by Canadians.
          </span>
        </h2>
      </section>

      
      <section
        id="video-section"
        className="h-[150vh] relative flex items-center justify-center bg-white overflow-hidden"
      >
        <div className="sticky top-0 flex items-center justify-center h-screen">
          <video
            className="w-[400px] md:w-[700px] rounded-2xl shadow-lg object-cover transition-transform duration-300 ease-out"
            style={{ transform: `scale(${scale})` }}
            autoPlay
            muted
            loop
            playsInline
          >
            <source src="https://cdn.prod.website-files.com/681dfdff4444ca819f7050a2%2F682e229ec192a9f049ae0b4a_post-labs-video-1-transcode.mp4" type="video/mp4" />
            <source src="https://cdn.prod.website-files.com/681dfdff4444ca819f7050a2%2F682e229ec192a9f049ae0b4a_post-labs-video-1-transcode.webm" type="video/webm" />
          </video>
        </div>
      </section>

     
      <section className="bg-[#fdfdf7] py-32 px-6 flex justify-start">
        <h2 className="text-8xl md:text-7xl font-bold text-black max-w-full">
          What We’re <br></br> Building
        </h2>
      </section>

      <section className="bg-white py-32 px-6 flex justify-center">
        <p className="text-xl md:text-3xl text-gray-700 max-w-2xl text-right">
          Post Labs is building a homegrown platform designed for Canadians and
          the future of Canadian media.
        </p>
      </section>

    
      <section className="bg-[#fdfdf7] py-32 px-6 flex justify-end">
        <p className="text-xl md:text-3xl text-gray-700 max-w-2xl text-right">
          At its core is PostOS, our made-in-Canada publishing engine that
          connects local voices, communities, and trusted journalism in one
          seamless digital experience.
        </p>
      </section>

      
      <section className="bg-white py-32 px-6 flex justify-center">
        <p className="text-xl md:text-3xl text-gray-700 max-w-2xl text-center md:text-right">
          Built by Canadians, for Canadians, PostOS is more than just
          technology — it’s a way to bring our stories home.
        </p>
      </section>
    </>
  );
};

export default MissionSection;
