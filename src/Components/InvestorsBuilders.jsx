// src/components/InvestorsBuilders.jsx
import React from "react";

const InvestorsBuilders = () => {
  return (
    <div className="grid grid-cols-2 grid-rows-2 h-screen w-full bg-gradient-to-b from-white to-yellow-100">
 
      <div className="flex flex-col justify-center items-start p-12 border">
        <h1 className="text-6xl font-bold">For Investors</h1>
        <p className="mt-6 text-lg text-gray-700 max-w-lg">
          We’re raising capital to scale fast. If you’re an investor who believes
          in the future of independent Canadian media, we’d love to speak with
          you.
        </p>
        <a
          href="mailto:invest@postlabs.com"
          className="mt-4 text-xl font-medium text-blue-600 underline"
        >
          invest@postlabs.com
        </a>
      </div>

     
      <div className="border-white"></div>

      
      <div className="border-white"></div>

    
      <div className="flex flex-col justify-center items-start p-12 border">
        <h1 className="text-6xl font-bold">For Builders</h1>
        <p className="mt-6 text-lg text-gray-700 max-w-lg">
          We’re hiring. If you’re passionate about media, technology, and the
          future of Canada’s digital ecosystem, come build with us. We’re always
          looking for great people.
        </p>
        <a
          href="mailto:careers@postlabs.com"
          className="mt-4 text-xl font-medium text-blue-600 underline"
        >
          careers@postlabs.com
        </a>
      </div>
    </div>
  );
};

export default InvestorsBuilders;
