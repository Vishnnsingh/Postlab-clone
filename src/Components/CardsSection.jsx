import React from "react";

const Section = ({ icon, text }) => {
  return (
    <div className="h-screen flex items-center justify-center sticky top-0">
      <div className="bg-black rounded-4xl w-[750px] h-[450px] flex flex-col justify-between p-6 text-white shadow-xl">
        
        <div className="flex space-x-1">{icon}</div>

      
        <p className="text-2xl font-medium">{text}</p>
      </div>
    </div>
  );
};

const CardsSection = () => {
  return (
    <section className="relative">
      <Section
        icon={
          <>
            <div className="w-4 h-4 rounded-full bg-yellow-400"></div>
            <div className="w-4 h-4 rounded-full bg-yellow-400"></div>
            <div className="w-4 h-4 rounded-full bg-yellow-400"></div>
          </>
        }
        text="Empowering Creators."
      />
      <Section
        icon={
          <>
            <div className="w-4 h-4 rounded-full bg-yellow-400"></div>
            <div className="w-4 h-4 rounded-full bg-yellow-400"></div>
            <div className="w-4 h-4 rounded-full bg-yellow-400"></div>
            <div className="w-4 h-4 rounded-full bg-yellow-400"></div>
          </>
        }
        text="Transforming Publishing."
      />
      <Section
        icon={
          <>
            <div className="w-4 h-4 rounded-full bg-yellow-400"></div>
            <div className="w-4 h-4 rounded-full bg-yellow-400"></div>
            <div className="w-4 h-4 rounded-full bg-yellow-400"></div>
          </>
        }
        text="Reclaiming Canadian Media."
      />
    </section>
  );
};

export default CardsSection;















// import React from "react";

// const CardsSection = () => {
//   return (
//     <div className="relative flex justify-center space-x-6 h-[200vh] bg-gray-100">
//       {/* Wrapper jo scroll ke sath chalega */}
//       <div className="sticky top-20 flex justify-center items-center w-full">
//         <div className="relative flex space-x-6">
//           {/* Card 1 */}
//           <div className="w-60 h-80 bg-blue-500 rounded-xl shadow-xl z-30 
//                           transition-transform duration-500 
//                           hover:translate-y-[-10px]">
//           </div>

//           {/* Card 2 */}
//           <div className="w-60 h-80 bg-green-500 rounded-xl shadow-xl z-20 
//                           -ml-20 md:ml-0">
//           </div>

//           {/* Card 3 */}
//           <div className="w-60 h-80 bg-red-500 rounded-xl shadow-xl z-10 
//                           -ml-20 md:ml-0">
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default CardsSection;
