import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-black text-white px-8 py-12 min-h-screen relative overflow-hidden">
      
     
      <div className="w-full overflow-hidden  pb-6 mb-10">
        <div className="whitespace-nowrap animate-marquee text-5xl font-semibold">
          Ready to Build the Future of Canadian Media? <span className="underline">Contact Us ↘</span> Ready to Build the Future of Canadian Media? <span className="underline">Contact Us ↘</span>
        </div>
      </div>

      
      <div className="w-full grid grid-cols-1 md:grid-cols-3 mt-44 ml-48 gap-96">
        
       
        <div>
          <h2 className="text-xl font-semibold">&lt;/&gt; PostLabs</h2>
        </div>

        <div className="space-y-2 w-72">
          <a href="/about" className="block hover:underline">About</a>
          <a href="/contact" className="block hover:underline">Contact</a>
          <a href="/privacy" className="block hover:underline">Privacy Policy</a>
          <a href="/cookies" className="block hover:underline">Cookie Policy</a>
          <div>
          <h3 className="mb-4 text-lg">Sign Up for Our Newsletter</h3>
          <form className="flex items-center border-b border-white pb-2">
            <input 
              type="email" 
              placeholder="Email Address" 
              className="bg-transparent flex-1 outline-none text-white placeholder-gray-400"
            />
            <button type="submit" className="ml-2">
              →
            </button>
          </form>
        </div>
        </div>

       
      </div>

     
      <div className="mt-32 w-full border-t border-gray-700 pt-4 flex flex-col md:flex-row justify-between text-sm text-gray-400">
        <p>© 2025 Post Labs, Inc. All rights reserved.</p>
        <p>Designed by HRVST.</p>
      </div>

      
      <style jsx>{`
        .animate-marquee {
          display: inline-block;
          min-width: 100%;
          animation: marquee 20s linear infinite;
        }
        @keyframes marquee {
          0% { transform: translateX(100%); }
          100% { transform: translateX(-100%); }
        }
      `}</style>
    </footer>
  )
}

export default Footer
